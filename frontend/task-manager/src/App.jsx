import React from "react";
import{ BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/ Login";
import SignUp from "./pages/Auth/SignUp";
import ManageTasks from "./pages/Admin/ManageTasks";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUsers from "./pages/Admin/ManageUsers";
import UserDashboard from "./pages/User/UserDashboard";
import MyTasks from "./pages/User/MyTasks";
import ViewTaskDetails from "./pages/User/ViewTaskDetails";
import PrivateRoute from "./routes/PrivateRoute";



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/logIn" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          {/*Admin Routers */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />}/>
            <Route path="/admin/task" element={<ManageTasks/>} />
            <Route path="/admin/create-task" element={<CreateTask />}/>
            <Route path="/admin/users" element={<ManageUsers />}/>
          </Route>

          {/*User Routers */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />}/>
            <Route path="/user/my-tasks" element={<MyTasks />}/>
            <Route path="/user/tasks-details/:id" element={<ViewTaskDetails />}/>
          </Route>        
        </Routes>
      </Router>

    </div>
  );
};
export default App;
