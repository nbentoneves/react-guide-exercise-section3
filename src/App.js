import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";

function App() {

    const [user, setUser] = useState("defaultUser");

    const userChangeHandler = (event) => {
        setUser(event.target.value)
    }

    return (
        <div className="App">
            <UserInput userChangeHandler={userChangeHandler} user={user}/>
            <UserOutput user={user}/>
            <UserOutput user={user}/>
            <UserOutput user={user}/>
        </div>
    );
}

export default App;
