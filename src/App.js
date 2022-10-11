
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path:'/blogs',
          element: <Blogs></Blogs>
        },
        {
          path:'/statistics',
          element: <Statistics></Statistics>
        }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
