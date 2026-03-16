import React, { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
  interest: '',
  acceptTerms: false
};

function Form() {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleReset = () => {
    setFormData(initialState);
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const { name, email, password, interest, acceptTerms } = formData;

    if (!name || !email || !password || !interest) {
      setError('All fields are required.');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }
    if (!acceptTerms) {
      setError('You must accept the terms.');
      return;
    }

    setSuccess('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label>
        Name
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
          aria-label="Name"
        />
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          aria-label="Email"
        />
      </label>

      <label>
        Password
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          aria-label="Password"
        />
      </label>

      <label>
        Interest
        <select
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          aria-label="Interest"
        >
          <option value="">Select an interest</option>
          <option value="coding">Coding</option>
          <option value="design">Design</option>
          <option value="gaming">Gaming</option>
        </select>
      </label>

      <label>
        <input
          name="acceptTerms"
          type="checkbox"
          checked={formData.acceptTerms}
          onChange={handleChange}
          aria-label="Accept Terms"
        />
        I accept the terms and conditions
      </label>

      <div className="button-group">
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </div>

      {error && <p role="alert" style={{ color: 'red' }}>{error}</p>}
      {success && <p role="status" style={{ color: 'green' }}>{success}</p>}
    </form>
  );
}

export default Form;
