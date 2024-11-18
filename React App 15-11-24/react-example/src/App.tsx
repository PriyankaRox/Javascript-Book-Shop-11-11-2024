import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Employee from "./employee_data/Employee";
import Users from "./user_details/Users";
import Todo from "./todo_15-11-2024/Todo";
import Use_Memo from "./18-11-24/Use_Memo";
import Customer from "./18-11-24/Customer";
import UseLayoutEffect from "./18-11-24/UseLayoutEffect";

function App() {
  const items = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "cherry" },
  ];
  return (
    <Router>
      <div className="App">
        <header className="App-header">React App Demo</header>
        <Sidebar>
          <Menu className="sidebar">
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
