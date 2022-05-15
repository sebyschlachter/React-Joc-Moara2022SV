
const ColorList = (props) => {
    const onRemoveColorClick = () => {
        props.handleRemove(props.id);
    }
    return (
        <div className="colorList">
            <div>{props.color}</div>
            {props.handleRemove && <div className="deleteColor" onClick={onRemoveColorClick} >X</div>}
        </div>
    )

}

export default ColorList;