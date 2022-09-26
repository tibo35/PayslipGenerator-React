import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./FormInputs.module.css";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../UI/ErrorModal";

const FormInputs = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredAnnualSalary, setEnteredAnnualSalary] = useState("");
  const [enteredSuperannuationRate, setEnteredSuperannuationRate] =
    useState("");
  const [enteredStartDate, setEnteredStartDate] = useState("");
  const [enteredEndDate, setEnteredEndDate] = useState("");
  const [error, setError] = useState();

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

    // Form Validations
    if (
      enteredFirstName.trim().length === 0 ||
      enteredLastName.trim().length === 0
    ) {
      setError({
        title: "Invalid Lastname or Firstname",
        message: "Please enter a valid name",
      });
      return;
    }
    if (enteredAnnualSalary.trim().length === 0) {
      setError({
        title: "Annual Salary Missing",
        message: "Please enter a valid salary",
      });
      return;
    }
    if (enteredSuperannuationRate.trim().length === 0) {
      setError({
        title: "Superannuation Rate Missing",
        message: "Please enter a valid Superannuation Rate",
      });
      return;
    }

    // props
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
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
    </Wrapper>
  );
};

export default FormInputs;
