import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Signup = () => {
  const [action, setAction] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('Male');
  const [age, setAge] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (name === '' || password === '' || gender === '' || age === '') {
      setErrorMessage('All fields are required');
      toast.error('All Fields are required');
      return;
    }
    if (action === 'signUp') {
      signUp();
    }
  };

  const signUp = () => {
    toast.success('Sign Up Successful');
    navigate('/');
  };

  return (
    <div className='sibdy'>
      <div className="maincont">
        <div className='subcont'>
          <form className="nnp" onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="pass">Password:</label>
            <input type="password" id="pass" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="gender">Gender:</label>
            <select id='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
            {errorMessage && <p className='error'>{errorMessage}</p>}
            <button type="submit" className="btn" onClick={() => setAction('signUp')}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
