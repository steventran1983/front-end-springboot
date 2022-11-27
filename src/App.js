import "./App.css";
import {Toaster} from "react-hot-toast";
import {Route, Routes} from "react-router-dom";
import AddEmployee from "./component/addEmployee/AddEmployee";
import GetEmployee from "./component/getEmployee/GetEmployee";
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
            <NavBar/>
            <Routes>
                <Route path="/" element={<AddEmployee/>}/>
                <Route path="/employees" element={<GetEmployee/>}/>
            </Routes>
        </main>
    );
}

export default App;
