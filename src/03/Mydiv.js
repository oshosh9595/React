import Mydiv1 from "./Mydiv1";
import Mydiv2 from "./Mydiv2";
import "./Mydiv.css";
import { useState } from "react";

const Mydiv = () => {
    const rname = 'Recat !!';
    let[n, setN] = useState(1);

    const upN = () => {
        setN(++n);
    }

    return(

        <div className="content">
            <div className="header">
                <h1 onClick={upN}>컴포넌트 예제 {rname} {n}</h1>
            </div>
            <div className="main">
                <Mydiv1 user={rname} n={n} setN={setN}/>
                <Mydiv2 div2n={n}/>
            </div>
        </div>
    );
}

// 컴퍼넌트는 사용자 정의태그
export default Mydiv;