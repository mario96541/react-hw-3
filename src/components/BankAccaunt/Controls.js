import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Dashboard.module.css';

class Controls extends Component {
  state = {
    amount: '',
    type: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]:
        event.target.name === 'amount'
          ? +event.target.value
          : event.target.value,
    });
  };

  handleClick = event => {
    event.preventDefault();
    if (
      this.state.amount > this.props.balance &&
      this.state.type !== 'Deposit'
    ) {
      toast('На счету недостаточно средств для проведения операции!');
      return;
    }
    if (this.state.amount <= 0) {
      toast('Введите сумму для проведения операции !');
      return;
    }

    this.props.addChange({ ...this.state });

    this.setState({
      amount: '',
    });
  };

  render() {
    const { amount } = this.state;
    return (
      <form className={styles.controls} onSubmit={this.handleClick}>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          name="type"
          value="Deposit"
          onClick={this.handleChange}
        >
          Deposit
        </button>
        <button
          type="submit"
          name="type"
          value="Withdraw"
          onClick={this.handleChange}
        >
          Withdraw
        </button>
        <ToastContainer />
      </form>
    );
  }
}

export default Controls;
Controls.propTypes = {
  addChange: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
};
