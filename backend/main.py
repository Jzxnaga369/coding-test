from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from openai import OpenAI
import uvicorn
import os
import json
from dotenv import load_dotenv
import requests


# Load environment variables from .env
load_dotenv()

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

@app.get("/api/data")
def get_sales_reps():
	return DUMMY_DATA


# Percobaan ai menggunakan open.ai
# @app.post("/api/ai")
# async def ai_endpoint(request: Request):

# 		body = await request.json()
# 		question = body.get("question", "")

# 		if not question:
# 			return {"answer": "Please provide a question."}

# 		try:
# 			response = client.chat.completions.create(
# 				model="gpt-3.5-turbo", 
# 				messages=[{"role": "user", "content": question}]
# 			)
# 			answer = response.choices[0].message.content.strip()
# 			return {"answer": answer}
# 		except Exception as e:
# 			return {"error": str(e)}
# LIMIT QUOTA


# Open Router AI based on dummyData
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

def use_dummy_data(data, question):
	return json.dumps(data, indent=2)[:2000]

@app.post("/api/ai")
async def ai_endpoint(request: Request):
	body = await request.json()
	question = body.get("question", "")
	based_on_data = bool(body.get("based_on_data"))
	print(based_on_data)

	if not question:
		return {"answer": "Please provide a question."}

	try:
		if based_on_data:
			context = use_dummy_data(DUMMY_DATA, question)
			prompt = f"""Based on the data:\n{context}\nAnswer this question:\n{question}"""
		else:
			prompt = f"Answer this question:\n{question}"

		# Request to external API with the prompt
		response = requests.post(
			"https://openrouter.ai/api/v1/chat/completions",
			headers={
				"Authorization": f"Bearer {OPENROUTER_API_KEY}",
				"HTTP-Referer": "http://localhost",
				"X-Title": "My Local JSON QA App"
			},
			json={
				"model": "openai/gpt-3.5-turbo",
				"messages": [
					{"role": "user", "content": prompt}
				]
			}
		)

		result = response.json()
		answer = result["choices"][0]["message"]["content"]
		return {"answer": answer}

	except Exception as e:
		return {"error": str(e)}


if __name__ == "__main__":
	import multiprocessing
	multiprocessing.freeze_support()  # <-- important on Windows
	uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)