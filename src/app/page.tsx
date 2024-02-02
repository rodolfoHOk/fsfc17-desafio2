import { PostCard } from '@/components/PostCard';
import { PostService } from '@/services/post.service';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';

export default async function Home() {
  const posts = await new PostService().getPosts();

  return (
    <Box
      sx={{
        height: 'calc(100% - 24px)',
        padding: '12px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        overflowY: 'scroll',
      }}
    >
      {posts.map((post) => (
        <PostCard key={post.id} id={post.id} title={post.title} />
      ))}
    </Box>
  );
}
