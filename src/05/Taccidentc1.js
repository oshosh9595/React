const Taccidentc1 = ({c1, selC1, setSelC1}) => {

    //대분류가 클릭되었을떄
    const handleSelect = (item) => {
        setSelC1(item);
    };
    
    
    //대분휴 화면 표시 태그
    const c1Tag = c1.map((item) =>
        <div className={item === selC1 ? "Tc1sel" : "Tc1p"} 
            key={item}
            onClick = {() => handleSelect(item)}>
            {item}
        </div>
    );

    return( 
        <div className="Tc1">
            <h2>대분류</h2>   
            {c1Tag}
        </div>
    );
};

export default Taccidentc1;