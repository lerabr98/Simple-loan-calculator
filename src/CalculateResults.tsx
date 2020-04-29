import React from 'react';
import {LoanStoreState} from "./LoanStore";
import {observer} from "mobx-react";

export interface CalculateResultsProps {
  loanState: LoanStoreState;
}

export const CalculateResults = observer((props: CalculateResultsProps) => {

  const principal = props.loanState.amount;
  const calculateInterest = props.loanState.interestRate / 100 / 12;
  const calculatedPayments = props.loanState.years * 12;

  if (!principal || !calculateInterest || !calculatedPayments) {
    return <div>not enough data to calculate</div>
  }

  //Compute monthly Payment

  const x = Math.pow(1 + calculateInterest, calculatedPayments);
  const monthly = (principal * x * calculateInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);

  //Compute Interest

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  //Compute Total Payment

  const totalPayment = (monthly * calculatedPayments).toFixed(2);
  return (
    <>
      <div>{`$` + monthlyPayment}</div>
      <div>{`%` + totalInterest}</div>
      <div>{totalPayment}</div>
    </>
  )
});