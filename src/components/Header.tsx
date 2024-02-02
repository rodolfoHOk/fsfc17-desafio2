import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import Link from 'next/link';

export function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ width: '100vw', height: '72px', bgcolor: 'primary.main' }}
    >
      <Toolbar>
        <Box
          component={Link}
          href={'/'}
          sx={{
            textDecoration: 'none',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <HistoryEduRoundedIcon
            fontSize={'large'}
            sx={{ color: 'primary.contrastText' }}
          />
          <Typography
            variant="h5"
            fontWeight={500}
            color="primary.contrastText"
          >
            Suas Notícias
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
