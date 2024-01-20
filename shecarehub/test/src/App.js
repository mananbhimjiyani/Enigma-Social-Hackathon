// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import Home from './Home';
import PreDiagnosisPage from './PreDiagnosisPage';
import DiagnosisPage from './DiagnosisPage';
import BiochemicalDiagnosis from './BiochemicalDiagnosis';
import RadiologicalDiagnosis from './RadiologicalDiagnosis';
import MedicalImagingModalities from './MedicalImagingModalities';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pre-diagnosis" element={<PreDiagnosisPage />} />
        <Route path="/diagnosis" element={<DiagnosisPage />} />
        <Route path="/biochemical-diagnosis" element={<BiochemicalDiagnosis />} />
        <Route path="/radiological-diagnosis" element={<RadiologicalDiagnosis />} />
        <Route path="/medical-imaging-modalities" element={<MedicalImagingModalities />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
