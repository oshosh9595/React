const Galt1 = ({Gt1, setSelG1}) => {

    const handleSelect = (item) => {
        setSelG1(item);
    };
    
    
    let v = 0;
    const g1Tag = Gt1.map((item) =>
        <div className="Galt1"
            key={item}
            onClick = {() => handleSelect(item)}>
            {item}
        </div>
    );

    return(
        <div className="Gatt">
            {g1Tag}
        </div>

    );
};

export default Galt1;