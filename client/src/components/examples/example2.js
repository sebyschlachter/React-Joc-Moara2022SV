import Bottle from "../bottle";

const Example2 = () => {
    return (
        <div className="example">
            Example2 - Reuse Component
            <div className="d-flex">
                <Bottle liquidColor="red" etiquette="red"/>
                <Bottle liquidColor="yellow" etiquette="yellow"/>
                <Bottle liquidColor="green" etiquette="green"/>
            </div>
            
            </div>
    );
};

export default Example2;