import Home from "./pages/home/Home.jsx";
import Visualiser from "./pages/visualiser/Visualiser.jsx";
import BinarySearch from "./pages/binarySearch/BinarySearch.jsx";
import InsertionSort from "./pages/insertionSort/InsertionSort.jsx";
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
        children: [
            { path: "/binarysearch", element: <BinarySearch /> },
            { path: "/insertionsort", element: <InsertionSort /> },
        ],
    },
];

export default routes;
