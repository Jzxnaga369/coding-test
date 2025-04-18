import { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSales } from '../store/slices/sales';
import { fetchAIAnswer, setQuestion } from '../store/slices/ai';
import NavbarComponent from './components/NavbarComponent';
import SliderComponent from './components/slider';
import Chatbox from './components/chatbox';

export default function Home() {
  const dispatch = useDispatch();

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
      <h1>Sales Team</h1>
      <section>
        <SliderComponent></SliderComponent>
      </section>
      <section>
        <Chatbox></Chatbox>
      </section>
    </div>
  );
}