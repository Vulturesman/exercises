const salaryCalculator = () => {
  const hour = Number(document.querySelector("#hourly-pay").value);
  const hoursDay = Number(document.querySelector("#hours-day").value);
  const daysMonth = Number(document.querySelector("#days-month").value);
  const salary = hour * hoursDay * daysMonth;

  return document.write(`Your salary is: $${salary} per month!`);
};

// ----------------------------------------
// or
// const calculate = () => {

//     const hourly_pay = Number(document.querySelector('input[name="hourly_pay"]').value) || 0;

//     const hours_per_day = Number(document.querySelector('input[name="hours_per_day"]').value) || 0;

//     const days_in_month = Number(document.querySelector('input[name="days_in_month"]').value) || 0;

//     if (hourly_pay && hours_per_day && days_in_month) {
//         displayResults(hourly_pay, hours_per_day, days_in_month);
//     } else {
//         hideResults();
//     }
// }

// const displayResults = (hourly_pay, hours_per_day, days_in_month) => {

//     document.querySelector('#hourly-pay-result .salary-calculator__result-value').innerHTML = hourly_pay;

//     document.querySelector('#work-hours-result .salary-calculator__result-value').innerHTML = hours_per_day;

//     document.querySelector('#work-days-result .salary-calculator__result-value').innerHTML = days_in_month;

//     const total = hourly_pay * hours_per_day * days_in_month

//     document.querySelector('#total-result .salary-calculator__result-value').innerHTML = total;

//     // show the results element
//     const results = document.querySelector('.salary-calculator__results');
//     results.className = 'salary-calculator__results salary-calculator__results_ready';
// }

// const hideResults = () => {
//     // hide the results element by removing the class salary-calculator__results_ready
//     const results = document.querySelector('.salary-calculator__results');
//     results.className = 'salary-calculator__results';
// }
