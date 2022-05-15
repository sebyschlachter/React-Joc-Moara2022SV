import { useState } from "react";
const MyName = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () =>{
        setOpen(!open);
    }
    return(
        <div >
            <div className={`myName ${open ? "myNameContainer" : ""}`} onClick={toggleOpen}> Sebastian Schlachter </div>
            <div className={`${open ? "" : "noDisplay"}`}>Numele de alături este colorat</div>
        </div>
    )
}

export default MyName;