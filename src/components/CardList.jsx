import React from 'react';

function CardList({ status, cards }) {
  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error loading data.</p>;
  if (!cards || cards.length === 0) return <p>No data available.</p>;

  return (
    <ul>
      {cards.map((card) => (
        <li key={card.id}>{card.title}</li>
      ))}
    </ul>
  );
}

export default CardList;
