import React from 'react';
import {LoanForm} from "./LoanForm";
import {LoanStore} from "./LoanStore";
import {CalculateResults} from "./CalculateResults";
import Header from "./Header";

const store = new LoanStore();

function App() {
  return (
    <div className="App">
        <Header/>
      <LoanForm formState={store.loanState} onChange={store.onFieldChange}/>
      <CalculateResults loanState={store.loanState}/>
    </div>
  );
}

export default App;
