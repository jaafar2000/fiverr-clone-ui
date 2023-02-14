import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home  from "./pages/home/Home"
import Gigs from './pages/gigs/Gigs'
import AddNewGigs from './pages/addNewGigs/AddNewGigs'
import Register from './pages/register/Register'
import MyGigs from './pages/myGigs/MyGigs'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import Orders from './pages/orders/Orders'
import Gig from './pages/gig/Gig'
import Login from './pages/login/Login'
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <AddNewGigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;