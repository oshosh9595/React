//링크 받는거?? useParams
import { useParams } from "react-router-dom";
const RoutePage1 = () => {
    const item = useParams().item;
    console.log("p1 item :", item);

    const fruits = ['사과🍎', '바나나🍌'];
    let tag;
    //if(fruits.includes(item)) tag = "과일입니다";
    //else tag = "과일이 아닙니다.";

    tag = fruits.includes(item) ? "과일입니다" : "과일이 아닙니다."
    //includes 문자열이 특정 문자열을 포함하는지 확인하는 메서드이다
    return(
        <>
            <h1>Page1</h1>
            <p>{`${item}는 ${tag}`}</p>
        </>
    );

}
export default RoutePage1;