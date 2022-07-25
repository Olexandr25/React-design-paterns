import React from "react"

const methodsOfPayments = [
  {
    func: (func, count) => {
      const balance = 100
      console.log("payPal")
      return func(balance, count)
    },
  },
  {
    func: (func, count) => {
      const balance = 200
      console.log("bank")
      return func(balance, count)
    },
  },
  {
    func: (func, count) => {
      const balance = 300
      console.log("bitcoin")
      return func(balance, count)
    },
  },
]

const Chain = () => {
  const pay = amountToPay => {
    let isPossibleToPay = false
    for (let i = 0; i < methodsOfPayments.length; i++) {
      const tryToPay = methodsOfPayments[i].func(canPay, amountToPay)
      if (tryToPay) {
        isPossibleToPay = true
      }
    }
    console.log(isPossibleToPay ? "Success, you can pay!" : "Raise more money!")
  }
  const canPay = (amount, balance) => balance >= amount

  pay(20)

  return <div>Chain</div>
}

export default Chain
