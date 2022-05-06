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

function App() {
  return (

    <>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route  path={"/Department"} component={Department} />
        <Route  path={"/Doctor"} component={Doctor} />
        <Route  path={"/appointment"} component={Appointment}/>
        <Route  path={"/Auth"} component={Auth}/>
        <Route  path={"/About"} component={About}/>
        <Route  path={"/Contact"} component={Contact}/> 
        <Route path={"/medicine"} component={Medicine}/>
        <Route path={"/list"} component={List} />
       



        
        




      </Switch>
      <Footer />


    </>
  );
}

export default App;
