import React, { useEffect, useState } from "react";
// import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {  textReverce } from "../actions";



/**
 *
 */
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  marginLeft:'25px',
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));
const Nav = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();    
    setText(e.target.value.toLowerCase());
  };
  const onReverce = (e) => {
    e.preventDefault();
    dispatch(textReverce(text));    
    setText("");
  };
  
  return (
    <nav
      className="d-flex p-2"
      style={{
        justifyContent: "center",
        width: "100%",
        backgroundColor: "red",
        
      }}
    >
      
      <input
        value={text}
        onChange={(e) => handleInputChange(e)}
        className="form-control me-2"
        type="text"
        placeholder="Escribe una palabra"
        aria-label="Search"
        style={{ width: "30%" }}
      />
      <Stack spacing={2} direction="row">
      <ColorButton className='prueba' onClick={(e) => onReverce(e)} variant="contained">Enviar</ColorButton>      
    </Stack>
    </nav>
  );
};

export default Nav;
