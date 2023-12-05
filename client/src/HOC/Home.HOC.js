import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "../layout/Home.layout";
const HomeLayoutHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component'
          <HomeLayout>
            <Component {...rest} />
          </HomeLayout>
        }
      />
    </Routes>
  );
};

export default HomeLayoutHOC;
