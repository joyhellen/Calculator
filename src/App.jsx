import './App.css'
import { useState } from "react"

export default function App() {
  const [ num1, setNum1 ] = useState(0)
  const [ num2, setNum2 ] = useState(0)
  const [ operator, setOperator ] = useState()

  const handleNumber = (e)=>{
    const input = e.target.innerText
    if (num1 === 0 ) {
      setNum1(input)
    } else {
      setNum1(num1 + input) // "7" + "8" = "78"
    }
  }
  
  const handleClear = ()=>{
    setNum1(0)
  }

  const handleOperator = (e)=>{
    const input = e.target.innerText
    setOperator(input)
    setNum2(num1)
    setNum1(0)
  }

  const percentage = ()=>{
    setNum1(num1/100)
  }

  const calculate = ()=>{
    switch(operator){
      case "+":
        setNum1(parseFloat(num2) + parseFloat(num1))
        break;
      case "-":
        setNum1(parseFloat(num2) - parseFloat(num1))
        break;
      case "x":
        setNum1(parseFloat(num2) * parseFloat(num1))
        break;
      case "/":
        setNum1(parseFloat(num2) / parseFloat(num1))
        break;
    }
  }
  
  return (
    <main className="main">
      <div>
        <div className="inserted">
          { num1 }
        </div>
        <div className="button-container">
          <button onClick={handleClear}>AC</button>
          <button>+/-</button>
          <button onClick={percentage}>%</button>
          <button onClick={handleOperator} className='orange'>/</button>
          <button onClick={handleNumber}>7</button>
          <button onClick={handleNumber}>8</button>
          <button onClick={handleNumber}>9</button>
          <button onClick={handleOperator} className="orange">x</button>
          <button onClick={handleNumber}>4</button>
          <button onClick={handleNumber}>5</button>
          <button onClick={handleNumber}>6</button>
          <button onClick={handleOperator} className="orange">-</button>
          <button onClick={handleNumber}>1</button>
          <button onClick={handleNumber}>2</button>
          <button onClick={handleNumber}>3</button>
          <button onClick={handleOperator} className="orange">+</button>
          <button onClick={handleNumber}>0</button>
          <button>A</button>
          <button onClick={handleNumber}>.</button>
          <button onClick={calculate} className="orange">=</button>
        </div>
      </div>
    </main>
  )
}
