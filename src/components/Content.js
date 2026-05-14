import { useState } from "react";
export const Content = () => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }
    const char = text.length;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const handleClick = () => {
        setText('');
    }
    return (
        <main>
            <div className="component">
                <textarea value={text} type="text" placeholder="Enter text here..." onChange={handleChange} />
            </div>

            <div className="actions">
                <button onClick={handleClick} className="clear" disabled={text.length === 0}>Clear</button>

                <div className="btn">
                    <button className="blue-btn">Character: {char}</button>
                    <button className="blue-btn">Word: {wordCount}</button>
                </div>
            </div>
        </main>
    );
};