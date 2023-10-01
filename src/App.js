// import logo from './logo.svg';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
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

const firebaseConfig = {
  apiKey: "AIzaSyAkQeokcnpcyhqzUX3_--AOeOCsaZ2fPe0",
  authDomain: "jaba-fbac4.firebaseapp.com",
  databaseURL: "https://jaba-fbac4-default-rtdb.firebaseio.com",
  projectId: "jaba-fbac4",
  storageBucket: "jaba-fbac4.appspot.com",
  messagingSenderId: "155994837451",
  appId: "1:155994837451:web:129ea10c78fc5c5867664e",
  measurementId: "G-Q8RHXL45G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default App;
