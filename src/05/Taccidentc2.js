const Taccidentc2 = ({selC2A, selC2, setSelC2}) => {

    //대분류가 클릭되었을떄
    const handleSelect = (item) => {
        console.log(item);
        setSelC2(item[1])
    };

    //대분휴 화면 표시 태그
    const c2Tag = selC2A.map((item) =>
        <div className={item[1] === selC2 ? "Tc2sel" : "Tc2p"}
            key = {[...item]}
            onClick = {() => handleSelect(item)}>
            {item[1]}
        </div>
    );

    return(
        <div className="Tc2">
            <h2>중분류</h2>
            {c2Tag}
        </div>
    );
};

export default Taccidentc2;