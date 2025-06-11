import { useState, useEffect } from 'react';
import getMotivation from './motivation'; // FIXED: Correct path

export default function MotivationForm({ tasks }) {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(getMotivation(tasks));
  }, [tasks]);

  return (
    <div className="text-center mt-6">
      <p className="text-xl text-orange-200 font-semibold">{quote}</p>
    </div>
  );
}
