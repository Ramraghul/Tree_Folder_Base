import React, { useState } from "react";

const Modal = ({ handleClose, prompt }) => {
    const [categoryName, setCategoryName] = useState("");

    const handleSave = () => {
        handleClose(categoryName);
    }

    return (
        <div className="modal">
            <p>{prompt}</p>
            <input
                type="text"
                value={categoryName}
                onChange={e => setCategoryName(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleClose}>Cancel</button>
        </div>
    );
}

export default Modal;
