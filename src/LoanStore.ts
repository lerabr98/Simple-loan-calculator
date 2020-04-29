import {action, observable} from "mobx";

export interface LoanStoreState {
  amount: number;
  interestRate: number;
  years: number;
}

export class LoanStore {
  @observable
  loanState: LoanStoreState = {
    amount: 0,
    interestRate: 0,
    years: 0,
  };

  @action
  onFieldChange = (field: keyof LoanStoreState, value: number) => this.loanState[field] = value;
};