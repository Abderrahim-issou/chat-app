import './App.css'
import Chat, { User } from './components/chat/Chat';
import ChatIpnut from './components/chat/ChatIpnut';
import ChatList, { ChatItem } from './components/chat/ChatList';
import DropDowns from './components/chat/DropDowns';
import ProfileTopSec from './components/chat/ProfileTopSec';
import MessageBuble from './components/UI/MessageBuble';
// import Nav from './components/nav/nav';
import Auth from './pages/Auth';
import Layout from './layouts/Layout';
import Error from './pages/Error';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';
import { store } from './store';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/routes/ProtectedRoute';
// import MessageBuble from './components/UI/MessageBuble';

function App() {

  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
        {/* Home Route */}
        <Route path='/' element={<h1>Home Page</h1>}/>
        {/* auth pages */}
        <Route path='/auth' element={<Auth/>}/>
        
        {/* chat route */}
        <Route path='/chat' element={<ProtectedRoute/>}>
          <Route path='/chat' element={<Auth/>}/>
        </Route>

        {/* error */}
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>

    </>
  )
}

export default App
