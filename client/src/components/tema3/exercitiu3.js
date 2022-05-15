import AddColorForm from "./add_color_form";
import { useState } from "react";
import ColorList from "./colorList";
const Exercitiu3 = () => {
    const [colors, setColors] = useState([{ color: "#000000", id: 0 },]);
    const addColor = (color) => {
        const newColors = [...colors];
        color.id = colors.length;
        newColors.push(color);

        setColors(newColors);
    }
    const removeColor = (id) => {
        const newColors = colors.filter((color) => color.id !== id)
        setColors(newColors);
    }
    return (
        <div className="exercitiu">
            Exercitiu 3
            <br />
            <AddColorForm handleClick={addColor} />
            <br />
            <div>
                {colors.map((color) => (
                    <ColorList key={color.id} {...color} handleRemove={removeColor} />
                ))}
            </div>
            <div className='rectangleGradient'
                style={{ backgroundImage: `linear-gradient(${colors.map(color => color['color']).join(",")})` }} ></div>
        </div>

    )
}

export default Exercitiu3;