import React from 'react';

const ValidationComponent = (props) => {

    let validation = <p>Text long enough</p>;

    if (props.wordLength < 5) {
        validation = <p>Text too short</p>
    }

    return (
        <div>
            {validation}
        </div>
    )
}

export default ValidationComponent