import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './UserList';
import NotFound from './NotFound';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
