import React from "react"
import { GlobalProvider } from "./contexts/GlobalState"
import Header from "./components/Header"
import Balance from "./components/Balance"
import TransactionForm from "./components/TransactionForm"

function App() {

  return (
    <>
      <GlobalProvider>
        <Header />
        <Balance />
        <TransactionForm />
        <h1>Hello World</h1>
      </GlobalProvider>
    </>
  )
}

export default App
