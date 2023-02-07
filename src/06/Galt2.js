const Galt2 = ({selData}) => {

    // console.log(selData);

    let keys = ["galTitle", "galPhotographyLocation", "galPhotographer", "galPhotographyMonth", "galSearchKeyword"];
    let imgurl = selData.galWebImageUrl;
    let img = <img src={imgurl} className="img" alt="logo" />
    let dTag = keys.map((k) => 
        <li key = {k}>
            <span>{selData[k]}</span>
        </li>
        );

    return(
        <div className="Galt2">
            <h2>상세내용</h2>
            {imgurl && img}
            {dTag}
        </div>
    );
};

export default Galt2;