import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Error from "./components/Error";
import PageEtudiants from "./components/PageEtudiants";
import AddEtud from "./components/Dashboard/AddEtud";
import CreatQuiz from "./components/Dashboard/CreatQuiz";
import Statistic from "./components/Dashboard/Statistic";
import { AddQuiz } from "./components/Dashboard/AddQuiz";
import Dashboard from "./components/Dashboard/dashboard";
import PrivateRoute from "./privateRoute/PrivateRoutes";
import PrivateRole from "./privateRoute/PrivateRole";

export default function App() {
    return (
        <>
            <Routes>
                {/* Public Route */}
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<Error />} />

                <Route element={<PrivateRoute />}>

                    {/* Private Role de Prof */}
                    <Route element={<PrivateRole role='641786171c80cfc547eb06d1' />}>
                        <Route path="/dash" element={<Dashboard />} >
                            <Route path="/dash/AddEtud" element={<AddEtud />} />
                            <Route path="/dash/AddQuiz" element={<AddQuiz />} />
                            <Route path="/dash/CreatQuiz" element={<CreatQuiz />} />
                            <Route path="/dash/Statistic" element={<Statistic />} />
                            <Route index element={<Statistic />} />
                        </Route>
                    </Route>

                    {/* Private Role de Etudiant */}
                    <Route element={<PrivateRole role='64178667a135c9e70380a2ab' />}>
                        <Route path="/PageEtudiants" element={<PageEtudiants />} />
                    </Route>

                </Route>
            </Routes>
        </>
    );
}