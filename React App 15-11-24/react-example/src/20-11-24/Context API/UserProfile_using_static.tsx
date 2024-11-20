import React, { Component } from "react";
import AuthContext from "./AuthContext";

class UserProfile extends Component {
  // Consume the context using static contextType
  static contextType = AuthContext;
  
  // This line need to be added in latest version of TypeScript 
  context!: React.ContextType<typeof AuthContext>;	 

  render() {
    const { user, login, logout } = this.context;

    return (
      <div style={{ padding: "20px", border: "1px solid #ccc" }}>
        {user ? (
          <div>
            <h2>Welcome, {user.name}!</h2>
            <button onClick={logout}>Log Out</button>
          </div>
        ) : (
          <div>
            <h2>You are not logged in.</h2>
            <button
              onClick={() =>
                login({ id: 1, name: "John Doe" }) // Simulating a login
              }
            >
              Log In
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default UserProfile;
