import { Route, Routes } from "react-router-dom";
import AddMembers from "./components/AddMembers";
import CreateGroup from "./components/CreateGroup";
import ExpenseMain from "./components/ExpenseMain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateGroup />} />
      <Route path="/members" element={<AddMembers />} />
      <Route path="/expense" element={<ExpenseMain />} />
    </Routes>
  );
}

export default App;
