import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { IoEye, IoEyeOff } from 'react-icons/io5';

export default function Desktop() {
  const [imgIndex, setImgIndex] = React.useState(1);
  const [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex === 5 ? 1 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  function handleTogglePassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <Grid container>
      <Grid item xs={0} md={7} display={{ xs: 'none', md: 'block' }}>
        <Box sx={{ height: '100vh' }}>
          <img
            src={`/${imgIndex}.png`}
            className="fade-in"
            alt="Picture"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
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
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Higher
          </Typography>

          <Button
            startIcon={<AiFillGoogleCircle style={{ marginBottom: '2px' }} />}
            fullWidth
            sx={{
              borderRadius: '20px',
              backgroundColor: '#fff',
              color: 'black',
              m: '24px 0',
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
              textTransform: 'initial',
            }}
          >
            Continue With Google
          </Button>

          <Typography sx={{ alignSelf: 'start', m: '20px 0' }}>
            Or Signin With
          </Typography>

          <TextField
            placeholder="test@gmail.com"
            fullWidth
            size="small"
            sx={{
              backgroundColor: '#0f0f0f',
              borderRadius: '20px',
            }}
            InputProps={{
              sx: {
                color: '#fff',
                borderRadius: '20px',
              },
            }}
          />

          <TextField
            placeholder="password"
            fullWidth
            size="small"
            type={showPassword ? 'text' : 'password'}
            sx={{
              backgroundColor: '#0f0f0f',
              borderRadius: '20px',
              marginTop: '20px',
              color: '#fff',
            }}
            InputProps={{
              sx: {
                color: '#fff',
                borderRadius: '20px',
                '&:focus': {
                  outline: 'none',
                },
              },
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                  {showPassword ? (
                    <IoEyeOff
                      onClick={handleTogglePassword}
                      style={{ color: '#fff', width: '20px', height: '20px' }}
                    />
                  ) : (
                    <IoEye
                      onClick={handleTogglePassword}
                      style={{ color: '#fff', width: '20px', height: '20px' }}
                    />
                  )}
                </InputAdornment>
              ),
            }}
            disableUnderline={true}
          />

          <Button
            fullWidth
            sx={{
              borderRadius: '20px',
              backgroundColor: '#02DAC5',
              color: '#fff',
              m: '20px 0',
              '&:hover': {
                backgroundColor: '#00C7B3',
              },
              textTransform: 'initial',
            }}
          >
            Sign in Account
          </Button>

          <Box sx={{ display: 'flex', gap: '8px' }}>
            <Typography sx={{ color: '#636768', fontWeight: 'bold' }}>
              Create an account?
            </Typography>
            <Link
              href="#"
              sx={{
                color: '#02DAC5',
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              Sign Up
            </Link>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
