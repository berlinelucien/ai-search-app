import React from 'react';

function ResultCard({ result }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginTop: '16px' }}>
      <h3>AI Response:</h3>
      <p>{result}</p>
    </div>
  );
}


export default ResultCard;