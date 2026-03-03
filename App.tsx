import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Public Pages
import HomePage from './pages/HomePage';
import ArticleView from './pages/ArticleView';

// Admin Pages
import AdminLayout from './components/admin/AdminLayout';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import ArticleEditor from './components/admin/ArticleEditor';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Container global de toasts / notificações */}
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'dark:bg-gray-800 dark:text-white',
          style: {
            borderRadius: '10px',
            background: '#ffffff',
            color: '#333',
          }
        }}
      />

      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/artigo/:id" element={<ArticleView />} />

        {/* Rotas Administrativas */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="artigo/:id" element={<ArticleEditor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
