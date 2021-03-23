import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';
import SongFeature from './features/Song';

function App() {
  const name = 'Hòa';
  const age = 22;
  const isFemale = false;
  const student = {
    name : 'Easy Frontend'
  };
  const colorList = ['red', 'green', 'blue'];


  return (
    //dùng toán tử 3 ngôi khi đoạn JSX ngắn còn cách cuối khi JSX nhiều hơn
    // error <p>{student}</p>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Nguyen Van Hoa</p>
        <p>Xin chào {name} - {age} - {isFemale ? 'Nữ' : 'Nam'}</p>
        {isFemale ? <p>Nữ</p> : <p>Nam</p>}

        {isFemale && <p>Nữ</p>}
        {!isFemale && <p>Nam</p>}

        <p>{student.name}</p>

        <ul>
          {colorList.map(color => (
            <li key = {color} style = {{color}}>{color}</li>
          ))}
        </ul>
      </header> */}
      {/* <TodoFeature/> */}
      <SongFeature/>
      
    </div>
  );
}
export default App;
