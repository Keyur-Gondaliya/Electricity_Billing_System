import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css"
let z = new Date().toLocaleDateString();
const Adata = (props) => {
  const [users, setUser] = useState([])
  const [ab, setab] = useState();
  const [ab1, setab1] = useState([]);
  const b = 200.0, e1 = 0;
  let c = 5.30, f, g, h, i;
  let p = -1;
  const [state, setState] = useState({ bid: "", meter: "", status: "panding", amount: "", lReading: "", reading: "", billingDate: "", usage: "", fixCharge: "", unitPrize: "", eCharge: "", lastPayDate: "" });
  f = new Date().getDate();
  g = new Date().getMonth() + 2;
  h = new Date().getFullYear();
  const n = props.location.state.ab.id;
  useEffect(() => {
    fetch(`http://localhost:3006/user/`).then((result) => {
      result.json().then((resp) => {
        return <>{i = resp}
          {setUser(i)}
          {console.log(users, "user")}
        </>
      })
    })
  }, [ab])
  const calc = () => {
    { state.billingDate = z }
    { state.fixCharge = b }
    { state.unitPrize = c }
    { state.lastPayDate = g + "/" + f + "/" + h }
  }
  const ax = (r) => {
    state.bid = r.data.id;
    axios
      .post(`http://localhost:3006/emp${n}`, state)
      .then(r => console.warn(r))
      .catch(e => { console.error(e) })
    alert("done succesfully");
    setState({ bid: "", meter: "", status: "panding", amount: "", lReading: "", reading: "", billingDate: "", usage: "", fixCharge: "", unitPrize: "", eCharge: "", lastPayDate: "" });
  }
  const concl = (e) => {
    const t4 = Math.max.apply(Math, e.map(function (o) { return o.reading; }))
    if (t4 < state.reading) {
      state.lReading = t4;
      state.usage = state.reading - state.lReading;
      state.eCharge = (state.reading - state.lReading) * (5.3);
      state.amount = state.eCharge + e1 + b;
      state.amount = state.amount.toFixed();
      axios
        .post(`http://localhost:3006/bill${p}`, state)
        .then((r) => { ax(r) })
        .catch(e => { console.error(e) })
    }
    else {
      alert("reading should be more then last reading")
    }
  }
  const add = (e) => {
    e.preventDefault();
    calc();
    users.map((e, i) => { (e.meter === state.meter) ? (p = (i + 1)) : (console.log()) })
    if (state.meter === "" || state.reading === "") {
      alert("Empty Meter number OR Reading ");
    } else {
      if (p !== -1) {
        fetch(`http://localhost:3006/bill${p}`).then((result) => {
          result.json().then((resp) => {
            concl(resp);
          })
        })
      }
      else {
        alert("incorrect meter number")
      }
    }
  }
  return (
    <>
      <div className="split right">
        <div className="centered">
          <img src="https://mk0qaxewenuu33xx1t5t.kinstacdn.com/wp-content/uploads/2019/06/lower-electricity-bill-cover.png" alt="User"></img>
          <h2>User Part</h2>
          <p>"I believe that access to electricity and light can radically improve people‚ lives."-Olafur Eliasson</p>
        </div>
      </div>
      <form onSubmit={add}>
        <div className="split left">
          <div className="login-form">
            <h1 className="bg-dark text-white text-center">Electricity Billing System
                        </h1><hr></hr>
            <h2 className="text-center text-white">employees part</h2><hr></hr>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  </span> <i className="fa fa-angle-left pull-right"></i>

                </div>
                <input type="number" className="form-control" placeholder="meter number" required="required" value={state.meter} onChange={(ed) => { setState((state) => ({ ...state, meter: ed.target.value })) }} />
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="fa fa-key icon"></span>
                  </span>
                </div>
                <input type="number" className="form-control" placeholder="current Reading" required="required" value={state.reading} onChange={(ed) => { setState((state) => ({ ...state, reading: ed.target.value })) }} />
              </div>
            </div>
            <br />
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block" value="Generate bill" input type="submit" readOnly>Generate Bill</button><hr></hr>
              <button type="submit" className="btn btn-primary btn-block" input type="submit" value="Pay & Generate Bill" onClick={(e) => setState((ed) => ({ ...ed, status: "paid " }))} readOnly>Pay & Generate Bill</button><hr></hr>
              <Link to={{ pathname: "/aoption", state: props.location.state }} ><button className="btn btn-dark btn-block" value="back" readOnly>Back</button></Link>
            </div>
          </div>
        </div>
        <br /><br />
      </form>
    </>);
}
export default Adata;