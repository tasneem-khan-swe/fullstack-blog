import { Route, Routes } from "react-router";
import { Layout } from "../components/layout/Layout";
import { HomePage } from "../pages/HomePage";
import { BlogDetailsPage } from "../pages/BlogDetailsPage";
import { BlogPage } from "../pages/BlogPage";
import { AddBlogPage } from "../pages/AddBlogPage";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:id" element={<BlogDetailsPage />} />
        <Route path="about" element={"About"} />
        <Route path="contact" element={"Contact"} />
        <Route path="add-blog" element={<AddBlogPage/>} />
      </Route>
    </Routes>
  )
}
