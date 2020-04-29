import React from 'react';
import './App.css';
import {LoanForm} from "./LoanForm";
import {LoanStore} from "./LoanStore";
import {CalculateResults} from "./CalculateResults";

const store = new LoanStore();

function App() {
  return (
    <div className="App">
      <LoanForm formState={store.loanState} onChange={store.onFieldChange}/>
      <CalculateResults loanState={store.loanState}/>
    </div>
  );
}

export default App;
