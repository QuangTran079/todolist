import "./App.css";
import TodoPanel from "./components/TodoPanel";
import CounterPage from "./components/CounterPage";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <AppLayout>
      <TodoPanel />
      <CounterPage />
    </AppLayout>
  );
}

export default App;