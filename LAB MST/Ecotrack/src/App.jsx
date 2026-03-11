import Dashboard from "./pages/dashboard.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login.jsx";
import Header from "./components/Header.jsx";
import ProtectedRoute from "./Routes/ProtectedRoutes.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header title="Dashboard" />
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
