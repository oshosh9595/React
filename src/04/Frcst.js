import Fcrcn from './Frccn';
import Frcdt from './Frcdt';
import Frcheader from './Frcheader';
import { useState, useEffect} from "react";
import './Frcst.css'

const Frcst = () => {
    /* 공공데이터포털 : 한국환경공단_에어코리아_대기오염정보
    frcstOneCn : 첫째날예보
    frcstTwoCn : 둘째날예보
    frcstThreeCn : 셋째날예보
    frcstFourCn : 넷째날예보

    frcstOneDt : 첫째날예보일시
    frcstTwoDt : 둘째날예보일시
    frcstThreeDt : 셋째날예보일시
    frcstFourDt : 넷째날예보일시
    */

    const items = [
        {
        "frcstFourDt":"2023-02-05",
        "frcstThreeDt":"2023-02-04",
        "frcstTwoCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "gwthcnd":"2월 4일~5일은 중서부지역을 중심으로 국외 미세먼지가 유입되는 가운데 대기 정체로 축적되어 4일 인천· 경기남부·충남, 5일 인천·경기남부·충북·충남에서 미세먼지 농도가 '높음'일 것으로 예상됩니다.",
        "frcstTwoDt":"2023-02-03",
        "frcstFourCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 높음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstThreeCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstOneDt":"2023-02-02",
        "frcstOneCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 높음",
        "presnatnDt":"2023-01-30"
        
        }
    ]

    


    //키값 리스트값 지정
    let frcdt = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    let frccn = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
    //map 은 for문처럼 반복을하는거라서 map을쓸대 배열안에있는 데이터를 하나하나순서대로 돌수있다.
    //예보일자별 배열 추출 
    frcdt = frcdt.map((k) => items[0][k]);
    frccn = frccn.map((k) => items[0][k]);
    //console.log("fcrdt", fcrdt);
    //console.log("fcrcn", fcrcn);

    //일자별 예보 오브젝트 생성
    let frcobj = {};
    for(let [idx, k] of frcdt.entries()) { //.entries : 모든 프로퍼티와 값을 배열로 반환함. 객체는 배열처럼 하나가아닌 여러 개의 값을 키, 밸류 형태로 가지고 있습니다. 한번에확인할려고씀
        //console.log("idx=", idx, 'value =', k, 'cnvalue=', fcrcn[idx])
        frcobj[k] = frccn[idx]; //오브젝트 생성후 만들기
    }

    //onsole.log("fcrobj :", fcrobj)
    let [cn, setCn] = useState(frcobj["2023-02-02"]);
    let [dt, setDt] = useState();

    //useEffect는 다른오브젝트를 ??
    useEffect(() => {
        //console.log("useEffect", frcobj[dt])
        frcobj[dt] && setCn(frcobj[dt]);
        //if(!dt){
            //setCn(frcobj[dt]);
        //}
    }, [dt]);  //cn 을찍으면 dt값이바껴라

    
    return (
        <>
            <p>{dt}</p>
            <Frcheader />
            <div className="Fmain">
                <Frcdt frcdt={frcdt} setDt={setDt}/>
                {frcdt && <Fcrcn frcdt={frcdt} frccn={cn} setCn/> }
            </div>
        </>
    ) ;
}
export default Frcst ;