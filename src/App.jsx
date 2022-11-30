import "./App.css"

import { Header, TodoForm, TodoList } from "./components"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <TodoForm />
        <TodoList />
      </div>
    </div>
  )
}

export default App
