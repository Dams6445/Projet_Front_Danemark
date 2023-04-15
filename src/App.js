import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import MyButton from './components/Buttons.js';
import {Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import NavBar from './components/NavBar/NavBar';
import OneCol from './components/SignIn/OneCol/OneCol';
import Usage from './components/SignIn/OneCol/Usage/Usage';
import Pres from './components/SignIn/OneCol/Pres/Pres';
import TwoCol from './components/SignIn/TwoCol/TwoCol';
import MailVerif1 from './components/SignIn/TwoCol/1MailVerif/MailVerif1';
import MailVerif2 from './components/SignIn/TwoCol/1MailVerif/MailVerif2';
import PhoneVerif1 from './components/SignIn/TwoCol/2PhoneVerif/PhoneVerif1';
import PhoneVerif2 from './components/SignIn/TwoCol/2PhoneVerif/PhoneVerif2';
import Name from './components/SignIn/TwoCol/3Name/Name';
import Adress from './components/SignIn/TwoCol/4Adress/Adress';
import Birth from './components/SignIn/TwoCol/5Birth/Birth';
import DriverLicence from './components/SignIn/TwoCol/6DriverLicence/DriverLicence';
import Front from './components/SignIn/TwoCol/6DriverLicence/Front/Front';
import Back from './components/SignIn/TwoCol/6DriverLicence/Back/Back';
import AddInfo1 from './components/SignIn/TwoCol/7AddInfo/AddInfo1';
import AddInfo2 from './components/SignIn/TwoCol/7AddInfo/AddInfo2';
import DriverSelfie from './components/SignIn/TwoCol/8DriverSelfie/DriverSelfie';
import AllDone from './components/SignIn/TwoCol/9AllDone/AllDone';




function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signIn" element={<SignIn />}>
          <Route path="/signIn/Onecol" element={<OneCol />}>
            <Route path="/signIn/Onecol/Usage" element={<Usage />}/>
            <Route path="/signIn/Onecol/Pres" element={<Pres />}/>
          </Route>
          <Route path="/signIn/Twocol" element={<TwoCol />}>
            <Route path="/signIn/Twocol/MailVerif1" element={<MailVerif1 />}/>
            <Route path="/signIn/Twocol/MailVerif2" element={<MailVerif2 />}/>
            <Route path="/signIn/Twocol/PhoneVerif1" element={<PhoneVerif1 />}/>
            <Route path="/signIn/Twocol/PhoneVerif2" element={<PhoneVerif2 />}/>
            <Route path="/signIn/Twocol/Name" element={<Name />}/>
            <Route path="/signIn/Twocol/Adress" element={<Adress />}/>
            <Route path="/signIn/Twocol/Birth" element={<Birth />}/>
            <Route path="/signIn/Twocol/DriverLicence" element={<DriverLicence />}>
              <Route path="/signIn/Twocol/DriverLicence/Front" element={<Front />}/>
              <Route path="/signIn/Twocol/DriverLicence/Back" element={<Back />}/>
            </Route>
            <Route path="/signIn/Twocol/AddInfo1" element={<AddInfo1 />}/>
            <Route path="/signIn/Twocol/AddInfo2" element={<AddInfo2 />}/>
            <Route path="/signIn/Twocol/DriverSelfie" element={<DriverSelfie />}/>
            <Route path="/signIn/Twocol/AllDone" element={<AllDone />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
