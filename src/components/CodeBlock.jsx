import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    vscDarkPlus,
    oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./codeBlock.module.css";
import { useState } from "react";

export default function CodeBlock({ codeArray, isDark = true }) {
    const [language, setLanguage] = useState("javascript");
    return (
        <div className={styles.codeBlock}>
            <div className={styles.buttons}>
                {codeArray.map((code) => {
                    return (
                        <button
                            key={code.language}
                            type="button"
                            className={
                                code.language === language
                                    ? styles.active
                                    : styles.notActive
                            }
                            onClick={() => setLanguage(code.language)}
                        >
                            {code.language[0].toUpperCase() +
                                code.language.slice(1)}
                        </button>
                    );
                })}
            </div>
            <Code isDark={isDark} language={language}>
                {codeArray.find((item) => item.language === language).code}
            </Code>
        </div>
    );
}

function Code({ children, isDark, language = "javascript" }) {
    return (
        <div className={styles.wrapper}>
            <SyntaxHighlighter
                language={language}
                style={isDark ? vscDarkPlus : oneLight}
                showLineNumbers
                codeTagProps={{
                    style: {
                        fontFamily: "JetBrainsMono",
                    },
                }}
                lineNumberStyle={{
                    fontFamily: "JetBrainsMono, monospace",
                }}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    );
}
