// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {

  const handleClick = () => {
    console.log("clickle")
  }

  return (
    <div className="App">
      <Button onClick = {handleClick}></Button>
    </div>
  );

}

export default App;
