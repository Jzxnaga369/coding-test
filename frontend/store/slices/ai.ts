import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the state shape for AI functionality
interface AIState {
  question: string;
  answer: string;
  loading: boolean;
  error: string | null;
}

const initialState: AIState = {
  question: '',
  answer: '',
  loading: false,
  error: null,
};

export const fetchAIAnswer = createAsyncThunk<string, string, { rejectValue: string }>(
  'ai/fetchAIAnswer',
  async (question: string, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8000/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      if (!response.ok) {
        return rejectWithValue('Failed to get AI response');
      }
      const data = await response.json();
      return data.answer;
    } catch (error) {
      return rejectWithValue('Error fetching AI answer');
    }
  }
);

const aiSlice = createSlice({
  name: 'ai',
  initialState,
  reducers: {
    setQuestion: (state, action: PayloadAction<string>) => {
      state.question = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAIAnswer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAIAnswer.fulfilled, (state, action) => {
        state.loading = false;
        state.answer = action.payload;
      })
      .addCase(fetchAIAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      });
  },
});

export const { setQuestion } = aiSlice.actions;
export default aiSlice.reducer;