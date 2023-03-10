import { Link, useNavigate, useParams } from 'react-router-dom';
const RouteHome = () => {

    const navigate = useNavigate();
    //const url = {
    //    'μ¬κ³Όπ' : '/p2?item=μ¬κ³Όπ', 
    //    'λ°λλπ' : '/p2?item=λ°λλπ', 
    //    'μ₯μμπ½' : '/p2?item=μ₯μμπ½', 
    //}

    const goUrl = (item) => {
        let url = `/p2?item=${item}`;
        navigate(url);

        //navigate(url[item]);
       // if (item === 'μ¬κ³Όπ') navigate('/p2?item=μ¬κ³Όπ'); μ΄μΈμ€μ€μ¬μ μμ νμ€ κΈ°λ₯μΌλ‘κ°λ₯
       // else if (item === 'λ°λλπ') navigate('/p2?item=λ°λλπ');
       // else if (item === 'μ₯μμπ½') navigate('/p2?item=μ₯μμπ½');
    }

    return (
        <>
            <h1>HOME</h1>

            <h2>νλΌλ―Έν° μ μ‘</h2>
            <ul>
                <li><Link to='/p1/μ¬κ³Όπ'>μ¬κ³Όπ</Link></li>
                <li><Link to='/p1/λ°λλπ'>λ°λλπ</Link></li>
                <li><Link to='/p1/μ₯μμπ½'>μ₯μμπ½</Link></li>
            </ul>

            <h2>νλΌλ―Έν° μ μ‘2</h2>
            <button onClick={()=> goUrl('μ¬κ³Όπ')}>μ¬κ³Όπ</button>
            <button onClick={()=> goUrl('λ°λλπ')}>λ°λλπ</button>
            <button onClick={()=> goUrl('μ₯μμπ½')}>μ₯μμπ½</button>
        </>
    );

}
export default RouteHome;