import React, { useEffect, Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Employee from "./employee_data/Employee";
import Users from "./user_details/Users";
import Todo from "./todo_15-11-2024/Todo";
import Use_Memo from "./18-11-24/Use_Memo";
import Customer from "./18-11-24/Customer";
import UseLayoutEffect from "./18-11-24/UseLayoutEffect";
import UserList from "./HOC/UserList";
import Childs from "./19-11-2024/Childs";
import { contextObjs, UserInfo } from "./19-11-2024/context";
import DemoHoc from "./19-11-2024/DemoHoc";
import DemoHocGrid from "./19-11-2024/DemoHocGrid";
import useStorage from "./19-11-2024/useStorage";
import AuthProviderFunction from "./20-11-24/Assignment/AuthProviderFunction";
import UserProfileFunction from "./20-11-24/Assignment/UserProfileFunction";
import TodoApp from "./20-11-24/TodoApp";
import BankApp from "./20-11-24/Assignment/BankApp";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactQuery from "./20-11-24/Assignment/ReactQuery";
// import Child from "./UseContext/Child";

// Create a QueryClient instance
const queryClient = new QueryClient();

const AppQuery: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQuery />
    </QueryClientProvider>
  );
};

export interface User {
  id: number;
  name: string;
  email: string;
}

//1. Context Creation for functional
export const contextObj = React.createContext<User | null>(null);

class MyContextApi extends Component {
  userObj: UserInfo = {
    id: 1,
    name: "Max Tow",
    email: "max@gmail.com",
  };
  render() {
    return (
      <div style={{ margin: "10px", border: "2px solid red" }}>
        <h3>This is App Class Component</h3>
        <hr />
        {/* Context provider */}
        <contextObjs.Provider value={this.userObj}>
          <Childs />
        </contextObjs.Provider>
      </div>
    );
  }
}

interface UserHoc {
  id: number;
  name: string;
  email: string;
  address: string;
  company: string;
}

const HocData = DemoHoc<UserHoc>(DemoHocGrid);

const App: React.FC = () => {
  const items = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "cherry" },
  ];

  // const [userObj, setUserObj] = useState<User>({
  //   id: 1,
  //   name: "Scott",
  //   email: "scott@gmail.com",
  // });

  //localstorage
  const { add, remove, get } = useStorage<string>("userName");

  useEffect(() => {
    // Set a value to localStorage when the component mounts
    add("MAX");
  }, [add]);

  const handleRemove = () => {
    remove();
  };

  return (
    <AuthProviderFunction>
      <Router>
        <div className="App">
          <header className="App-header">React App Demo</header>

          <Sidebar>
            <Menu className="sidebar">
              <MenuItem>
                <Link to="/auth">Authentication</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/bank">Banking App</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/query">React Query</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/employee">Employee</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/user">User</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/todo">Todo</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/useMemo">Use Memo</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/customer">Customer</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/callBack">UseLayoutEffect</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/hoc">HOC</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/useContext">Context API</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/gridHoc">Grid HOC Demo</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/storage">Local Storage</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/todoApp">Todo</Link>
              </MenuItem>
            </Menu>
          </Sidebar>

          <div className="content">
            <Routes>
              <Route path="/employee" element={<Employee />} />
              <Route path="/user" element={<Users />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/useMemo" element={<Use_Memo items={items} />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/callBack" element={<UseLayoutEffect />} />
              <Route
                path="/hoc"
                element={
                  <UserList url="https://jsonplaceholder.typicode.com/users" />
                }
              />
              <Route path="/useContext" element={<MyContextApi />} />
              <Route path="/todoApp" element={<TodoApp />} />
              <Route
                path="/gridHoc"
                element={
                  <HocData
                    url="https://jsonplaceholder.typicode.com/users"
                    dataProperties={["id", "name", "email"]}
                  />
                }
              />

              {/* useReducer function */}
              <Route path="/auth" element={<UserProfileFunction />} />

              <Route path="/bank" element={<BankApp />} />

              <Route path="/query" element={<AppQuery />} />

              {/* <Route path="storage" element={<useStorage/>} /> */}

              {/* functional Component context example */}
              {/* <Route
              path="/useContext"
              element={
                <contextObj.Provider value={userObj}>
                  <Child />
                </contextObj.Provider>
              }
            /> */}
            </Routes>
            {/* <div>
            <h1>localStorage Example</h1>
            <p>Stored value: {get()}</p>
            <button onClick={handleRemove}>Remove from Local Storage</button>
          </div> */}
          </div>
          {/* <div style={{ margin: "10px", border: "2px solid red" }}>
        <h3>This is App Component</h3>
        <hr /> */}
          {/* 2. Context Provider  */}
          {/* <contexObj.Provider value={userObj}>
          <Child />
        </contexObj.Provider> */}
          {/* </div> */}
        </div>
      </Router>
    </AuthProviderFunction>
  );
};

export default App;
