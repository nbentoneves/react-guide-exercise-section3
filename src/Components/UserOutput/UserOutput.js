import React from 'react';

const UserOutput = (props) => {

    const styles = {
        width: "60%",
        margin: "16px auto",
        border: "1px solid #eee",
        boxShadow: "0 2px 3px #ccc",
        padding: "16px",
        textAlign: "center"
    }

    return (
        <div style={styles}>
            <p>My username is: {props.user}</p>
        </div>
    )
}

export default UserOutput;