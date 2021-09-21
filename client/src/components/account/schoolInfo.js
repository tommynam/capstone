import React from 'react';

const SchoolInfo = () => {
    return (
        <div>
            <h1>Education Institution Profile</h1>
            <label>Name of Institution</label>
                <input name="schoolName" type="text"/>
                <br/>
            <label>Location of Institution</label>
            <br/>
            <label>Country</label>
                <input name="country" type="text"/>
            <label>Province</label>
                <input name="province" type="text"/>
                <br/>
            <label>City</label>
                <input name="city" type="text"/>
            <label>Postal/Zip Code</label>
                <input name="zip" type="text"/>
                <br/>
            <label>Address</label>
                <input name="address" type="text"/>
                <br/>
            <label>Official Website</label>
                <input name="site" type="text"/>
                <br/>
            <label>Type of Institution</label>
                <select name="type">
                    <option value="uni">University</option>
                    <option value="language">Language Learning Center</option>
                    <option value="trade">Trade School</option>
                    <option value="other">Other</option>
                </select>
                <br/>
            <label>Other(Type of Institution)</label>
                <input name="otherSchool" type="text"/>
                <br/>
        </div>
    )
};

export default SchoolInfo;
