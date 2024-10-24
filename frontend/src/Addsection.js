import React, { useState, useEffect } from 'react';
import './Addsection.css';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Addsection = () => {
  const namee = localStorage.getItem('username');
  const [action, setAction] = useState('');
  const [name, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [link, setLink] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      if (!namee) {
        navigate("/login");
      }
    };
    checkUser();
  }, [navigate, namee]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (name === '' || address === '' || phonenumber === '' || price === '' || link === '') {
      setErrorMessage('All fields are required');
      toast.error('All fields are required');
      return;
    }
    if (!isNumber(phonenumber)) {
      setErrorMessage('Phone number must contain only digits');
      toast.error('Phone number must contain only digits');
      return;
    }
    if (action === 'signUp') {
      addProperty();
    }
  };

  const isNumber = (number) => {
    return /^\d+$/.test(number);
  };

  const addProperty = () => {
    toast.success('Added successfully');
    navigate('/');
  };

  return (
    <div className='body2'>
      <div className="maincont">
        <div className='subcont'>
          <form className="nnp" onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name of the Property:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="pass">Location: </label>
            <input type="text" id="pass" value={address} onChange={(e) => setAddress(e.target.value)} />
            <label htmlFor="phonenumber">Phone Number:</label>
            <input type="text" id="phonenumber" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
            <label htmlFor='price'>Price:</label>
            <input type='text' id='price' value={price} onChange={(e) => setPrice(e.target.value)} />
            <label htmlFor='link'>Link of the Image:</label>
            <input type='text' id='link' value={link} onChange={(e) => setLink(e.target.value)} />
            {errorMessage && <p className='error'>{errorMessage}</p>}
            <button type="submit" className="btn" onClick={() => setAction('signUp')}>
              ADD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addsection;
