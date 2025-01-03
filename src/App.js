import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cards from './Pages/Cards.jsx'
import Layout from "./Layout/Layout.jsx"
import Home from "./Pages/Home.jsx"
import Errorpage from "./Pages/Errorpage.jsx"
import Adddata from "./components/Adddata.jsx"
import EditContent from './components/EditContent.jsx'
import ReadContent from "./components/ReadContent.jsx"
function App() {
  const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Errorpage/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/cards",
        element:<Cards/>
      },
      {
        path:"/CardData",
        element:<Adddata/>
      },
      {
        path:"/ReadContent/:id",
        element:<ReadContent/>
      },
      {
        path:"/EditContent/:id",
        element:<EditContent/>
      }
    ]
  }
  ])
  return (
    <RouterProvider router={router}/>
    );
}

export default App;
