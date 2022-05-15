import { useEffect, useState } from "react";
const Exercitiu4 = (props) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 5000);
    }, []);
    return (
        <div className="exercitiu">
            Exercitiu 4
            <div>{!loaded ? 'Loading, please wait' : 'Finished loading'}</div>
        </div>
    )

}

export default Exercitiu4;