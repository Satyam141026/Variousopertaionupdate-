
import './App.css';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'; 
import { Register } from './Pages/Register';
import Login from './Pages/Login';

import GetStudent from './Pages/GetStudent';
import Error404 from './Pages/Error404';
import EditStudent from './Pages/EditStudent';
import View from './Pages/View';
function App() {
  return (
    <Router>
 
    <Routes>
    <Route path="/" element={ <Register />  } />
        <Route path="/login" element={ <Login /> } />

        <Route path="/getstudent" element={ <GetStudent /> } />
        <Route path="/editstudent/:stu_id" element={ <EditStudent /> } />
        <Route path="/view/:stu_id" element={ <View /> } />
        <Route path="*" element={ <Error404/> } />
    </Routes>

</Router>
  );
}

export default App;
