import { Box, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function ButtonNav() {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', gap: '12px' }} mt="20px">
      <Link to="/">
        <Button
          sx={{
            color: location.pathname === '/' ? '#fff' : '#c6c6c6',
            width: '85px',
            borderBottom: 2,
            borderRadius: 0,
            textTransform: 'initial',
            borderColor: location.pathname === '/' ? '#fff' : 'transparent',
          }}
        >
          Sign In
        </Button>
      </Link>
      <Link to="/register">
        <Button
          sx={{
            color: location.pathname !== '/' ? '#fff' : '#c6c6c6',
            width: '85px',
            borderBottom: 2,
            borderRadius: 0,
            textTransform: 'initial',
            borderColor: location.pathname !== '/' ? '#fff' : 'transparent',
          }}
        >
          Sign Up
        </Button>
      </Link>
    </Box>
  );
}
