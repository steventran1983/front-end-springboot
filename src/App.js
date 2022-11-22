import logo from "./logo.svg";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import AddEmployee from "./component/addEmployee/AddEmployee";
import GetEmployee from "./component/getEmployee/GetEmployee";
import Delete from "./component/deleteEmployee/Delete";
import ModifyEmployee from "./component/modifyEmployee/ModifyEmployee";
import NavBar from "./component/navbar/NavBar";

function App() {
  return (
    <main className="App">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "1.6rem",
          },
        }}
      />
      <NavBar />
      <Routes>
        <Route path="/" element={<AddEmployee />} />
        <Route path="/employees" element={<GetEmployee />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/modify" element={<ModifyEmployee />} />
      </Routes>
    </main>
  );
}

export default App;
