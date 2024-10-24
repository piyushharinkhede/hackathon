import React from 'react';
import './Header.css';
import addicon from './files/add.png';
import usericon from './files/user.png';
import searchicon from './files/search.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const tosearch = async () => {
    navigate('/search');
  }

  

  return (
    <div>
      <div className='headerdiv'>
        <div className='samplebox'></div>
        <div className='samplebox'>
          <a href='/'><h1 className='tlheading'>Hommies</h1></a>
        </div>
        <div className='samplebox'></div>
        <div className='samplebox'>
          <a href='/'><h2>Home</h2></a>
        </div>
        
        <div className='samplebox'>
          <a href='/properties'><h2>Properties</h2></a>
        </div>
        <div className='samplebox'>
          <a href='/login'><button className='addpy'>Login</button></a>
        </div>
        
        
        <div className='samplebox'>
          <a href='/add'><button className='addpy'>Add Property</button></a>
        </div>
        <div className='samplebox'></div>
      </div>
    </div>
  );
};

export default Header;
