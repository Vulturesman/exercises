import { useEffect, useState } from "react";
import "./App.css";
import FizzBuzz from "./FizzBuzz";

function App() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const createNumbers = () => {
      const nums = [];
      for (let number = 1; number <= 100; number++) {
        nums.push(number);
      }
      return nums;
    };

    setNumbers(createNumbers());
  }, []);

  console.log(numbers);

  return <FizzBuzz numbers={numbers} />;
}

export default App;
