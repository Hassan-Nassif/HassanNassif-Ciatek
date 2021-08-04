import Customer from './Customer';
import Vehicle from './Vehicle';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function Home(){
    return (
    <Router>
<div className="App">
    
     
     <Switch>
         
         <Route path="/customerlist" component={Customer}/>
         <Route path="/vehiclelist" component={Vehicle}/>
         

    </Switch>
     
</div>
    </Router>
  );

};
export default Home;