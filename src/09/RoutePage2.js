import { useLocation } from 'react-router-dom';
import qs from 'query-string';
const RoutePage2 = () => {
    //url 방식
    //let location = 'https://newsstand.naver.com/?list=&pcode=904';
    let location = useLocation().search;
    console.log("location", location)
    //location = location.split('?')[1];
    let item = qs.parse(location).item;
    console.log(item);

    const fruits = ['사과🍎', '바나나🍌'];
    let tag = fruits.includes(item) ? "과일입니다" : "과일이 아닙니다."

    return(
        <>
            <h1>PAGE2</h1>
            <p>{`${item}는 ${tag}`}</p>
        </>
    );

}
export default RoutePage2;