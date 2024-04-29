import "./App.css";
import Table from "./components/Table";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Tasks from "./components/Tasks";

function App() {
  return (
    <Provider store={appStore}>
      <Tasks />
    </Provider>
  );
}

export default App;
// table - fixed size
// each cell of the table will input element (type->number)
// one cell -> readonly -> output = sum(A1:A2)
