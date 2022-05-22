import './App.css';
import { Header } from './components/Header';
import { InitialState } from './pages/initialState';
import { MainScreen } from './pages/mainScreen';
import {
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import { UserNotFound } from './pages/userNotFound';
import { useEffect, useState } from 'react';




function App() {

  const userReqStr = 'https://api.github.com/users/'
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState('')
  const [username,setUsername] = useState('')

  // function getUserInfoByUsername(username) {
  //   if (!username)
  //   console.log('ds')
  //   // navigate('/', { replace: true })
  //   else {
  //     console.log('will send request:', userReqStr + username)
  //     fetch(userReqStr + username)
  //       .catch(error => {
  //         console.log('it seems that there is no such user like', username)
  //         setUserInfo('')
  //       })
  //       .then(function (response) {
  //         if (response.ok) {
  //           response.json().then(function (json) {
  //             setUserInfo(json);
  //             console.log('success')
  //             navigate('/?login='+json.login, { replace: true })
  //             return json
  //             // initialize();
  //           });
  //         } else {
  //           console.log('Network request for https://api.github.com/users/ failed with response ' + response.status + ': ' + response.statusText);
  //           navigate('/user_not_found', { replace: true })

  //         }
  //       });
  //   }
  // }



  return (
    <div className="App">
      <Header username={username} setUsername={setUsername} />
      <br />
      <br />
      <br />
      <Routes>
        {/* <Route path="/initialState"  element={<InitialState />} /> */}
        <Route path="/" element={<MainScreen username={username} setUsername={setUsername} />} />
        <Route path="/user_not_found" element={<UserNotFound />} />
        <Route path="/initialState" element={<InitialState />} />
        <Route
          path="*"
          element={
            <main style={{ marginTop: "100px", padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
