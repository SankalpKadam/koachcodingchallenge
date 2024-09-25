import logo from './logo.svg';
import './App.css';
import UserActivities from './components/UserPage/UserActivities/UserActivities';
import UserProfile from './components/UserPage/UserProfile/UserProfile';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import UserPage from './components/UserPage/UserPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListUsers from './components/ListUsers';
function App() {

  return (
    <div className="App">
      <SkeletonTheme baseColor="#e1e2e2" highlightColor="#bcbcbc">
        <BrowserRouter>
          {/* <UserProfile email={"sankalptop"} phone={1234567} address={"Hello world"} />
        <UserActivities /> */}
        <Routes path='/'>
            <Route index element={<ListUsers/>}/>
            <Route path='users/:id'/>
          {/* <UserPage /> */}
        </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </div>
  );
}

export default App;
