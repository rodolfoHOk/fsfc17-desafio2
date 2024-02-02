import { PostService } from '@/services/post.service';
import { Box, Card, Typography } from '@mui/material';
import { title } from 'process';

export default async function PostPage({ params }: { params: { id: number } }) {
  const post = await new PostService().getPostById(params.id);

  return (
    <Box
      sx={{
        padding: '12px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Card
        sx={{
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
        variant="outlined"
      >
        <Typography variant="h5" fontWeight={500} align="center">
          {post.title}
        </Typography>
        <Typography variant="body1">{post.body}</Typography>
      </Card>
    </Box>
  );
}
