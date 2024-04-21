import { createBrowserRouter } from "react-router-dom";

import Root from "../assets/components/Root";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import SuggestionPage from "../pages/SuggestionPage/SuggestionPage";
import PluginsPage from "../pages/PluginsPage/PluginsPage";
import ComparePage from "../pages/ComparePage/ComparePage";
import FaqPage from "../pages/FaqPage/FaqPage";
import NotFounded from "../pages/NotFoundedPage/NotFounded";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    redirect: "/",
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "about",
        element: <AboutPage/>,
      },
      {
        path: "suggestion",
        element: <SuggestionPage/>,
      },
      {
        path: "plugins",
        element: <PluginsPage/>,
      },
      {
        path: "compare",
        element: <ComparePage/>,
      },
      {
        path: "faq",
        element: <FaqPage/>
      },
      {
        path: "*",
        element: <NotFounded/>,
      },
    ]
  },
]);
