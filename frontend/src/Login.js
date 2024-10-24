import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { toast } from 'sonner';

const Login = () => {
  const [action, setAction] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (action === 'signIn') {
      signIn();
    } else if (action === 'signUp') {
      signUp();
    }
  };

  const signIn = () => {
    
      toast.success("Sign In successful");
      localStorage.setItem('username', name);
      navigate('/');
    
  }
  const signUp = () => {
    navigate('/signup');
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
            {errorMessage && <p className='inc' id='inc'>{errorMessage}</p>}
            <button type="submit" className="btn" onClick={() => setAction('signIn')}>Sign In</button>
            <p className='or'>OR</p>
            <button type="submit" className="btn" onClick={() => setAction('signUp')}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
