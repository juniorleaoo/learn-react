import { Route, Routes } from 'react-router';
import './App.css';
import Layout from './components/Layout';
import UserCreate from './components/User/UserCreate';
import UserList from './components/User/UserList';
import UserEdit from './components/User/UserEdit';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="users" element={<UserList />} />
          <Route path="users/create" element={<UserCreate />} />
          <Route path={"users/edit/:id"} element={<UserEdit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
