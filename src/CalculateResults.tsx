import React from 'react';
import {LoanStoreState} from "./LoanStore";
import {observer} from "mobx-react";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


export interface CalculateResultsProps {
  loanState: LoanStoreState;
}

export const CalculateResults = observer((props: CalculateResultsProps) => {

  const principal = props.loanState.amount;
  const calculateInterest = props.loanState.interestRate / 100 / 12;
  const calculatedPayments = props.loanState.years * 12;

  if (!principal || !calculateInterest || !calculatedPayments) {
    return <></>
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
      <div>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <AttachMoneyIcon style={{color: "#009688"}} />
            </ListItemIcon>
            <ListItemText primary={'Monthly payment: ' + monthlyPayment}/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <TrendingUpIcon style={{color: "#009688"}}/>
            </ListItemIcon>
            <ListItemText primary={'Total percent: ' + totalInterest + ' %'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MonetizationOnIcon style={{color: "#009688"}} />
            </ListItemIcon>
            <ListItemText primary={'Total amount: ' + totalPayment} />
          </ListItem>
        </List>
      </div>
      );
      });
