import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Notfound from './components/notfound/Notfound'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Notfound /> },
    ],
  },
])

function App() {
  return <RouterProvider router={routers} />
}

export default App
