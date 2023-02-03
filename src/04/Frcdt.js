
const Frcdt = ({frcdt, setDt}) => {
    
    let dtdiv1Tag = [...frcdt]; //... 이거 배열안에있는전체뿌린다는 소리

    const show = (v) => {
        console.log("show", v)
        setDt(v);
    };

    dtdiv1Tag = dtdiv1Tag.map((v) =>
        <div className="dtdiv1" key={v} onClick={() => show(v)}>{v}</div>
    );

    //console.log("frcdt", dtdiv1Tag);
    return(
        <div className="mainbox1">
            {dtdiv1Tag}
        </div>
    );
}

export default Frcdt;