import Wheader from "./Wheader";
import keys from "../db/item.json"
import weather2 from "../db/weather2.json"
import { useState, useEffect } from "react";

const W1 = () => {

    //state 변수 제어하는변수를 제어한다 즉 재랜더링 시킴
    const [items, setItems] = useState();
    const [itemTag, setItemTag] = useState();

    //useEffect

    //useEffect(() => {}); //랜더링이 발생될떄 마다

    useEffect(() => {
        //console.log("weather2", weather2.response.body.items.item);
        setItems(weather2.response.body.items.item);
    }, []);//맨처음 컴포넌트 랜더링시 실행

    useEffect(() => {
        if(!items) return;
        console.log("items", items);
        let temp = items.map((i, n) =>
            <div className="w1div" key={"w1div"+n}>
                <span className="sp0">{keys[i.category][0]}</span>
                <span className="sp1">{i.obsrValue}</span>
                <span className="sp2">{keys[i.category][1]}</span>
            </div>
            //console.log(`i= ${i} n=${n}`)
        );

        setItemTag(temp);
    }, [items]);//특정 state 변수 변경시 실행

    return (
        <div className="content">
            <Wheader title={'일기예보-단기'} />
            {items && itemTag}
        </div>
    );
}

export default W1;