import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from './pages/Home'
import About from "./pages/About";
import PostsList from "./pages/PostsList";


export default function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="post" element={<PostsList />} />
            <Route path="about" element={<About />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}
