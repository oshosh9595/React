import { Link } from "react-router-dom";
import Wheader from "./Wheader";
import item from "../db/item.json"
import weather from "../db/weather.json"
import weather2 from "../db/weather2.json"

let itemdb = item;
let weatherdb = weather.response.body.items.item;
let weather2db = weather2;

const Wmenu = () => {
    return (
        <>
            <Wheader title={'일기예보'} />
            <ul className="linkdiv">
                <li><Link to="w1">단기예보</Link></li>
                <li><Link to="w2">중기예보</Link></li>
            </ul>

        </>
    );
}

export default Wmenu;