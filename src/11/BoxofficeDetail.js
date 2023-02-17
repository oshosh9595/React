import { useEffect, useState } from "react";
const BoxofficeDetail = ({ mvcd }) => {
    console.log("boxcd", mvcd);

    const [mTag, setMTag] = useState();
    const getDate = async () => {
        let url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${mvcd}';
        url = url + 'movieCd=${mvcd}'

        try {
            const resp = await fetch(url);
            const data = await resp.json();

            //오브젝트
            let temp = data.moviInfoResult.movieInfo;
            let keys = {
                'movieNm': '영화명',
                'openDt': '개봉일',
                'prdtStatNm': '제작상태',
                'typeNm': '영화형태',
                'directors': '감독'
            }
            if (mvcd) {
                let t = [];
                for (let [k, v] of Object.entries(keys)) {
                    if (k === 'directors') {
                        tag.push(<div className="tag1`" key={k}>){
                                <span className="t1">{k}</span>
                                <span className="t2">{k}</span>
                                <span className="t3">{k}</span>
                                <span className="t4">{k}</span>
                                <span className="t5">{k}</span> 
                            </div>
                        }
                        //t = t + <li>{v} {temp[k][0].peopleNm}</li>
                    } else {
                        t = t + <li>{v} {temp[k]}</li>
                    }

                }
                setMTag(t);
            }

            //console.log(data); 
        }
        catch (err) {
            console.log(err);
        }
    }
    //await 를쓸려면 async 써야해서 Eff에서 안널고 getdate 로뺴서 따로만든다.
    useEffect(() => {
        console.log("mcd", mvcd)
        getDate();
    }, [mvcd]);

    return (
        <>
            {mvcd && mTag}
        </>
    );
}
export default BoxofficeDetail;