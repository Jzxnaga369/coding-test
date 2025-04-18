import { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSales } from '../store/slices/sales';
import { fetchAIAnswer, setQuestion } from '../store/slices/ai';
import NavbarComponent from './components/NavbarComponent';
import SliderComponent from './components/slider';

export default function Home() {
  const dispatch = useDispatch();

  const { sales, loading: salesLoading, error: salesError } = useSelector(
    (state) => state.sales
  );

  const { question, answer, based_on_data , loading: aiLoading, error: aiError } = useSelector(
    (state) => state.ai
  );
  useEffect(() => {
    dispatch(fetchSales());
  }, [dispatch]);

  const handleAskQuestion = () => {
    dispatch(fetchAIAnswer({ question, based_on_data }));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <NavbarComponent />
      <h1>Sales Team</h1>
      <section>
        <SliderComponent></SliderComponent>

      </section>

      <section>
        <h2>Ask a Question (AI Endpoint)</h2>
        <div>
          <input
            type="text"
            placeholder="Enter your question..."
            value={question}
            onChange={(e) => dispatch(setQuestion(e.target.value))}
          />
          <button onClick={handleAskQuestion}>Ask</button>
        </div>
        {aiLoading ? (
          <p>Loading answer...</p>
        ) : aiError ? (
          <p>Error: {aiError}</p>
        ) : answer ? (
          <div style={{ marginTop: '1rem' }}>
            <strong>AI Response:</strong> {answer}
          </div>
        ) : null}
      </section>
    </div>
  );
}