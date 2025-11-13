import { Box, Button, Paper, Typography } from '@mui/material';
import { Link } from "react-router";
const posts = [
    {
        id: 1,
        title: "Getting Started with React",
        date: "Nov 12, 2025",
        description: "Learn the basics of React.js and how to start building modern web apps.",
    },
    {
        id: 2,
        title: "Why I Switched to Next.js",
        date: "Nov 10, 2025",
        description: "Discover why Next.js made my development process faster and more enjoyable.",
    },
];

export const HomePage = () => {
    return (
        <Box>
            <Typography variant="h4">
                📝 Welcome to My Blog
            </Typography>
            <Typography variant="subtitle1" mb={3}>
                A place where I share my journey & learning.
            </Typography>
            {posts.map(post =>
            (<Paper key={post.id} sx={{p:2, mb:2}}>
                <Typography variant="h6" fontWeight="bold">{post.title}</Typography>
                <Typography variant="caption">{post.date}</Typography>
                <Typography variant="body2" my={2}>{post.description}</Typography>
                <Button component={Link} to={`/blog/${post.id}`} variant='outlined' size='small'>Read More</Button>
            </Paper>)
            )}
        </Box>
    )
}
