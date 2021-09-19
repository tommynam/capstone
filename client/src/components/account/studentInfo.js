import React from 'react'

export const StudentInfo = () => {
    return (
        <div>
            <h1>Personal Information</h1>
                <label>Username</label>
                <input name="username" type="text" />
                    <br/>
            <label>Last Name</label>
                <input name="last" type="text" />
            <label>First Name</label>   
                <input name="first" type="text" />
                <br/>
            <label>Email Address</label>
                <input name="email" type="text"/>
                <br/>
            <label>Gender</label>
                <select name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="nonbinary">Non-Binary</option>
                    <br/>
                </select>
            <label>Date of Birth (DD-MM-YYYY)</label>
                <input type="text" name="dob" />
                <br/>
            <label>Home Country</label>
                <select name="homeCountry">
                    <option value="usa">United States of America</option>
                    <option value="hk">Hong Kong</option>
                    <option value="uk">United Kingdom</option>
                    <option value="aus">Australia</option>
                </select>
                    <br/>
            <label>Destination Country</label>
                <select name="countryDestination">
                    <option value="usa">United States of America</option>
                    <option value="hk">Hong Kong</option>
                    <option value="uk">United Kingdom</option>
                    <option value="aus">Australia</option>
                </select>
                    <br/>
            <label>Are you planning to work in destination country?</label> 
                <select name="work">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                    <br/>
            <label>Are you planning to immigrate to your destination country?</label> 
                <select name="immigrate">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <br/>
            <label>Target Education Level</label>
                <select name="targetEducationLevel">
                        <option value="noHS">No High School or Secondary Diploma</option>
                        <option value="HS">High School or Equivalent Qualifications</option>
                        <option value="UG">Undergraduate</option>
                        <option value="G">Graduate</option>
                </select>
                <br/>
            <label>Target Discipline</label>
                <select name="targetDiscipline">
                        <option value="psych">Psychology</option>
                        <option value="math">Mathematics</option>
                        <option value="med">Biology & Health Sciences</option>
                        <option value="english">English Literature</option>
                </select>
                <br/>

        </div>
    )
}
