import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';


function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  
  useEffect(() => {
   Axios.get("https://jsonplaceholder.typicode.com/users/").then((res) => {
   setListOfUsers(res.data);
   })
  }, [])
  
  const filteredUsers = listOfUsers.filter(user => {
    return user.name.toLowerCase().includes(searchWord.toLowerCase());
  })

  return (
    <div className="App">
     <div className='userHeader'>
      <input type='text' placeholder='Search...' onChange={(event) => setSearchWord(event.target.value)}/>
     </div>
     <div className='userDisplay'>
      {filteredUsers.map(user => {
        return (
          <div className='userInfo'>
            <h1>Name: {user.name}</h1>
            <h2>Username: {user.username}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Address: {user.address.city}</h2>
          </div>
        )
      })}
     </div>
    </div>
  );
}

export default App;
