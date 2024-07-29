import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import transactionsData from './data';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState(transactionsData);

  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TransactionList transactions={transactions} />} />
          <Route path="/add" element={<AddTransaction addTransaction={addTransaction} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
