import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Container/Home';
import { } from 'react-router-dom'
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Department from './Container/Department/department';
import Doctor from './Container/Doctor/Doctor';
import Appointment from './Container/Appointment/Appointment';
import Auth from './Container/Auth/Auth';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact'
import Medicine from './Container/Medicine/Medicine';
import List from './Component/List/List';
import PublicRoute from './Route/PublicRoute';
import PrivateRoute from './Route/PrivateRoute';
import BookAppointment from './Container/BookAppointment/BookAppointment';
import ListAppointment from './Container/ListAppointment/ListAppointment';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <PublicRoute exact path={"/"} component={Home} />
        <Route path={"/Department"} component={Department} />
        <Route path={"/Doctor"} component={Doctor} />
        <Route path={"/appointment"} component={Appointment} />
        <PublicRoute restricted={true} path={"/Auth"} component={Auth} />
        <Route path={"/About"} component={About} />
        <Route path={"/Contact"} component={Contact} />
        <Route path={"/list"} component={List} />
        <PrivateRoute path={"/medicine"} component={Medicine} />
        <PrivateRoute path={"/bookappoinment"} component={BookAppointment} />
        <PrivateRoute path={"/listappoinment"} component={ListAppointment} />


      </Switch>
      <Footer />


    </div>
  );
}

export default App;
