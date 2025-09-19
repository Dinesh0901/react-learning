import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Route, RouterProvider,createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import User from "./pages/User.jsx";
import Github, { githubInfoLoader } from "./pages/github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "*",
//         element: <Contact />,
//       },
//       {
//         path: "user/:userid",
//         element: <User />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= "" element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="user/:userid" element={<User/>}/>
         <Route 
      
         path="github" element={<Github/>}
         />
//     </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
