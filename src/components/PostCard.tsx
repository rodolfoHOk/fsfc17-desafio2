import { Card, Typography } from '@mui/material';
import Link from 'next/link';

type PostCardProps = {
  id: number;
  title: string;
};

export function PostCard({ id, title }: PostCardProps) {
  return (
    <Card
      component={Link}
      key={id}
      sx={{
        padding: '24px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        textDecoration: 'none',
        transition: 'all 200ms ease-in-out',
        '&:hover': {
          backgroundColor: 'secondary.main',
          color: 'secondary.contrastText',
        },
      }}
      variant="elevation"
      href={`/${id}`}
    >
      <Typography variant="body1" fontWeight={700}>
        Título:
      </Typography>
      <Typography variant="body1" fontWeight={500}>
        {title}
      </Typography>
    </Card>
  );
}
