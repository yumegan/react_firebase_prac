import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function App() {

  // list of resources and a function to edit the list
  const [resources, setResources] = useState([]);
  const resourceCollectionRef = collection(db, "resources");

  const handleClick = () => {

    const getResources = async () => {
      // console.log("click");
      const resourceData = await getDocs(resourceCollectionRef);
      // console.log(resourceData.docs)
      setResources(resourceData.docs.map((doc) => ({ ...doc.data()})))
      console.log(resources)
    }

    getResources();
    
  }

  return (
    <div className="App">
      <Button onClick = {handleClick}></Button>

      {
        <table>
              <tr>
                  <th>Category</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Zipcode</th>
              </tr>
              {resources.map((val, key) => {
                  return (
                      <tr key={key}>
                          <td>{val.Category}</td>
                          <td>{val.name}</td>
                          <td>{val.phone}</td>
                          <td>{val.zipCode}</td>
                      </tr>
                  )
              })}
          </table>
      }
        
      
    </div>
  );

}

export default App;
