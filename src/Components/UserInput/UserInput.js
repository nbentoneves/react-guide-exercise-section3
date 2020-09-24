import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <input onChange={props.userChangeHandler} value={props.user}/>
        </div>
    )
}

export default UserInput;