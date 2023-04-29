import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ButtonNav from './ButtonNav';
import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaApple, FaFacebookF, FaGoogle } from 'react-icons/fa';

export default function MobileLogin() {
  const [showPassword, setShowPassword] = React.useState(false);

  function handleTogglePassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <Box sx={{ color: '#fff', position: 'relative' }}>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
        }}
      >
        <img
          src="/mobileImage.png"
          alt="Background"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            filter: 'brightness(30%)',
          }}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          height: '100vh',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          sx={{
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            width: '400px',
            p: '0 20px',
          }}
        >
          <img src="/logo.png" alt="Picture" width="100" height="100" />
          <Typography>Higher</Typography>
          <ButtonNav />
          <TextField
            fullWidth
            placeholder="Email Adress or Phone Number"
            sx={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              marginTop: '20px',
              color: 'red',
            }}
            inputProps={{ sx: { fontWeight: 'bold' } }}
          />
          <TextField
            fullWidth
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            sx={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              marginTop: '10px',
            }}
            InputProps={{
              sx: {
                fontWeight: 'bold',
                borderRadius: '8px',
                '&:focus': {
                  outline: 'none',
                },
              },
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                  {showPassword ? (
                    <AiOutlineEyeInvisible
                      onClick={handleTogglePassword}
                      style={{
                        color: '#565656',
                        width: '25px',
                        height: '25px',
                      }}
                    />
                  ) : (
                    <AiOutlineEye
                      onClick={handleTogglePassword}
                      style={{
                        color: '#565656',
                        width: '25px',
                        height: '25px',
                      }}
                    />
                  )}
                </InputAdornment>
              ),
            }}
            disableUnderline={true}
          />
          <TextField
            fullWidth
            placeholder="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            sx={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              marginTop: '10px',
            }}
            InputProps={{
              sx: {
                fontWeight: 'bold',
                borderRadius: '8px',
                '&:focus': {
                  outline: 'none',
                },
              },
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                  {showPassword ? (
                    <AiOutlineEyeInvisible
                      onClick={handleTogglePassword}
                      style={{
                        color: '#565656',
                        width: '25px',
                        height: '25px',
                      }}
                    />
                  ) : (
                    <AiOutlineEye
                      onClick={handleTogglePassword}
                      style={{
                        color: '#565656',
                        width: '25px',
                        height: '25px',
                      }}
                    />
                  )}
                </InputAdornment>
              ),
            }}
            disableUnderline={true}
          />
          <Box sx={{ width: '100%' }}>
            <Button
              fullWidth
              size="large"
              sx={{
                height: '50px',
                borderRadius: '8px',
                backgroundColor: '#02DAC5',
                color: '#fff',
                marginTop: '20px',
                '&:hover': {
                  backgroundColor: '#00C7B3',
                },
                textTransform: 'initial',
              }}
            >
              Create Account
            </Button>
          </Box>

          <Typography sx={{ fontWeight: 'bold', marginTop: '30px' }}>
            Forgot Password?
          </Typography>

          <Typography sx={{ marginTop: '10px', textAlign: 'center' }}>
            Or use social account to create account
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ marginTop: '20px', paddingBottom: '20px' }}
          >
            <FaGoogle
              style={{
                backgroundColor: '#000',
                color: '#fff',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                padding: '10px',
                cursor: 'pointer',
              }}
            />
            <FaApple
              style={{
                backgroundColor: '#000',
                color: '#fff',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                padding: '10px',
                cursor: 'pointer',
              }}
            />
            <FaFacebookF
              style={{
                backgroundColor: '#000',
                color: '#fff',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                padding: '10px',
                cursor: 'pointer',
              }}
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
