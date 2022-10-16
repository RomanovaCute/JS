import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CustomizedRadios from './Radio'

const currencies = [
  {
    value: 'None',
    label: 'Не выбрано',
  },
  {
    value: 'Russia',
    label: 'Россия',
  },
  {
    value: 'USA',
    label: 'США',
  },
  {
    value: 'India',
    label: 'Индия',
  },
  {
    value: 'China',
    label: 'Китай',
  },
  {
    value: 'Japan',
    label: 'Япония',
  },
];

export default function Login() {
    const [currency, setCurrency] = React.useState('None');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    
  return (
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='form'>
        <h2>Форма регистрации</h2>
        <TextField
          required
          id="outlined-required"
          label="Логин"
        />
        <TextField
          required
          id="outlined-password-input"
          label="Пароль"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Страна"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <CustomizedRadios/>
      </div>
    </Box>
  );
}







// const Login = () => {

//     return(
//        <>

//        </> 
//     )
// }
