// import './App.css';
import './styles/scss_styles.css';
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
  const [username, setUsername] = useState('')
  const [isloading, setLoading] = useState(true)
  
  return (
    <div className="App">
      <Header username={username} setLoading={setLoading} setUsername={setUsername} />
          <Routes>
            <Route path="/" element={<MainScreen isloading={isloading} setLoading={setLoading} username={username} setUsername={setUsername} />} />
            <Route path="/user_not_found" element={<UserNotFound setLoading={setLoading} />} />
            <Route path="/initialState" element={<InitialState setLoading={setLoading} />} />
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
