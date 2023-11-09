import { useEffect, useState } from "react";
import "./FizzBuzz.css";

export default function FizzBuzz({ numbers }) {
  const [array, setArray] = useState([]);

  // console.log(numbers);

  useEffect(() => {
    const results = numbers.map((num) => {
      if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
      } else if (num % 3 === 0) {
        return "Fizz";
      } else if (num % 5 === 0) {
        return "Buzz";
      } else {
        return num;
      }
    });

    setArray(results);
  }, [numbers]);

  return (
    <div className="fizzbuzz-container">
      <h1>FizzBuzz</h1>
      <ul className="fizzbuzz-list">
        {array && array.map((ar, index) => <li key={index}>{ar}</li>)}
      </ul>
    </div>
  );
}
