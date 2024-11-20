import React, { Component } from "react";
import AuthContext, { AuthContextState } from "./AuthContext";

class UserProfile extends Component { 
   
  render() {
     
    return (
      <div style={{ padding: "20px", border: "1px solid #ccc" }}>

         <AuthContext.Consumer>
            {
                (context:AuthContextState) => 
                (
                    context.user ? (
                        <div>
                          <h2>Welcome, {context.user.name}!</h2>
                          <button onClick={context.logout}>Log Out</button>
                        </div>
                      ) : (
                        <div>
                          <h2>You are not logged in.</h2>
                          <button
                            onClick={() =>
                              context.login({ id: 1, name: "John Doe" }) // Simulating a login
                            }
                          >
                            Log In
                          </button>
                        </div>
                      )
                )
            }
         </AuthContext.Consumer>
       
      </div>
    );
  }
}

export default UserProfile;
