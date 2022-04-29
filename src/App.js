import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Container/Home';
import { } from 'react-router-dom'
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Department from './Container/Department/department';
import Doctor from './Container/Doctor/Doctor';
import Appointment from './Container/Appointment/Appointment';
import Signup from './Container/sign-Up/Signup';
import Auth from './Container/Auth/Auth';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact'


function App() {
  return (

    <>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/Department"} component={Department} />
        <Route exact path={"/Doctor"} component={Doctor} />
        <Route exact path={"/appointment"} component={Appointment}/>
        <Route exact path={"/Auth"} component={Auth}/>
        <Route exact path={"/About"} component={About}/>
        <Route exact path={"/Contact"} component={Contact}/>
        




      </Switch>
      <Footer />


    </>
  );
}

export default App;
