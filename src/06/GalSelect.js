import data from '../db/data.json'
import Galt2 from './Galt2'
import { useRef, useState, useEffect } from 'react'
import "./Gal.css"

const GalSelect = ( {selData} ) => {
    //데이터 가져오기
    const items = data.response.body.items.item;
    
    const c1 = items.map((obj) => obj['galTitle']);
    
    //랜더링 제어변수
    const [selItem, setSelItem] = useState({}); // retrun 쪽에 objet쪽 && 사용할떄
    //const [selItem, setSelItem] = useState({}); // retrun 쪽에 objet 가 아닐떄 사용

    // let optionTag = 
    //     <option key={c1[0]} value={c1[0]}>{c1[0]}</option>
    //     <option key={c1[1]} value={c1[1]}>{c1[1]}</option>
    //     <option key={c1[2]} value={c1[2]}>{c1[2]}</option>
    // ;

    let optionTag = c1.map((item) => 
        <option key={item} value={item}>{item}</option>
    );
    //select box 제어
    const selR = useRef();

    //컴포넌트가 처음 랜더링이 일어났을때
    useEffect(() => {
        selR.current.focus();
        console.log(selR.current);
    }, []);
    
    const handleSel = (e) => {
        e.preventDefault(); //처음거 눌렀을떄 나오게하는거
        if(selR.current.value === "") return;
        console.log("onChange", selR.current.value);
        let temp = items.filter((item) => item.galTitle === selR.current.value);
        console.log("onChangeTemp", temp)
        setSelItem(temp[0])
    }

console.log(items);

return (
    <div>
        <div className='GalSelect'>
            <form>
                <select ref={selR} name='sel1' onChange={handleSel}>
                    <option value="">항목을선택 하시라우</option>
                    {optionTag}
                </select>
            </form>

            {/*selItem && <Galt2 selData={selItem} />*/}
            {Object.keys(selItem).length > 0 && <Galt2 selData={selItem} />}
        </div>
    </div>
    );
}

export default GalSelect;