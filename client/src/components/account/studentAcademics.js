import React from 'react'

export const StudentAcademics = () => {
    return (
        <div>
            <h1>Academic Records</h1>
            <label>Education Level</label>
                <select name="educationLevel">
                    <option value="noHS">No High School or Secondary Diploma</option>
                    <option value="HS">High School or Equivalent Qualifications</option>
                    <option value="UG">Undergraduate</option>
                    <option value="G">Graduate</option>
                </select>
                <br/>
            <label>Field of Study</label>
                <select name="targetDiscipline">
                        <option value="psych">Psychology</option>
                        <option value="math">Mathematics</option>
                        <option value="med">Biology & Health Sciences</option>
                        <option value="english">English Literature</option>
                </select>
                <br/>
            <label>Program Name</label>
                <input name="program" type="text"/>
                <br/>
            <label>School Name</label>
                <input name="schoolName" type="text"/>
                <br/>
            <label>Graduation Year</label>
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
