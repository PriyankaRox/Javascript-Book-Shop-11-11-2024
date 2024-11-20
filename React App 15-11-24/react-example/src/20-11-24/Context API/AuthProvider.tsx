import { Component } from "react";
import AuthContext, { User } from "./AuthContext";

interface AuthProviderState {
    user: User | null;
  }
  
  class AuthProvider extends Component<{children:any}, AuthProviderState> {
    state: AuthProviderState = {
      user: null, // No user logged in initially
    };
  
    // Method to log in a user
    login = (user: User) => {
      this.setState({ user });
    };
  
    // Method to log out a user
    logout = () => {
      this.setState({ user: null });
    };
  
    render() {
      return (
        <AuthContext.Provider
          value={{
            user: this.state.user,
            login: this.login,
            logout: this.logout,
          }}
        >
          {this.props.children}
        </AuthContext.Provider>
      );
    }
  }
  
  export { AuthProvider };
  