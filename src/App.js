import React, { useState } from 'react'
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';

const App = () => {
  const [title, setTitle] = useState('FunTimez')
  const [tagline, setTagline] = useState('Understand multiplication better')
  const [instructions, setInstructions] = useState('Click a number to see its multiples highlighted')
  const [total, setTotal] = useState(144)

  return (
    <>
      <Header title={title}
              tagline={tagline}
              instructions={instructions}
      />
      <Grid total={total} />
    </>
  );
}

export default App;
