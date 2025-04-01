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

          <Route Component={Layout} />
          <Route path="/" Component={Home} />
          <Route path="/post" Component={PostsList} />
          <Route path="/about" Component={About} />

        </Routes>

      </BrowserRouter>

    </>
  )
}
