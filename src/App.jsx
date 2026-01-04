import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import './App.css';
import Willcome from './Pages/Willcome';
import BrekFast from './Components/BrekFast';
import LunchAndDinner from './Components/LunchAndDinner';
import Drinks from './Components/Drinks';
import MenusPage from './Pages/MenusPage';
import AdminPenal from './Admin/AdminPenal';
import SignUp from './Pages/SignUp';
import ProtectedRoute from'./Admin/ProtectedRoute';

export const ItemsContext = createContext();

function App() {
  const login = { userName: 'afghan', password: '123' };
  
 
  const [isAuth, setIsAuth] = useState(false);

  return (
    <ItemsContext.Provider value={{ login, isAuth, setIsAuth }}>
      <Routes>
        <Route path='/' element={<Willcome />} />
        <Route path='/menus' element={<MenusPage />} />
        <Route path='/breakfast' element={<BrekFast />} />
        <Route path='/lunch' element={<LunchAndDinner />} />
        <Route path='/drinks' element={<Drinks />} />
        <Route path='/login' element={<SignUp />} />
        <Route path='/admin' element={  <ProtectedRoute isAuth={isAuth}> <AdminPenal /> </ProtectedRoute>
          } 
        />
      </Routes>
    </ItemsContext.Provider>
  );
}

export default App;
