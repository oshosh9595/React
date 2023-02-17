const Galt2 = ({selData}) => {

    // console.log(selData);

    let imgurl = selData.galWebImageUrl;
    let img = <img src={imgurl} className="img"/>
    
    return(
        <div className="Galt2">
            <h2>상세내용</h2>
            {imgurl && img}
            <div>{selData.galTitle}</div>
            <div>
                {selData.galPhotographyMonth.substr(0,4)}.
                {selData.galPhotographyMonth.substr(2,2)}
            </div>
            <div>{selData.galPhotographer}</div>
            <div>{selData.galSearchKeyword}</div>
        </div>
    );
};

export default Galt2;