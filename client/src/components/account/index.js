import React from 'react'
import { StudentAccount } from './student';
import { SchoolAccount } from './school';

const Account = () => {

   // const isStudent = this.state.isStudent;
    const isStudent = true;

    return (
        <div>
          <h1>account page</h1>
            <div>
                {isStudent
                    ? <StudentAccount />
                    : <SchoolAccount />
                }
          </div>
        </div>
    )
}

export default Account;