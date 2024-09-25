import logo from './logo.svg';
import './App.css';
import UserActivities from './components/UserActivities/UserActivities';
import UserProfile from './components/UserProfile/UserProfile';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
function App() {

  return (
    <div className="App">
      <SkeletonTheme baseColor="#e1e2e2" highlightColor="#bcbcbc">

        <UserProfile email={"sankalptop"} phone={1234567} address={"Hello world"} />
        <UserActivities />
      </SkeletonTheme>
    </div>
  );
}

export default App;
