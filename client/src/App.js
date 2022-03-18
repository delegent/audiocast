import './App.css';
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Navigation from './components/shared/Navigation/Navigation';
import Authenticate from '../src/pages/authenticate/Authenticate'
import Activate from '../src/pages/activate/Activate'
import Rooms from '../src/pages/Rooms/Rooms'
const isAuth = false;
const user = {
  activated:true,
}

function App() {
  return (
    
    <BrowserRouter>
    <Navigation />
        <Switch>
              <GuestRoute  path = "/" exact >
                <Home />
              </GuestRoute>
              <GuestRoute path = "/authenticate">
                <Authenticate />
              </GuestRoute>
              <SemiProtectedRoute path = "activate">
                    <Activate />
              </SemiProtectedRoute>
              <ProtectedRoute path="/rooms">
                  <Rooms />
              </ProtectedRoute>
         </Switch>
    </BrowserRouter>
  );
}

const GuestRoute = ({children,...rest}) =>{

  return (
      <Route {...rest}
        render={({ location }) =>{
         return isAuth ? 
          <Redirect to=
          {{
            pathname:'/rooms',
            state:{from:location}
          }}/>
          :
          (
            children
          )
        }}>
      </Route>
  )
}


const SemiProtectedRoute = ({children,...rest}) =>{
  return (
    <Route {...rest}  
      render = {
       (
         {location}
       ) =>{
         return (
           !isAuth ? 
           (
             <Redirect to = {{
               pathname:'/',
               state:{ from :location}
             }} />
           ): isAuth && !user.activated ? 
           (children) : (
           <Redirect to = {{
               pathname:'/rooms',
               state:{ from :location}
             }} />
           )
         )
       }
      }
    >

    </Route>
  )
}


const ProtectedRoute = ({children,...rest}) =>{
  return (
    <Route {...rest}  
      render = {
       (
         {location}
       ) =>{
         return (
           !isAuth ? 
           (
             <Redirect to = {{
               pathname:'/',
               state:{ from :location}
             }} />
           ): isAuth && !user.activated ? 
           (<Redirect to = {{
               pathname:'/activate',
               state:{ from :location}
             }} />) : (
               children
             )
         )
       }
      }
    >

    </Route>
  )
}

export default App;



