import React, { Fragment, useState } from "react";

import FormInputs from "./components/InputsForm/FormInputs";
import NewPayslip from "./components/NewPayslip/NewPayslip";

import "./App.css";

function App() {
  const [payslipList, setPayslipList] = useState([]);
  const [showPayslip, setShowPayslip] = useState(true);

  const addPayslipHandler = (
    payslipFirstName,
    payslipLastName,
    payslipAnnualSalary,
    payslipSuperannuationRate,
    payslipStartDate,
    payslipEndDate
  ) => {
    setPayslipList((prevPayslipList) => {
      return [
        ...prevPayslipList,
        {
          firstName: payslipFirstName,
          lastName: payslipLastName,
          annualSalary: payslipAnnualSalary,
          superannuationRate: payslipSuperannuationRate,
          startDate: payslipStartDate,
          endDate: payslipEndDate,
          id: Math.random().toString(),
        },
      ];
    });
  };

  // trying to toogle <Newpayslip />

  const showPayslipCard = () => {
    setShowPayslip(false);
    console.log("toogle");
  };
  const hidePayslipCard = () => {
    setShowPayslip(true);
    setPayslipList("");
  };

  //

  return (
    <Fragment>
      {showPayslip && (
        <FormInputs
          onAddPayslip={addPayslipHandler}
          onSubmit={showPayslipCard}
        />
      )}
      {!showPayslip && (
        <NewPayslip
          firstName={payslipList}
          lastName={payslipList}
          annualSalary={payslipList}
          superannuationRate={payslipList}
          startDate={payslipList}
          endDate={payslipList}
          onCancel={hidePayslipCard}
        />
      )}
    </Fragment>
  );
}

export default App;
