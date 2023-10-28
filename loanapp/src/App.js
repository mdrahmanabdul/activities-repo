import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Link ,Routes,Route} from 'react-router-dom';
import { ProfileLogin,ProfileSuccess,ProfileRegistration } from './components/Loan';
function App() {
  return (
    <div className='container-fluid'>
      <div className='alert alert-secondary'>
      <h2 className='text-center'>Loan Application</h2>
      </div>
      <div>
        <Routes>
          <Route path="" element={<ProfileLogin/>}/>
          <Route path="/login" element={<ProfileLogin/>}/>
          <Route path="/register" element={<ProfileRegistration/>}/>
          <Route path="/success/:emailId/:password/*" element={<ProfileSuccess/>}/>
        </Routes>
      </div>
      
      
      

    </div>
  );
}

export default App;