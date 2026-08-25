import SortIcon from "./UI/SortIcon";
import SearchIcon from "./UI/SearchIcon";
import GraphIcon from "./UI/GraphIcon";
import { useNavigate } from "react-router";

function SelectButton({ type, name }) {
    const navigate = useNavigate();
    let icon;
    switch (type) {
        case "sort":
            icon = <SortIcon />;
            break;

        case "search":
            icon = <SearchIcon />;
            break;

        case "graph":
            icon = <GraphIcon />;
            break;
    }

    return (
        <button
            type="button"
            onClick={() => navigate("/" + name.replace(" ", "").toLowerCase())}
        >
            {icon}
            {name}
        </button>
    );
}

export default SelectButton;
