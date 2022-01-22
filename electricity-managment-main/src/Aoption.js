import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
const Aoption = (props) => {
    const [temp, settemp] = useState(props.location.state);
    const hi = useHistory();
    return (
        <>
            <div className="bg">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                        </div>
                        <div className="col-4">
                            <h1 className="bg-dark text-white text-center">Electricity Billing System
                        </h1>
                            <br></br>
                            <br></br>
                            <hr>
                            </hr>
                            <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/utility-bill-495644.png" className="imagelayout"></img>
                            <input className="btn btn-primary" type="submit" value="Create Bill" onClick={() => { hi.push({ pathname: "/adata", state: temp }) }} />&nbsp;&nbsp;
                        <hr>
                            </hr>
                            <img src="https://icon-library.com/images/employees-icon-png/employees-icon-png-18.jpg" className="imagelayout"></img>
                            <input className="btn btn-primary" type="submit" value="Employee info" onClick={() => { hi.push({ pathname: "/empinfo", state: temp }) }} />
                            <hr>
                            </hr>
                            <hr>
                            </hr>
                            <img src="https://www.flaticon.com/premium-icon/icons/svg/972/972601.svg" className="imagelayout"></img>
                            <input className="btn btn-primary" type="submit" value="Created Bill" onClick={() => { hi.push({ pathname: "/showbill", state: temp }) }} />
                            <hr>
                            </hr>
                            <hr>
                            </hr>
                            <img src="https://cdn0.iconfinder.com/data/icons/user-interface-33/80/App_Interface_new-07-512.png" className="imagelayout"></img>
                            <input className="btn btn-primary" type="submit" value="About Us" onClick={() => { hi.push({ pathname: "/appdata", state: temp }) }} />
                            <hr>
                            </hr>
                        </div>
                        <div className="col-4">
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/"><button className="btn btn-dark btn-block" value="back" readOnly>Back</button></Link>
        </>
    )
}
export default Aoption;