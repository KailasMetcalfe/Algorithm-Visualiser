import { useNavigate, Outlet } from "react-router";
import { useState } from "react";
import styles from "./visualiser.module.css";

function Visualiser() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className={styles.back}
                >
                    Back
                </button>
                <h1>{name}</h1>
            </div>
            <Outlet context={setName} />
        </div>
    );
}
export default Visualiser;
