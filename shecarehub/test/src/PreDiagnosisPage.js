// PreDiagnosisPage.js
import React, { useState } from 'react';

const PreDiagnosisPage = () => {
  const [formValues, setFormValues] = useState({
    q1: 1,
    q2: 1,
    q3: 1,
    q4: 1,
    q5: 1,
    q6: 1,
    q7: 1,
    q8: 1,
    q9: 1,
    q10: 1,
    q11: 1,
    q12: 1,
    q13: 1,
    q14: 1,
    q15: 1,
  });

  const handleChange = (question, value) => {
    setFormValues({
      ...formValues,
      [question]: value,
    });
  };

  const calculateScore = () => {
    const score = Object.values(formValues).reduce((sum, value) => sum + value, 0);
    return score;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalScore = calculateScore();

    // Check if the total score is less than or equal to 48
    if (totalScore <= 48) {
      alert('You probably do not have breast cancer.');
    } else {
      alert('You may have a higher risk of breast cancer. Please consult with a healthcare professional.');
    }
  };

  return (
    <div>
      <h2>EORTC QLQ - BR23 Questionnaire</h2>

      <form onSubmit={handleSubmit}>
        {/* Render questions with radio buttons */}
        {[...Array(15)].map((_, index) => (
          <div key={index}>
            <p>{`Question ${index + 1}: ${getQuestionText(index + 1)}`}</p>
            {[1, 2, 3, 4].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  value={value}
                  checked={formValues[`q${index + 1}`] === value}
                  onChange={() => handleChange(`q${index + 1}`, value)}
                />
                {getAnswerText(value)}
              </label>
            ))}
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Helper function to get question text
const getQuestionText = (questionNumber) => {
  switch (questionNumber) {
    case 1:
      return 'Did you have any pain in your arm or shoulder?';
    case 2:
      return 'Did you have a swollen arm or hand?';
    case 3:
      return 'Was it difficult to raise your arm or to move it sideways?';
    case 4:
      return 'Have you had any pain in the area of your affected breast?';
    case 5:
      return 'Was any area of your breast swollen?';
    case 6:
      return 'Was any area of your breast oversensitive?';
    case 7:
      return 'Have you had skin problems on or in the area of any of your breasts (e.g., itchy, dry, flaky)?';
    case 8:
      return 'Did you have a dry mouth?';
    case 9:
      return 'Did food and drink taste different than usual?';
    case 10:
      return 'Were your eyes painful, irritated or watery?';
    case 11:
      return 'Have you lost any hair?';
    case 12:
      return 'Do you have hair loss?';
    case 13:
      return 'Did you feel ill or unwell?';
    case 14:
      return 'Did you have hot flushes?';
    case 15:
      return 'Did you have headaches?';
    default:
      return '';
  }
};

// Helper function to get answer text
const getAnswerText = (value) => {
  switch (value) {
    case 1:
      return 'Not at all';
    case 2:
      return 'A little';
    case 3:
      return 'Quite a bit';
    case 4:
      return 'Very much';
    default:
      return '';
  }
};

export default PreDiagnosisPage;
