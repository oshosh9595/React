import { useState, useEffect } from "react";
import BoxofficeDetail from "./BoxofficeDetail";

const BoxofficeList = ({tDt}) => {
    const [mvlist, setMvlist] = useState();
    const [mvcd, setCd] = useState();

    //영화클릭
    const showDetail = (cd) => {
        console.log(cd)
        setCd(cd);
    }

    //맨처음 랜더링시
    useEffect(() =>{
        console.log(tDt)
        if (!tDt) return ;
        const apikey = 'f5eef3421c602c6cb7ea224104795888' ;
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
        url = url + `key=${apikey}&`;
        url = url + `targetDt=${tDt}` ;

        console.log(url)
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                
                let temp = data.boxOfficeResult.dailyBoxOfficeList ;
                console.log("temp", temp)
                
                setMvlist(temp.map((item) =>  
                    <div className="mvrow" key={item.movieCd} onClick={() => showDetail(item.movieCd)}>
                        <span className="mvcol1"><span className="mvrank">{item.rank}</span></span> 
                        <span className="mvcol2">{item.movieNm}</span> 
                        <span className="mvcol3">{parseInt(item.audiCnt).toLocaleString('kr-ko')}</span> 
                    </div>
                )); 
            }) 
            .catch((err) => console.log(err))
        }, [tDt]);


    useEffect(() =>{
        console.log(mvlist)
    }, [mvlist] );



    return (
        <div className="mvcontent">
            <div className="mvlist">
                <div className="mvrow0">
                    <span className="mvcol1">순위</span>
                    <span className="mvcol2">영화명</span>
                    <span className="mvcol3">관객수</span> 
                </div> 
                {mvlist}    
            </div>
            <div className="mvdetail">
                 {mvcd && <BoxofficeDetail mvcd={mvcd}/>}
            </div>
        </div>
    );
}

export default BoxofficeList;

// import { useState, useEffect } from "react";
// import BoxofficeDetail from "./BoxofficeDetail";
// const BoxofficeList = ({ tDt }) => {
//     //console.log("box list", tDt);
//     //fetch 작업으로 넘겨받고 보여주기

//     const [mvlist, setMvlist] = useState();
//     const [mvcd, setMvcd] = useState();

//     //영화클릭

//     const showDetail = (cd) => {
//         console.log(cd);
//         setMvcd(cd);
//     }

//     //맨처음 랜더링시
//     useEffect(() => {
//         //if(!tDt) return; 메인에서 안맞으면멈추게해놯음
//         const apikey = 'f5eef3421c602c6cb7ea224104795888';
//         //let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${tDt}`;
//         let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${tDt}`;
//         //url = url + `key=${apikey}`;
//         //url = url + `targetDt=${tDt}`;

//         console.log(url)
//         fetch(url)
//             .then((resp) => resp.json())
//             .then((data) => {
//                 //console.log(data.boxOfficeResult.dailyBoxOfficeList)
//                 let temp = data.boxOfficeResult.dailyBoxOfficeList;
//                 temp = temp.map((i) =>  //temp로 저장을 한번더 하면서 불러줘야한다 retrun() 을 안쓰면 {} 를 빼야한다.
//                     <div className="data1" key={i.movieCd} onClick={() => showDetail(i.movieCd)}>
//                         <span className="d1">{i.rank}</span>
//                         <span className="d2">{i.movieNm}</span>
//                         <span className="d3">{parseInt(i.audiCnt).toLocaleString('ko-kr')}</span>
//                     </div>
//                 )
//                 setMvlist(temp);
//                 //console.log("temp", temp);
//             })
//             .catch((err) => console.log(err))
//     }, [tDt])

//     return (
//         <div>
//             {/* <div>
//                 {tDt && mvlist}
//             </div> */}
//             <div className="data">
//                 <div className="data2">
//                     <span className="d4">순위</span>
//                     <span className="d5">영화명</span>
//                     <span className="d6">관객수</span>
//                 </div>
//                 {mvlist}
//             </div>
//             <div className="mvdetail">
//                 {mvcd && <BoxofficeDetail />}
//             </div>
//         </div>
//     );
// }
// export default BoxofficeList;