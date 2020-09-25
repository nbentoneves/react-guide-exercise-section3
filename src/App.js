import React, {useState} from 'react';
import './App.css';
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";
import ValidationComponent from "./Components/ValidationComponent/ValidationComponent";
import CharComponent from "./Components/CharComponent/CharComponent";

function App() {

    const [user, setUser] = useState("defaultUser");
    const [word, setWord] = useState("");
    const [wordLength, setWordLength] = useState(word.length);

    const userChangeHandler = (event) => {
        setUser(event.target.value)
    }

    const charRemoveHandler = (event, index) => {
        const wordCopy = [...word]
        wordCopy.splice(index, 1)

        const newWord = wordCopy.join('')
        setWord(newWord)
        setWordLength(newWord.length)
    }

    const wordHandler = (event) => {
        const targetWord = event.target.value
        setWord(targetWord)
        setWordLength(targetWord.length)
    }

    const charComponent = word.split('').map((letter, index) => {
        return <CharComponent
            clicked={() => charRemoveHandler(index)}
            click={charRemoveHandler}
            index={index}
            letter={letter}/>
    })

    return (
        <div className="App">
            <div>
                <h3>Exercise Section 3</h3>
                <UserInput userChangeHandler={userChangeHandler} user={user}/>
                <UserOutput user={user}/>
                <UserOutput user={user}/>
                <UserOutput user={user}/>
            </div>

            <div>
                <h3>Exercise Section 4</h3>
                <input type="text" onChange={(event) => wordHandler(event)} value={word}/>

                <p>The length of `{word}` is {wordLength}</p>
                <ValidationComponent wordLength={wordLength}/>

                {charComponent}
            </div>
        </div>
    );
}

export default App;
