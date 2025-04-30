import React from 'react';

function HistoryList({ history, onClick }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Search History</h4>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <button onClick={() => onClick(item.query)}>
              {item.query}
            </button>
          </li>
        ))}
      </ul>

    </div>
  )

}


export default HistoryList;