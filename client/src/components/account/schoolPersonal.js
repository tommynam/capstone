import React from 'react';

const SchoolPersonal = () => {
    return (
        <div>
            <h1>Personal Info</h1>
            <label>Username</label>
                <input name="username" type="text" />
                <br/>
            <label>Title</label>
                <select name="prefix">
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="ms">Ms.</option>
                </select>
                <br/>
            <label>Last Name</label>
                <input name="last" type="text"/>
            <label>First Name</label>
                <input name="first" type="text"/>
                <br/>
            <label>Official Email</label>
                <input name="email" type="text"/>
            <label>Date of Birth</label>
                <input name="dob" type="text" />
                <br/>
            <label>Postion/Role in Institution</label>  
                <input name="role" type="text"/>
                <br/>
            <label>Department</label>
                <input name="department" type="text"/>
        </div>
    )
};

export default SchoolPersonal;
