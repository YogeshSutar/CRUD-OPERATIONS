import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./Redux/Store.jsx";
import { Provider } from "react-redux";
import Cards from "./Pages/Cards.jsx";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Errorpage from "./Pages/Errorpage.jsx";
import Adddata from "./components/Adddata.jsx";
import EditContent from "./components/EditContent.jsx";
import ReadContent from "./components/ReadContent.jsx";
import CardsRedux from "./Pages/CardsRedux.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Errorpage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/cards",
          element: <Cards />,
        },
        {
          path: "/CardData",
          element: <Adddata />,
        },
        {
          path: "/ReadContent/:id",
          element: <ReadContent />,
        },
        {
          path: "/EditContent/:id",
          element: <EditContent />,
        },
        {
          path: "/CardsRedux",
          element: <CardsRedux />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
