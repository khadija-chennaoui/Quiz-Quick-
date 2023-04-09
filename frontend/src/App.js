import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import AddEtud from "./components/Dashboard/AddEtud";
import { AddQuiz } from "./components/Dashboard/AddQuiz";
import Dashboard from "./components/Dashboard/dashboard";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />

                <Route path="/dash" element={<Dashboard />} >
                    <Route path="/dash/AddEtud" element={<AddEtud />} />
                    <Route path="/dash/AddQuiz" element={<AddQuiz />} />

                </Route>
            </Routes>
        </>
    );
}