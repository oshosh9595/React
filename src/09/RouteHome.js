import { Link, useNavigate, useParams } from 'react-router-dom';
const RouteHome = () => {

    const navigate = useNavigate();
    //const url = {
    //    '사과🍎' : '/p2?item=사과🍎', 
    //    '바나나🍌' : '/p2?item=바나나🍌', 
    //    '옥수수🌽' : '/p2?item=옥수수🌽', 
    //}

    const goUrl = (item) => {
        let url = `/p2?item=${item}`;
        navigate(url);

        //navigate(url[item]);
       // if (item === '사과🍎') navigate('/p2?item=사과🍎'); 이세줄줄여서 위에 한줄 기능으로가능
       // else if (item === '바나나🍌') navigate('/p2?item=바나나🍌');
       // else if (item === '옥수수🌽') navigate('/p2?item=옥수수🌽');
    }

    return (
        <>
            <h1>HOME</h1>

            <h2>파라미터 전송</h2>
            <ul>
                <li><Link to='/p1/사과🍎'>사과🍎</Link></li>
                <li><Link to='/p1/바나나🍌'>바나나🍌</Link></li>
                <li><Link to='/p1/옥수수🌽'>옥수수🌽</Link></li>
            </ul>

            <h2>파라미터 전송2</h2>
            <button onClick={()=> goUrl('사과🍎')}>사과🍎</button>
            <button onClick={()=> goUrl('바나나🍌')}>바나나🍌</button>
            <button onClick={()=> goUrl('옥수수🌽')}>옥수수🌽</button>
        </>
    );

}
export default RouteHome;