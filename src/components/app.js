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
import UserContext from "../utils/context/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/store/appStore";

const HelpPage = lazy(() => import("./help/help"));

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [inputSearchValue, setInputSearchValue] = useState("");
  const listofRestaurant = useRestaurantCardData();
  const [listChanged, setListChanged] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Ayushi",
    };
    setListChanged(listofRestaurant);
    setUserName(data.name);
  }, [listofRestaurant]);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
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
      </UserContext.Provider>
    </Provider>
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

root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
// export default App;
