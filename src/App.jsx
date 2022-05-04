import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Post from "./Pages/Post";
import NotFound from "./Pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter basename="/tutorial">
      <div className="App">
        <Header />
        <button onClick={() => setLogin(!login)}>{login?'logout':'login'}</button>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/profile/*" element={login ? <Profile /> : <Navigate to='/' replace />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
