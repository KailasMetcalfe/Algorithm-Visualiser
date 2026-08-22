import Home from "./pages/Home.jsx";
import Visualiser from "./pages/Visualiser.jsx";
import BinarySearch from "./pages/BinarySearch.jsx";
import NotFound from "./pages/NotFound.jsx";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        element: <Visualiser />,
        errorElement: <NotFound />,
        children: [{ path: "/binarysearch", element: <BinarySearch /> }],
    },
];

export default routes;
