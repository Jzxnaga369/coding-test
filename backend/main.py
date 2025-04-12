from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import openai
import uvicorn
import os
import json
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

# .env 
openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # adjust in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Handle favicon biar ga error
app.mount("/static", StaticFiles(directory="static"), name="static")
@app.get("/favicon.ico")
async def favicon():
    return FileResponse("static/favicon.ico")

# Tanpa mengubah struktur project + "../"" Load dummy data
with open("../dummyData.json", "r") as f:
    DUMMY_DATA = json.load(f)

@app.get("/api/sales-reps")
def get_sales_reps():
    return DUMMY_DATA


# Percobaan ai menggunakan open.ai
@app.post("/api/ai")
async def ai_endpoint(request: Request):
    body = await request.json()
    user_question = body.get("question", "")

    if not user_question:
        return {"answer": "Please provide a question."}

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo", 
            messages=[{"role": "user", "content": user_question}]
        )
        ai_answer = response.choices[0].message.content.strip()
        return {"answer": ai_answer}
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)