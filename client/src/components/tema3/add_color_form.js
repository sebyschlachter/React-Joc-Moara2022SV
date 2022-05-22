import { useState } from "react";
const AddColorForm = (props) => {
    const [color, setColor] = useState("#000000");
    const handleClick = () => {
        props.handleClick({ color })
    }
    return (
        <>
            <input type="color" value={color}
                onChange={(e) => setColor(e.target.value)}></input>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default AddColorForm;