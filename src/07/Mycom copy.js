import { useState, useEffect, useRef } from "react";

const Mycom = () => {
    //컴포넌트 내부변수
    let cnt1 = 0;

    //state변수  useState, useEffect=useState 에변동된행위를 작동할떄
    const [cnt2, setCnt2] = useState(0);

    //ref 변수
    const cnt3 = useRef(0);

    //onClivk 함수
    //함수
    const showCnt = ( ) => {
        console.log(`cnt1 = ${cnt1}`);
        console.log(`cnt2 = ${cnt2}`);
        console.log(`cnt3 = ${cnt3.current}`);
    }

    const addCnt1 = () => {
        cnt1 = cnt1 + 1;
        showCnt();
    }

    const addCnt2 = () => {
        setCnt2(cnt2 + 1);
    }
 
    //변경있을떄 초기화시켜버림
    useEffect(() => {
        showCnt();
    }, [cnt2]);

    const addCnt3 = () => {
        cnt3.current = cnt3.current + 1;
        showCnt();
    } //ref 함수는  계속 데이터를 쥐고있음 렌더링해도

    

    return (
        <>
            <ul>
                <li>cnt = {cnt1}</li>
                <li>cnt = {cnt2}</li>
                <li>cnt = {cnt3.current}</li>
            </ul>
            <form>
                <input type="button" value="cnt1증가" onClick={addCnt1}/>
                <input type="button" value="cnt2증가" onClick={addCnt2}/>
                <input type="button" value="cnt3증가" onClick={addCnt3}/>
            </form>
        </>
    );
}

export default Mycom;