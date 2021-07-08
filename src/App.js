import Page404 from "./pages/Page404"
import Form from "./pages/form"
import UserDetails from "./pages/userdetails"
import Users from "./pages/users"
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route exact path="/user/:id">
          <UserDetails />
        </Route>
        <Route path="/create">
          <Form />
        </Route>
        <Route path="/user/:id/edit">
          <Form />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </div>
  )
}

export default App
