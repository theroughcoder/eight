import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";


import { BrowserRouter, Routes, Route  } from "react-router-dom";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="App">
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />;
              <Route path="/signup" element={<SignupScreen/>} />;
              <Route path="/signin" element={<SigninScreen/>} />;
            </Routes>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
