import Mydiv11 from "./Mydiv11";
import { useEffect, useState } from "react";

const Mydiv1 = ({rname, n, setN}) => {
    console.log("div1", rname);
    const user = rname;
    let [cnt, setCnt] = useState(0);
    
    // Hoot사용법 [cnt, setCnt] >> 변수명 두번쨰는 변수를바꿀수있는콜백함수, improt 필수로 하고

    const addCnt = () => {
        //cnt = cnt + 1;
        setCnt(++cnt);
        console.log(cnt);
    }

    useEffect(() => {
        console.log('변경되었습니다.')
    })

    useEffect(() => {
        console.log('Mydiv1 처음입니다.....')
        return(
            console.log('종료...')
        );
    }, [])

    useEffect(() => {
        console.log('cnt변경으로 n변경');
        setN(++n);
    }, [cnt]);

    return (
        <div className="mydiv1">
            <h2 className="divh1">Mydiv1 {user} n={n}</h2>
            <Mydiv11 user={user} divname={'사용자정의' + cnt} />
            <div className="divbt">
                <button onClick={addCnt}>❤</button>
                <span>{cnt}</span>
            </div>
        </div>
    );
}
// 대부분 리엑트는 속성을받고하고싶을떄  probs 쓴다 하지만 기보name 을 가져와도된다
export default Mydiv1;
