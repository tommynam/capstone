import React from 'react'

const EnglishScores = ({testName}) => {
    return (
        <div>
            <label>{testName}</label>
                <input name={testName} type="text"/>
            <label>Writing</label>
                <input name="writing" type="text"/>
            <lable>Reading</lable>
                <input name="reading" type="text"/>
            <label>Listening</label>
                <input name="listening" type="text"/>
            <label>Speaking</label>
                <input name="speaking" type="text"/>
        </div>
    )
}

export default EnglishScores;
