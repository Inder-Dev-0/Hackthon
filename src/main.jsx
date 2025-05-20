import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import AboutPage from './components/AboutPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import GeneralProductPage from './components/GeneralProductPage.jsx'
import WeddingAlbum from './components/WeddingAlbumPage.jsx'
import PhotoBook from './components/PhotoBook.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/general-product", element: <GeneralProductPage /> },
      { path: "/wedding-album", element: <WeddingAlbum /> },
      { path: "/photo-book", element: <PhotoBook /> },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
