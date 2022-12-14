
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Quize from './components/Quize/Quize';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path:'/blogs',
          element: <Blogs></Blogs>
        },
        {
          path:'/statistics',
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>,
        },
        {
          path:'/quize/:quizeId',
          loader:({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizeId}`),
          element:<Quize></Quize>
        }
      ]
      }

    ])
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
