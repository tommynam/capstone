import { React, Component } from 'react';
import { GoogleLogin, GoogleLogout } from "react-google-login";

class Google extends Component {

    constructor() {
      super();
      this.state = {
        isLoggedIn: false,
        userInfo: {
          name: "",
          emailId: "",
        },
      };
    }
  
    //HANDLE SUCCESSFUL LOGIN
    responseGoogleSuccess = (response) => {
      console.log();
      let userInfo = {
        name: response.profileObj.name,
        emailId: response.profileObj.email,
      };
      this.setState({ userInfo, isLoggedIn: true });
    };
  
    //HANDLE ERRORS
    responseGoogleError = (response) => {
      console.log(response);
    };
  
    //LOGOUT AND MANAGE STATE OF USER LOGIN
    logout = (response) => {
      console.log(response);
      let userInfo = {
        name: "",
        emailId: "",
      };
      this.setState({ userInfo, isLoggedIn: false });
    };
  
    render() {
      return (
        <div className="row mt-5">
          <div className="col-md-12">
            {this.state.isLoggedIn ? (
              <div>
                <h1>Welcome, {this.state.userInfo.name}</h1>
  
                <GoogleLogout
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText={"Logout"}
                  onLogoutSuccess={this.logout}
                ></GoogleLogout>
              </div>
            ) : (
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Sign In with Google"
                onSuccess={this.responseGoogleSuccess}
                onFailure={this.responseGoogleError}
                isSignedIn={true}
                cookiePolicy={"single_host_origin"}
              />
            )}
          </div>
        </div>
      );
    }
  }
  export default Google;