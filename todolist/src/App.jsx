
import './App.css'
import CounterPanel from './components/CounterPanel'
import TodoPanel from './components/TodoPanel'
import AppLayout from './layouts/AppLayout'

function App() {

  return (
    <>
      <AppLayout>
        <TodoPanel />
        <CounterPanel />
      </AppLayout>
    </>
  )
}

export default App
