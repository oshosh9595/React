import Galh from "./Galh";
import Galt1 from "./Galt1";
import Galt2 from "./Galt2";
import { useEffect, useState } from "react";

const Galm = ({ Gt1, Gdata }) => {

    let [selG1, setSelG1] = useState();

    let [selData, setSelData] = useState();

    useEffect(() => {
        setSelData(Gdata.filter((i) =>
            i.galTitle === selG1
        )[0]) // 배열에 첫번재꺼라 0로가 붙음
    }, [selG1]);

    useEffect(() => {
        console.log("selData", selData);
    }, [selData]);

    
    return (
        <div>
            <div className="Galhaeder">
                <Galh />
            </div>
            <div className="Galmain">
                <Galt1 Gt1={Gt1} selG1={selG1} setSelG1={setSelG1} />
                {selData && <Galt2 selData={selData} setSelData={setSelData} />}
            </div>
        </div>

    );
};

export default Galm;