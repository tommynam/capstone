import React from 'react'
import { StudentAcademics } from './studentAcademics';
import { StudentInfo } from './studentInfo';
import { StudentEnglish } from './studentEnglish';

export const StudentAccount = () => {
    return (
        <div>
            <StudentInfo />
            <StudentAcademics />
            <StudentEnglish />
        </div>
    )
}
