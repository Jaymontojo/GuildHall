import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from "../contexts/AuthContext"
//switch function
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomeSplash from "./HomeSplash"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import NewQuest from "./NewQuest"



function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
    >

        <Router>
          <AuthProvider>
            <Switch>
              {/* Homepage */}
              <PrivateRoute exact path="/" component={HomeSplash } />
              {/* profile update page */}
              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
              >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <PrivateRoute path="/update-profile" component={UpdateProfile} />
                  {/* signup page */}
                  <Route path="/signup" component={Signup} />
                  {/* login page */}
                  <Route path="/login" component={Login} />
                  {/* forgot password page */}
                  <Route path="/forgot-password" component={ForgotPassword} />
                  {/* go to the new quest div */}
                  <Route path="/new-quest" component={NewQuest} />
                </div>
              </Container>
            </Switch>
          </AuthProvider>
        </Router>
    </Container>
  )
}

export default App