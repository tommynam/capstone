import React from 'react'

export const SchoolRegistration = () => {
    return (
        <div>
        <h1>school</h1>
        <form>
            <label>Full Name</label>
                <input name="fullName" type="text"/>
              <br/>
            <label>Position/Role in Institution</label>
                <input name="position" type="text"/>
                <br/>
            <label>Name of Institution</label>
                <input name="schoolName" type="text"/>
                <br/>
            <label>Type of Institution</label>
                <select name="typeOfSchool">
                    <option value="cc">Community College</option>
                    <option value="ug">Bachelor's</option>
                    <option value="g">Master's</option>
                    <option value="sps">Other Post-Secondary Learning</option>
                </select>
                <br/>
            <label>Location</label>
                <select name="schoolLocation">
                    <option value="usa">United States of America</option>
                    <option value="hk">Hong Kong</option>
                    <option value="uk">United Kingdom</option>
                    <option value="aus">Australia</option>
                </select>
                <br/>
            <label>Province</label>
                <select name="schoolProvince">
                    <option value="1">province 1</option>
                    <option value="2">province 2</option>
                </select>
                <br/>
        </form>
    </div>
    )
}
