import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './CourseInput.module.css';
import Button from '../../UI/Button/Button';

// const CourseInput = props => {

//   const FormControl = styled.div`

//     margin: 0.5rem 0;

//     & label {
//       font-weight: bold;
//       display: block;
//       margin-bottom: 0.5rem;
//       color: ${props => props.invalid && 'red'};
//     }

//     & input {
//       display: block;
//       width: 100%;
//       border: 1px solid ${props => props.invalid && 'red'};
//       border-color: ${props => props.invalid && 'red'};
//       font: inherit;
//       line-height: 1.5rem;
//       padding: 0 0.25rem;
//     }

//     & input:focus {
//       outline: none;
//       background: #fad0ec;
//       border-color: #8b005d;
//     }

//   `;

function CourseInput(props) {

  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    };
    setIsValid(true);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler} >
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        {isValid ? <label>Course Goal</label> : <label>Invalid Input</label>}
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form >
  );
};

export default CourseInput;
