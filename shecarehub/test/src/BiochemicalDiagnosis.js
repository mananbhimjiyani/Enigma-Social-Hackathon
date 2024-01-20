// BiochemicalDiagnosis.js
import axios from 'axios';
import React, { useState } from 'react';

const BiochemicalDiagnosis = () => {
  const [formData, setFormData] = useState({
    age: '',
    BMI: '',
    glucose: '',
    insulin: '',
    HOMA: '',
    Leptin: '',
    adiponectin: '',
    resistin: '',
    'MCP-1': '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
      const response = await axios.post('http://192.0.0.2:8080/predict', formData);

      if (response.status === 200) {
        console.log('Data successfully sent to the API!');
        alert('Data successfully sent to the API!');
      } else {
        console.error('Error sending data to the API');
        alert('Error sending data to the API');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error:', error.message);
    }
  };

  return (
    <div>
      <h2>Biochemical Diagnosis</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <br />

        <label>
          BMI:
          <input type="number" name="BMI" value={formData.BMI} onChange={handleChange} />
        </label>
        <br />

        <label>
          Glucose:
          <input type="number" name="glucose" value={formData.glucose} onChange={handleChange} />
        </label>
        <br />

        <label>
          Insulin:
          <input type="number" name="insulin" value={formData.insulin} onChange={handleChange} />
        </label>
        <br />

        <label>
          HOMA:
          <input type="number" name="HOMA" value={formData.HOMA} onChange={handleChange} />
        </label>
        <br />

        <label>
          Leptin:
          <input type="number" name="Leptin" value={formData.Leptin} onChange={handleChange} />
        </label>
        <br />

        <label>
          Adiponectin:
          <input type="number" name="adiponectin" value={formData.adiponectin} onChange={handleChange} />
        </label>
        <br />

        <label>
          Resistin:
          <input type="number" name="resistin" value={formData.resistin} onChange={handleChange} />
        </label>
        <br />

        <label>
          MCP-1:
          <input type="number" name="MCP1" value={formData.MCP1} onChange={handleChange} />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BiochemicalDiagnosis;
