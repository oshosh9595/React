import logo from './logo.svg';
import './App.css';

const App = () => {
  console.log('App.js');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); //return 필수 jax 가 안에 내용이있어야한다 return (); 이게 리엑트문법 
     //(태그는하나만들어간다. 하지만 자식노드는 상관없다) 부모 div 칸에 빈칸으로 <> </>이렇게만들면 깨끗하게나온다
}//전체적인만드는 느낌

export default App; //필수로해야하는것 외부