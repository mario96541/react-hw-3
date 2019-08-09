import React, { Component } from 'react';
import shortid from 'shortid';
import Controls from './Controls';
import Balance from './Balance';
import TransactionHistory from './TransactionHistory ';
import styles from './Dashboard.module.css';

class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
  };

  componentDidMount() {
    const previosHistory = localStorage.getItem('history');
    if (previosHistory) {
      const historyOperation = JSON.parse(previosHistory);
      this.setState({
        history: historyOperation.history,
        balance: historyOperation.balance,
      });
    }
  }

  componentDidUpdate(prevState) {
    // const { history } = this.state;
    if (prevState !== this.state) {
      localStorage.setItem('history', JSON.stringify(this.state));
    }
  }

  addOperation = operation => {
    const bankOperation = {
      ...operation,
      id: shortid.generate(),
      date: new Date().toLocaleString(),
    };
    this.setState(state => {
      return {
        balance:
          operation.type === 'Deposit'
            ? state.balance + operation.amount
            : state.balance - operation.amount,
        history: [...state.history, bankOperation],
      };
    });
  };

  sumWithdrawOperation = () => {
    const sum = this.state.history.reduce((acc, item) => {
      if (item.type === 'Withdraw') {
        return acc + item.amount;
      }
      return acc;
    }, 0);

    return sum;
  };

  sumDepositOperation = () => {
    const sum = this.state.history.reduce((acc, item) => {
      if (item.type === 'Deposit') {
        return acc + item.amount;
      }
      return acc;
    }, 0);

    return sum;
  };

  render() {
    const { history, balance } = this.state;
    const minus = this.sumWithdrawOperation();
    const plus = this.sumDepositOperation();
    return (
      <div className={styles.dashboard}>
        <Controls balance={balance} addChange={this.addOperation} />
        <Balance minus={minus} plus={plus} balance={balance} />
        <TransactionHistory items={history} />
      </div>
    );
  }
}
export default Dashboard;
