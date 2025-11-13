import { Route, Routes } from "react-router";
import { Layout } from "../components/layout/Layout";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={"Home Page"} />
        <Route path="blog" element={"Blog"} />
        <Route path="about" element={"About"} />
        <Route path="contact" element={"Contact"} />
      </Route>
    </Routes>
  )
}
