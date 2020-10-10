import React from 'react';
import './App.css';
import logo from './images/pocket_icon1.png';
import Button from '@material-ui/core/Button'

function App() {
  return (
    <div className="App">
<div className="">
</div>
<img className="img_icon" src={logo} alt="Smiley face" height="200px"/>
<Button className="name_btn" variant="outlined" color="primary" disableElevation >
Caroline Cherotich
</Button>
    </div>
  );
}

export default App;
