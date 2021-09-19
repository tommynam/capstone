import React from 'react'
import { StudentRegistration } from './student';
import { SchoolRegistration } from './school';

const Registration = () => {

   // const isStudent = this.state.isStudent;
    const isStudent = true;

    return (
        <div>
          <h1>Hello</h1>
            <div>
                {isStudent
                    ? <StudentRegistration />
                    : <SchoolRegistration />
                }
          </div>
        </div>
    )
}

export default Registration;
