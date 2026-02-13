import React, { useState } from 'react';
import { connectWallet } from './connect';
import { depositFunds, releaseFunds } from './contract';

function App() {
  const [amount, setAmount] = useState(0);
  const [user, setUser] = useState('');

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Stacks Escrow DApp</h1>
      <button onClick={connectWallet} style={{ margin: "5px" }}>Connect Wallet</button>
      <div style={{ marginTop: "10px" }}>
        <input type="number" placeholder="Deposit Amount" onChange={e => setAmount(Number(e.target.value))} />
        <button onClick={() => depositFunds(amount)}>Deposit</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <input type="text" placeholder="Release To (Address)" onChange={e => setUser(e.target.value)} />
        <button onClick={() => releaseFunds(user)}>Release</button>
      </div>
    </div>
  );
}

export default App;
