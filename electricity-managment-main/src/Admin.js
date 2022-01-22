import { useHistory, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
const Admin = () => {
  const l_k = "ab"
  const [uname, setuname] = useState();
  const [ab, setab] = useState(-1);
  const [Password, setPassword] = useState();
  const hi = useHistory();
  const [emp, setemp] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3006/emp/").then((result) => {
      result.json().then((resp) => {
        setemp(resp)
      })
    })
  }, [])
  useEffect(() => {
    emp.map((e) => { return (e.username === uname && e.password === Password) ? (setab(e)) : (console.log()) })
  })
  useEffect(() => {
    localStorage.setItem(l_k, JSON.stringify(ab))
  }, [ab]);
  useEffect(() => {
    const lo_get = JSON.parse(localStorage.getItem(l_k));
    if (lo_get) setab(lo_get);
  }, []);
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        return (ab !== -1 ? (hi.push({ pathname: "./aoption", state: { ab } })) : alert("Invalid userId or Password "))
      }}>
        <div className="split left">
          <div className="login-form">
            <h1 className="bg-dark text-white text-center">Electricity Billing System
                        </h1>
            <br></br>
            <hr></hr>
            <h2 className="text-center text-white">Employe Part</h2>
            <hr></hr>
            <br></br>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  </span> <i className="fa fa-angle-left pull-right"></i>
                </div>
                <input type="text" className="form-control" placeholder="Employe Id" onChange={(e) => { setuname(e.target.value) }} required />
              </div>
            </div>
            <hr></hr>
            <br></br>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  </span> <i className="fa fa-angle-left pull-right"></i>
                </div>
                <input type="password" className="form-control" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} required />
              </div>
            </div>
            <hr></hr>
            <br>
            </br>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block" value="submit" input type="submit" readOnly>Submit</button><br />
              <Link to="/"><button className="btn btn-dark btn-block" value="back" readOnly>Back</button></Link>
            </div>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frebeccaskilbeck%2Ffiles%2F2019%2F02%2FMaintianing-Motivation-in-employees-Blog-Graphic-1200x861.jpg" alt="Employe"></img>
            <h2>Employe</h2>
            <p>"What good is an idea if it remains an idea? Try. Experiment. Iterate. Fail. Try again. Change the world."–Simon Sinek</p>
          </div>
        </div>
      </form>
    </>);
}
export default Admin;