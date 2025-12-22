import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Servis from './app/Servis';
import Specialities from './app/Specialities';
import Experince from "./app/Experince";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/servis" element={<Servis />} />
        <Route path="/specialities" element={<Specialities />} />
        <Route path="/experince" element={<Experince />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
