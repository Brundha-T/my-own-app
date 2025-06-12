import { useState } from 'react';

export default function ChatForm() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // ✅ Short, clear prompt instruction
          prompt: `Please answer briefly (2-3 sentences only): ${input}`
          
          // 👉 OPTIONAL: For bullet points instead, replace with:
          // prompt: `Give me 3 short productivity tips in bullet points for: ${input}`
        }),
      });

      const data = await res.json();

      // ✅ Limit to 3 sentences max
      const trimmed = data.response?.split('. ').slice(0, 3).join('. ') + '.';

      setResponse(trimmed || 'No response received.');
    } catch (error) {
      setResponse('❌ Error: ' + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="bg-white/10 rounded-xl p-6 mt-8">
      <h2 className="text-2xl font-bold text-center text-amber-200 mb-4">🤖 Ask the AI Assistant</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Ask anything about productivity..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-3 rounded text-black"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-orange-400 hover:to-pink-500 text-white px-6 py-2 rounded font-semibold"
        >
          Submit
        </button>
      </form>
      {loading && <p className="text-white mt-2">Loading...</p>}
      {response && (
        <div className="mt-4 p-4 bg-white/20 text-white rounded">
          <strong>AI Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
