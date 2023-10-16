// CustomButton.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import './CustomButton.css'; // Import the CSS file

function CustomButton({ label }) {
  return <Button className="custom-button">{label}</Button>;
}

export default CustomButton;
