// In Formik, you must either:
// Use value + onChange + onBlur manually from Formik props, or
// Use Formik’s <Field> component to bind automatically.
// Formik automatically marks all fields as touched on submit 
// if validation fails. That’s why after pressing submit, 
// errors suddenly appear, even if you never focused the fields.
import { Box, Button, TextField, Typography } from '@mui/material'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import type { IPostData, NewPostPayload } from '../types/post';

const initialValues: NewPostPayload = {
    title: "",
    description: "",
    content: "",
}
export const AddBlogPage = ({onAddBlog}:{onAddBlog?:(values:Partial<IPostData>)=>void}) => {
    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        description: Yup.string().required(),
        content: Yup.string().required(),
    })
    // const handleSubmit=(values:IPostData)=>{
    //     console.log(values)
    // }
    return (
        <Box sx={{ p: 3, maxWidth: 600 }}>
            <Typography variant="h4" mb={3}>
                Add New Blog Post
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, {resetForm}) => {
                    console.log(values)
                    onAddBlog?.(values);
                    resetForm();
                }}
            >
                {({ values, handleChange, touched, errors, handleBlur }) => (
                    <Form>
                        <TextField
                            id="title"
                            name="title"
                            value={values.title}
                            onChange={handleChange}
                            fullWidth
                            placeholder='Enter title'
                            error={touched.title && Boolean(errors.title)}
                            helperText={touched.title && errors.title}
                            onBlur={handleBlur}
                            sx={{mb:1}}
                        />
                        <TextField
                            id="description"
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                            fullWidth
                            placeholder='Enter description'
                            error={touched.description && Boolean(errors.description)}
                            helperText={touched.description && errors.description}
                            onBlur={handleBlur}
                            sx={{mb:1}}
                        />
                        <TextField
                            id="content"
                            name="content"
                            value={values.content}
                            onChange={handleChange}
                            fullWidth
                            placeholder='Enter content'
                            error={touched.content && Boolean(errors.content)}
                            helperText={touched.content && errors.content}
                            onBlur={handleBlur}
                            sx={{mb:1}}
                        />
                        <Button variant='contained' type="submit">Add Blog</Button>

                    </Form>
                )}
            </Formik>
        </Box>
    )
}
