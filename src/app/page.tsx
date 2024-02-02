import { PostService } from '@/services/post.service';
import { Box, Typography } from '@mui/material';

export default async function Home() {
  const posts = await new PostService().getPosts();

  return (
    <Box sx={{ padding: '12px 16px' }}>
      <Typography variant="h3">Hello world</Typography>
    </Box>
  );
}
