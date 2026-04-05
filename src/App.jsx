import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Error from "./components/Error";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "experiences", element: <Experiences /> },
        { path: "projects", element: <Projects /> },
        { path: "skills", element: <Skills /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
