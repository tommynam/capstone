import React from 'react'
import { StudentAcademics } from './studentAcademics';
import { StudentInfo } from './studentInfo';

export const StudentAccount = () => {
    return (
        <div>
            <StudentInfo />
            <StudentAcademics />
            <h1>English Language Proficiency</h1>

        </div>
    )
}
