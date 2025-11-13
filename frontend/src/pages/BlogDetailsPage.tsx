import { Box, Button, Paper, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router";

const posts = [
    {
        id: 1,
        title: "Getting Started with React",
        date: "Nov 12, 2025",
        content:
            "React is a JavaScript library for building user interfaces. ...",
    },
    {
        id: 2,
        title: "Why I Switched to Next.js",
        date: "Nov 10, 2025",
        content:
            "Next.js is a React framework that enables server-side rendering ...",
    },
];
export const BlogDetailsPage = () => {
    const { id } = useParams();
    const post = posts.find(post => post.id === Number(id));
    const navigate=useNavigate();
    const goBack=()=>{
        navigate(-1)
    }
    if (!post) return <Box>Blog not found</Box>
    return (
        <Paper key={post.id} sx={{ p: 3, mb: 2 }}>
            <Typography variant="h4" fontWeight="bold">{post.title}</Typography>
            <Typography variant="caption">{post.date}</Typography>
            <Typography variant="body2" my={2}>{post.content}</Typography>
            <Button onClick={goBack} variant="contained"> Back to All Blogs</Button>
        </Paper>
    )
}
