import React from 'react'

export const StudentRegistration = () => {
    return (
        <div>
            <h1>student</h1>
            <form>
                <label>Full Name</label>
                    <input name="fullName" type="text"/>
                  <br/>
                <label>Country of Origin</label>
                    <select name="countryOrigin">
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
                <label>Your Education Level</label>
                    <select name="educationLevel">
                        <option value="noHS">No High School or Secondary Diploma</option>
                        <option value="HS">High School or Equivalent Qualifications</option>
                        <option value="UG">Undergraduate</option>
                        <option value="G">Graduate</option>
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
                <label>Do You Wish to Immigrate?</label>
                    <select name="immigrate">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
            </form>
        </div>
    )
}
