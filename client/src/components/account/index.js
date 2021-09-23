import React from 'react'
import { StudentAccount } from './student';
import { SchoolAccount } from './school';
import SideNav from 'components/sidenav';
import Banner from './banner';

const Account = () => {

  const styles = {
    display: "flex",
    margin: 0,
    padding: 0
  };

   // const isStudent = this.state.isStudent;
    const isStudent = false;

    return (
      <div style={styles}>
        <SideNav />
            <div>
            <Banner />
                {isStudent
                    ? <StudentAccount />
                    : <SchoolAccount />
                }
          </div>
      </div>
    )
}

export default Account;