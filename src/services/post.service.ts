import { Post } from '@/models/post';

export class PostService {
  async getPosts(): Promise<Post[]> {
    const response = await fetch(`${process.env.API_URL}/posts`, {
      next: { revalidate: 10 },
    });
    return response.json();
  }

  async getPostById(id: number): Promise<Post> {
    const response = await fetch(`${process.env.API_URL}/posts/${id}`, {
      next: { revalidate: 10 },
    });
    return response.json();
  }
}
