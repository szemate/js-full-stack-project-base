import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersPage from './users/UsersPage';
import NotFoundPage from './errors/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
