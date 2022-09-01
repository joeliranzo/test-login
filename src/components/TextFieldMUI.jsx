import Box from '@mui/material/Box';
import TextFieldM from '@mui/material/TextField';
import * as React from 'react';
import { Controller } from 'react-hook-form';

export default function TextFieldMUI({control}) {
  return (
	<Box
	component="form"
	sx={{
	  '& .MuiTextField-root': { m: 1, width: '25ch' },
	}}
	noValidate
	autoComplete="off"
  >

<Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextFieldM
            label="Username"
           value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: 'username required' }}
      />
  </Box>
  );
}
