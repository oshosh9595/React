import { useLocation } from 'react-router-dom';
import qs from 'query-string';
const RoutePage2 = () => {
    //url λ°©μ
    //let location = 'https://newsstand.naver.com/?list=&pcode=904';
    let location = useLocation().search;
    console.log("location", location)
    //location = location.split('?')[1];
    let item = qs.parse(location).item;
    console.log(item);

    const fruits = ['μ¬κ³Όπ', 'λ°λλπ'];
    let tag = fruits.includes(item) ? "κ³ΌμΌμλλ€" : "κ³ΌμΌμ΄ μλλλ€."

    return(
        <>
            <h1>PAGE2</h1>
            <p>{`${item}λ ${tag}`}</p>
        </>
    );

}
export default RoutePage2;