import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./FormInputs.module.css";
import Button from "../UI/Button";

const FormInputs = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredAnnualSalary, setEnteredAnnualSalary] = useState("");
  const [enteredSuperannuationRate, setEnteredSuperannuationRate] =
    useState("");
  const [enteredStartDate, setEnteredStartDate] = useState("");
  const [enteredEndDate, setEnteredEndDate] = useState("");

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const annualSalaryChangeHandler = (event) => {
    setEnteredAnnualSalary(event.target.value);
  };
  const superannuationRateChangeHandler = (event) => {
    setEnteredSuperannuationRate(event.target.value);
  };
  const startDateChangeHandler = (event) => {
    setEnteredStartDate(event.target.value);
  };
  const endDateChangeHandler = (event) => {
    setEnteredEndDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit();
    props.onAddPayslip(
      enteredFirstName,
      enteredLastName,
      enteredAnnualSalary,
      enteredSuperannuationRate,
      enteredEndDate,
      enteredStartDate
    );

    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredAnnualSalary("");
    setEnteredSuperannuationRate("");
    setEnteredEndDate("");
    setEnteredStartDate("");
    return;
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <div className="form-inputs-controls">
          <div className="form-input-control">
            <input
              placeholder="Firstname"
              type="text"
              value={enteredFirstName}
              onChange={firstNameChangeHandler}
            />
          </div>
          <div className="form-input-control">
            <input
              placeholder="Lastname"
              type="text"
              value={enteredLastName}
              onChange={lastNameChangeHandler}
            />
          </div>
          <div className="form-input-control">
            <input
              placeholder="Annual Salary $"
              type="number"
              value={enteredAnnualSalary}
              onChange={annualSalaryChangeHandler}
            />
          </div>
          <div className="form-input-control">
            <input
              placeholder="Superannuation %"
              type="number"
              value={enteredSuperannuationRate}
              onChange={superannuationRateChangeHandler}
            />
          </div>
          <div className="form-input-control">
            <label>Start Period</label>
            <input
              placeholder="Start Date"
              type="Date"
              value={enteredStartDate}
              onChange={startDateChangeHandler}
            />
          </div>
          <div className="form-input-control">
            <label>End Period</label>
            <input
              placeholder="End Date"
              type="Date"
              value={enteredEndDate}
              onChange={endDateChangeHandler}
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default FormInputs;
