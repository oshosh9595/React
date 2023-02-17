import Galm from "./Galm";
import "./Gal.css"
import data from "../db/data.json"
//한국관광공사_관광사진 정보_GW
// https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=서비스키&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%eb%b6%80%ec%82%b0+%ec%b6%95%ec%a0%9c&_type=json
// galContentId	string  콘텐츠 아이디
// galContentTypeId	string 콘텐츠 타입 아이디
// galTitle	string 제목
// galWebImageUrl	string 웹용 이미지 경로
// galCreatedtime	string 등록일
// galModifiedtime	string 수정일
// galPhotographyMonth	string 촬영월
// galPhotographyLocation	string 촬영장소
// galPhotographer	string 촬영자
// galSearchKeyword	string 검색 키워드

const Gal = () => {
  console.log("data:",data);

  //main1,2 table 선언 데이터값 선언, 데이터순회
  let Gt1, Gdata;
  
  //데이터 배열의 항목 []
  Gdata = data.response.body.items.item;
  // console.log("Gdata", Gdata);
  
  //데이터 분류 타이틀이름
  Gt1 = Gdata.map((item) => 
        item["galTitle"]
  );
  Gt1 = [...new Set(Gt1)]

  // console.log("Gt1", Gt1);

  return (
    <>
      <Galm Gt1 = {Gt1} Gdata={Gdata}/>
    </>
  );
}

export default Gal;