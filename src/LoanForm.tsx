import React from 'react';
import {observer} from "mobx-react";
import {LoanStoreState} from "./LoanStore";
import {Box, TextField} from "@material-ui/core";

export interface LoanFormProps {
  formState: LoanStoreState;
  onChange: (field: keyof LoanStoreState, value: number) => void;
}

export const LoanForm = observer((props: LoanFormProps) => {
  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => props.onChange('amount', parseFloat(e.target.value));
  const interestRateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => props.onChange('interestRate', parseFloat(e.target.value));
  const yearsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => props.onChange('years', parseFloat(e.target.value));
  return (
      <Box id="loan-form">
          <div>
              <TextField
                  value={props.formState.amount}
                  onChange={amountChangeHandler}
                  label="Loan Amount"
                  style={{margin: "50px 50px 5px"}}
                  variant="outlined"
              />
          </div>
          <div>
              <TextField
                  value={props.formState.years}
                  onChange={yearsChangeHandler}
                  label="Percent"
                  style={{margin: "50px 50px 5px"}}
                  variant="outlined"
              />
          </div>
          <div>
              <TextField
                  value={props.formState.interestRate}
                  onChange={interestRateChangeHandler}
                  label="Years"
                  style={{margin: "50px 50px 5px"}}
                  variant="outlined"
              />
          </div>
      </Box>
  )
});