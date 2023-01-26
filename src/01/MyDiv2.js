
const MyDiv2 = () => {
  const myName = '오세훈';
  const myGit  = 'https://github.com/oshosh9595';
  console.log(myName);
  return (
    <div>
      <p>이름 : {myName}</p>
      <p>GiHub : <a href="https://github.com/oshosh9595">'https://github.com/oshosh9595'</a></p>
    </div>
  );
}

export default MyDiv2;
