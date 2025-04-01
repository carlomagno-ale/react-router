import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import PostsList from "./pages/PostsList";


export default function App() {


  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route path="/" Component={Home} />
          <Route path="/post" Component={PostsList} />
          <Route path="/about" Component={About} />

        </Routes>

      </BrowserRouter>

    </>
  )
}
