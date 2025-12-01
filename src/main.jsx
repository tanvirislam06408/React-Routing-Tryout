import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Compoments/Header/Header.jsx'
import Laptops from './Compoments/Laptop/Laptops.jsx'


import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mobile from './Compoments/Mobile/Mobile.jsx'
import Root from './Compoments/Root/Root.jsx'
import Home from './Compoments/Home/Home.jsx'
import About from './Compoments/About/About.jsx'
import Users from './Compoments/Users/Users.jsx'
import User from './Compoments/User2/User.jsx'
import { Suspense } from 'react'
import Details from './Compoments/UserDetails/Details.jsx'
import Posts from './Compoments/Posts/Posts.jsx'
import PostDetails from './Compoments/PostDetails/PostDetails.jsx'


const useData = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "Laptops", Component: Laptops },
      { path: "Mobile", Component: Mobile },
      { path: 'About', Component: About },
      {
        path: "users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {path: "users2", element: <Suspense fallback={<span>loading ....</span>}>
        <User useData={useData}></User>
      </Suspense>},
      {path: "users/:userId",
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        ,
        Component: Details},
        {path:"posts",
          loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
          Component: Posts
        },
        {path:"posts/:postId",
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
          Component: PostDetails
        }
    ]
  },


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
