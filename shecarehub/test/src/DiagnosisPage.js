// DiagnosisPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const DiagnosisPage = () => {
  return (
    <div>
      <h2>Diagnosis Page</h2>

      {/* Buttons for different diagnosis methods */}
      <div>
        <Link to="/biochemical-diagnosis">
          <button>Biochemical Diagnosis</button>
        </Link>
        <Link to="/radiological-diagnosis">
          <button>Radiological Diagnosis</button>
        </Link>
        <Link to="/medical-imaging-modalities">
          <button>Medical Imaging Modalities</button>
        </Link>
      </div>
    </div>
  );
};

export default DiagnosisPage;
