import SelectButton from "../../components/homeButton/SelectButton";
import AnimatedSort from "../../components/UI/AnimatedSort";
import styles from "./home.module.css";

const algorithms = [
    { name: "Binary Search", type: "search" },
    { name: "Dijkstra", type: "graph" },
    { name: "Merge Sort", type: "sort" },
    { name: "Heap Sort", type: "sort" },
    { name: "Insertion Sort", type: "sort" },
];

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.header}>
                <h1>Algorithm Visualiser</h1>
                <AnimatedSort />
            </div>
            <div className={styles.buttons}>
                {algorithms.map((algorithm) => {
                    return <SelectButton key={algorithm.name} {...algorithm} />;
                })}
            </div>
        </div>
    );
}

export default Home;
