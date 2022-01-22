import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./Admin";
import User from "./User";
import Adata from "./Adata";
import Udata from "./Udata";
import Aoption from "./Aoption";
import Upay from "./Upay";
import Showbill from "./Showbill";
import Det from "./Det"
import Home from "./home";
import Finalbillview from "./Finalbillview";
import Empinfo from "./Empinfo";
import Appdata from "./Appdata";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/showbill" component={Showbill} />
                    <Route exact path="/user" component={User} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/adata" component={Adata} />
                    <Route exact path="/aoption" component={Aoption} />
                    <Route exact path="/appdata" component={Appdata} />
                    <Route exact path="/udata" component={Udata} />
                    <Route exact path="/upay" component={Upay} />
                    <Route exact path="/empinfo" component={Empinfo} />
                    <Route exact path="/finalbillview/:bid" component={Finalbillview} />
                    <Route exact path="/Showbill" component={Showbill} />
                    <Route exact path="/det/:id" component={Det} /><br />
                </Switch>
            </BrowserRouter>
        </>
    );
}
export default App;