import React from "react";
import classes from "./NewPayslip.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const NewPayslip = (props) => {
  const netIncome = (annualSalary) => {
    const intervals = [
      [0, 18200, 0],
      [18200, 37000, 0.19],
      [37000, 87000, 0.325],
      [87000, 180000, 0.37],
    ];
    let totalTaxes = 0;
    let netIncome;
    let IncomeAfterTaxes = 0;

    for (const interval of intervals) {
      if (annualSalary < interval[1]) {
        totalTaxes += (annualSalary - interval[0]) * interval[2];
        break;
      } else {
        totalTaxes += (interval[1] - interval[0]) * interval[2];
      }
      IncomeAfterTaxes = (annualSalary - totalTaxes) / 12;
      netIncome = IncomeAfterTaxes;
    }
    return netIncome;
  };

  return (
    <Card className={classes.payslip}>
      <div>
        {props.firstName.map((user) => (
          <div className={classes.payslipControls} key={user.id}>
            Employee Name: {user.firstName} {user.lastName}
          </div>
        ))}
        {props.startDate.map((user) => (
          <div className={classes.payslipControls} key={user.id}>
            Period: From the {user.startDate} to the {user.endDate}
          </div>
        ))}

        {props.annualSalary.map((user) => (
          <div className={classes.payslipControls} key={user.id}>
            Gross Salary: {Math.round(user.annualSalary / 12)}
          </div>
        ))}

        {props.superannuationRate.map((user) => (
          <div className={classes.payslipControls} key={user.id}>
            Super:{" "}
            {Math.round(
              ((user.superannuationRate / 100) * user.annualSalary) / 12
            )}
          </div>
        ))}
        {props.annualSalary.map((user) => (
          <div className={classes.payslipControls} key={user.id}>
            Net Income: {Math.round(netIncome(user.annualSalary))}
          </div>
        ))}
        {props.annualSalary.map((user) => (
          <div className={classes.payslipControls} key={user.id}>
            Total Taxes:{" "}
            {Math.round(user.annualSalary / 12 - netIncome(user.annualSalary))}
          </div>
        ))}
      </div>
      <div className={classes.buttonControls}>
        <Button onClick={props.onCancel}>Close</Button>
        <Button>Generate PDF</Button>
      </div>
    </Card>
  );
};

export default NewPayslip;
