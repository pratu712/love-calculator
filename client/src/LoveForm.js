import React, { useState } from 'react';
import axios from 'axios';

function LoveForm() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/love', { name1, name2 });
      setResult(res.data);
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={name1} onChange={(e) => setName1(e.target.value)} />
        <input type="text" placeholder="Partner's Name" value={name2} onChange={(e) => setName2(e.target.value)} />
        <button type="submit">Calculate ❤️</button>
      </form>
      {result && (
        <div className="result">
          <h2>{result.message}</h2>
        </div>
      )}
    </div>
  );
}

export default LoveForm;
