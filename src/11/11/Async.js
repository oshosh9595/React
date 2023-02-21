const Async = () => {
    //fetch 함수
    const url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230214';
    fetch(url)
    .then((resp) => resp.json()) //fulfield 일때
    .then((data) => console.log(data)) //object로 넘어오게만듬
    .catch((err) => console.log(err)) 



    return (
        <>
        </>
    );
}

export default Async;