import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Mobiles from './Components/Mobiles/Mobiles.jsx'
import LapTops from './Components/LapTops/LapTops.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Users from './Components/Users/Users.jsx'
import Users2 from './Components/Users2/Users2.jsx'
import UserDetails from './Components/UserDeatils/UserDetails.jsx'

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true, Component: Home
      },
      {
        path: 'mobiles', Component: Mobiles
      },
      {
        path: 'laptops', Component: LapTops
      },
      {
        path: 'footer', Component: Footer
      },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        element: <Suspense fallback={<p>LOading.....</p>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },

    ]
  },
  {
    path: 'app',
    Component: App
  },
  {
    path: '*',
    element: <h3>Not Found : 404 content dose not found</h3>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
