import { useNavigate, Outlet } from "react-router";
import { useEffect, useState } from "react";
import CodeBlock from "../../components/codeBlock/CodeBlock";
import styles from "./visualiser.module.css";

function Visualiser() {
    const navigate = useNavigate();
    const [algorithm, setAlgorithm] = useState({
        name: "",
        codeSnippets: [],
        historyLength: 0,
        randomise: undefined,
    });
    const [historyIndex, setHistoryIndex] = useState(0);
    const [play, setPlay] = useState(false);

    // Play button effect
    useEffect(() => {
        if (play) {
            const intervalID = setInterval(() => {
                historyIndex + 1 < algorithm.historyLength
                    ? setHistoryIndex(historyIndex + 1)
                    : setPlay(false);
            }, 1000);

            return () => clearTimeout(intervalID);
        }
    }, [play, historyIndex, algorithm.historyLength]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className={styles.backBtn}
                >
                    Back
                </button>
                <h1>{algorithm.name}</h1>
            </div>
            <div className={styles.main}>
                <div className={styles.content}>
                    <Outlet
                        context={{
                            setAlgorithm,
                            historyIndex,
                            setHistoryIndex,
                        }}
                    />
                    <div className={styles.buttons}>
                        <div className={styles.iterateButtons}>
                            <div className={styles.traverseButtons}>
                                <button
                                    type="button"
                                    disabled={historyIndex - 1 < 0}
                                    onClick={() =>
                                        setHistoryIndex(historyIndex - 1)
                                    }
                                >
                                    Prev
                                </button>
                                <button
                                    type="button"
                                    disabled={
                                        historyIndex + 1 >=
                                        algorithm.historyLength
                                    }
                                    onClick={() =>
                                        setHistoryIndex(historyIndex + 1)
                                    }
                                >
                                    Next
                                </button>
                            </div>
                            <button
                                type="button"
                                className={styles.play}
                                onClick={
                                    play
                                        ? () => setPlay(false)
                                        : () => setPlay(true)
                                }
                            >
                                <img
                                    src={
                                        play
                                            ? "./icons/pause.svg"
                                            : "./icons/play.svg"
                                    }
                                    alt={play ? "pause" : "play"}
                                />
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                                algorithm.randomise();
                                setHistoryIndex(0);
                            }}
                        >
                            Randomise
                        </button>
                    </div>
                </div>
                <CodeBlock codeArray={algorithm.codeSnippets} />
            </div>
        </div>
    );
}
export default Visualiser;
