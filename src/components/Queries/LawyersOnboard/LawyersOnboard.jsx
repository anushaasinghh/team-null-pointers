// const problemForm = document.getElementById('problem-form');

// problemForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const userEmail = document.getElementById('user-email').value;
//   const problemCategory = document.getElementById('problem-category').value;
//   const problemDescription = document.getElementById('problem-description').value;

//   // Validation
//   if (!userEmail || !problemCategory || !problemDescription) {
//     alert('Please fill in all fields before submitting.');
//     return;
//   }

//   const submitButton = document.querySelector('button[type="submit"]');
//   submitButton.disabled = true;
//   submitButton.textContent = 'Loading...';

//   // Simulate a server request (replace this part with actual server request if needed)
//   setTimeout(() => {
//     submitButton.disabled = false;
//     submitButton.textContent = 'Submit Problem';
//     console.log('Problem submitted:', {
//       email: userEmail,
//       category: problemCategory,
//       description: problemDescription
//     });

//     // After processing, submit the form to open the email client
//     problemForm.action = `mailto:your-email@example.com?subject=Legal Consultation Request&body=Problem Category: ${problemCategory}%0D%0AProblem Description: ${problemDescription}%0D%0AUser Email: ${userEmail}`;
//     problemForm.submit();
//   }, 2000);
// });

// import React, { useState } from 'react';
// import './LawyersOnboard.css';

// const ProblemForm = () => {
//   const [userEmail, setUserEmail] = useState('');
//   const [problemCategory, setProblemCategory] = useState('');
//   const [problemDescription, setProblemDescription] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Validation
//     if (!userEmail || !problemCategory || !problemDescription) {
//       alert('Please fill in all fields before submitting.');
//       return;
//     }

//     setLoading(true);

//     // Simulate a server request (replace this with actual server request if needed)
//     setTimeout(() => {
//       setLoading(false);

//       console.log('Problem submitted:', {
//         email: userEmail,
//         category: problemCategory,
//         description: problemDescription
//       });

//       // Open email client after form processing
//       window.location.href = `mailto:your-email@example.com?subject=Legal Consultation Request&body=Problem Category: ${problemCategory}%0D%0AProblem Description: ${problemDescription}%0D%0AUser Email: ${userEmail}`;
//     }, 2000);
//   };

//   return (
//     <form onSubmit={handleSubmit} id="problem-form">
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           id="user-email"
//           value={userEmail}
//           onChange={(e) => setUserEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Problem Category:</label>
//         <input
//           type="text"
//           id="problem-category"
//           value={problemCategory}
//           onChange={(e) => setProblemCategory(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Problem Description:</label>
//         <textarea
//           id="problem-description"
//           value={problemDescription}
//           onChange={(e) => setProblemDescription(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit" disabled={loading}>
//         {loading ? 'Loading...' : 'Submit Problem'}
//       </button>
//     </form>
//   );
// };

// export default ProblemForm;

import React, { useState } from 'react';
import './LawyersOnboard.css';

const ProblemForm = () => {
  const [userEmail, setUserEmail] = useState('');
  const [problemCategory, setProblemCategory] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!userEmail || !problemCategory || !problemDescription) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('email', userEmail);
    formData.append('category', problemCategory);
    formData.append('description', problemDescription);

    try {
      const response = await fetch('https://web3forms.com/api/v1/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '4b304f55-7335-446f-8ad1-73dfb5b81a2a', // Replace with your Web3Forms API key
        },
        body: JSON.stringify({
          formData: {
            email: userEmail,
            category: problemCategory,
            description: problemDescription,
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      // Optionally, redirect or show a success message
      alert('Your problem has been submitted successfully.');

      // Clear form fields
      setUserEmail('');
      setProblemCategory('');
      setProblemDescription('');
      
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="problem-form-container">
      <h2>Connect with Our Certified Experts</h2>
      <form onSubmit={handleSubmit} id="problem-form">
        <div>
          <label>Email:</label>
          <input
            type="email"
            id="user-email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Problem Category:</label>
          <input
            type="text"
            id="problem-category"
            value={problemCategory}
            onChange={(e) => setProblemCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Problem Description:</label>
          <textarea
            id="problem-description"
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Submit Problem'}
        </button>
      </form>
    </div>
  );
};

export default ProblemForm;
