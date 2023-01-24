import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import Pages from "../pages/Pages";
import Contact from "../pages/Contact";
import MainRoot from "../pages/MainRoot";
import Add from "../pages/Add";
import WishList from "../pages/WishList";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "blog",
                element: <Blog />
            }, {
                path: "shop",
                element: <Shop />
            },
            {
                path: "pages",
                element: <Pages />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "add",
                element: <Add />
            }
            , {
                path: "wishlist",
                element: <WishList />
            }
        ]
    }

]
