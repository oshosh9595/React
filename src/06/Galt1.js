import { useEffect, useState, useRef } from "react";
const Galt1 = ({ Gt1, setSelG1 }) => {

    const txtR = useRef();
    useEffect(() => {
        txtR.current.focus();
    }, [])
    const [g1Tag, setG1Tag] = useState([]);
    const showC1 = () => {
        console.log(txtR.current.value);
        let temp = Gt1.filter((i) => i.includes(txtR.current.value));
        setSelG1('');
        setG1Tag(
            temp.map((item) =>
                <div className={item === setG1Tag ? 'Galt1' : 'Gatt'}
                    key={item}
                    onClick={() => handleSelect(item)}>
                    {item}
                </div>

            ));
    }

    const handleSelect = (item) => {
        setSelG1(item);
    };


    return (
        <div className="Gatt">
            <div className="conleftdiv">
                <form>
                    <input ref={txtR} type="text" name="txt1" onChange={showC1} />
                    <button type="reset">취소</button>
                </form>
            </div>
            <ul>
                {g1Tag}
            </ul>
        </div>

    );
};

export default Galt1;