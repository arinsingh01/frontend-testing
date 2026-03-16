import React from 'react';
import Button from './components/Button';
import Form from './components/Form';
import CardList from './components/CardList';
import './App.css';

function App() {
  const sampleCards = [
    { id: 1, title: 'Learn React Testing' },
    { id: 2, title: 'Master Jest & RTL' },
    { id: 3, title: 'Write Clean Code' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Experiment No4: Front-end Testing</h1>
      </header>
      
      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <section style={{ marginBottom: '40px' }}>
          <h2>1. Button Component</h2>
          <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
        </section>

        <hr />

        <section style={{ marginBottom: '40px' }}>
          <h2>2. Enhanced Form Component</h2>
          <Form />
        </section>

        <hr />

        <section style={{ marginBottom: '40px' }}>
          <h2>3. CardList (Snapshot Testable)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h3>Data Loaded</h3>
              <CardList status="done" cards={sampleCards} />
            </div>
            <div>
              <h3>Loading State</h3>
              <CardList status="loading" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
