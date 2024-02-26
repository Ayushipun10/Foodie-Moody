import React, { useState, useEffect, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Header from "./header/Header";
import ReactDOM from "react-dom/client";
import Body from "./cards/RestaurantBody";
import Filter from "./filter/filter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HelpPage from "./help/help";
import CartPage from "./cart/cart";
import ErrorPage from "./error/error";
import RestaturantMenu from "./menu/RestaurantMenu";
import useRestaurantCardData from "../utils/hooks/useRestaurantCardData";

const HelpPage = lazy(() => import("./help/help"));

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [inputSearchValue, setInputSearchValue] = useState("");

  const listofRestaurant = useRestaurantCardData();

  const [listChanged, setListChanged] = useState([]);

  useEffect(() => {
    setListChanged(listofRestaurant);
  }, [listofRestaurant]);

  return (
    <>
      <Header
        setInputSearchValue={setInputSearchValue}
        setListChanged={setListChanged}
      />
      <Filter
        setSelectedCategory={setSelectedCategory}
        setListChanged={setListChanged}
        listChanged={listChanged}
      />
      <Body
        selectedCategory={selectedCategory}
        inputSearchValue={inputSearchValue}
        listChanged={listChanged}
        setListChanged={setListChanged}
      />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/help",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <HelpPage />
      </Suspense>
    ),
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/restaurants/:resId",
    element: <RestaturantMenu />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

root.render(<RouterProvider router={appRouter} />);
// export default App;
