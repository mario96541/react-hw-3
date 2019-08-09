import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';

const Balance = ({ balance, minus, plus }) => (
  <section className={styles.balance}>
    <span>&#8593;{plus}$</span>
    <span>&#8595; {minus}$</span>
    <span>Balance: {balance}$</span>
  </section>
);
Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  minus: PropTypes.number.isRequired,
  plus: PropTypes.number.isRequired,
};

export default Balance;
