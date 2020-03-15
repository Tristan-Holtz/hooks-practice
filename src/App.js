import React, { useState } from 'react';
import Form from './Form';
import Ideas from './Ideas';
import './App.css';

function App() {
  const [ideas, addIdea] = useState([]);

  return (
    <main>
      <Form addIdea={addIdea} ideas={ideas} />
      <Ideas ideas={ideas} />
    </main>
  );
}

export default App;
