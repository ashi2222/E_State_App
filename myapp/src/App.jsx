import Navbar from "./components/Navbar/Navbar.jsx"
import Home from "./pages/HomePage/Home"
import List from "./pages/ListPage/List.jsx"
import SinglePage from "./pages/singlePage/singlePage.jsx"
import { Layout , RequireAuth } from "./pages/Layout/Layout.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Profile from "./pages/profilePage/Profile.jsx";
import Register from "./pages/Register/Register.jsx";
import ProfileUpdatePage from "./pages/updatePage/updatePage.jsx";
import NewPostPage from "./pages/newPostPage/newPostPage.jsx";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders.js";
import About from "./pages/AboutPage/About.jsx";
import Contact from "./pages/ContactPage/Contact.jsx";
import Agents from "./pages/AgentsPage/Agents.jsx";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/agents",
          element: <Agents />,
        },
        {
          path: "/list",
          element: <List />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register/>,
        },
      ]
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path: "/profile",
          element: <Profile/>,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage/>,
        },
        {
          path: "/add",
          element: <NewPostPage/>,
        },
      ]

    }
  ]);
  
  return (
    
    <RouterProvider
    router={router}
    fallbackElement={<Home />}
  />
  )
}

export default App