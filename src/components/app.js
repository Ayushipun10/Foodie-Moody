import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./header/Header";
import ReactDOM from "react-dom/client";
import Body from "./cards/RestaurantBody";
import Filter from "./filter/filter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HelpPage from "./help/help";
import CartPage from "./cart/cart";
import ErrorPage from "./error/error";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [inputSearchValue, setInputSearchValue] = useState("");

  return (
    <>
      <Header setInputSearchValue={setInputSearchValue} />
      <Filter setSelectedCategory={setSelectedCategory} />
      <Body
        selectedCategory={selectedCategory}
        inputSearchValue={inputSearchValue}
      />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/help",
    element: <HelpPage />
  },
  {
    path:"/cart",
    element: <CartPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

root.render(<RouterProvider router={appRouter}/>);
// export default App;
