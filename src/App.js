import logo from './logo.svg';

import AddUser from './Components/Users/AddUser'
import UsersList from './Components/Users/UsersList';

function App() {
  return (
    <div>
        <AddUser/>
        <UsersList users={[]}/>
    </div>
  );
}

export default App;
