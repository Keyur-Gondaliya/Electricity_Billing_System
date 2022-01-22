import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
const User = () => {
  const [phone, setphone] = useState();
  const [mainid, setid] = useState(-1);
  const [ab, setab] = useState(-1);
  const [data, setData] = useState([]);
  const [password, setPassword] = useState();
  const [mNumber, setmNumber] = useState();
  const hi = useHistory();
  const [users, setUser] = useState([])
  useEffect(() => {
    fetch("http://localhost:3006/user/").then((result) => {
      result.json().then((resp) => {
        setUser(resp)
      })
    })
  }, [])
  useEffect(() => {
    users.map((e, i) => { (e.phone === phone && e.password === password && e.meter === mNumber) ? (setab(i + 1)) : (console.log()) })
  })
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        return <>{ab !== -1 ? (hi.push({ pathname: "/udata", state: { ab } })) : alert("invalid phone Number OR password Meter number")}</>
      }}>
        <div className="split left">
          <div className="login-form">
            <h1 className="bg-dark text-white text-center">Electricity Billing System</h1>
            <h2 className="text-center text-white">User Part</h2>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  </span> <i className="fa fa-angle-left pull-right"></i>
                </div>
                <input type="number" className="form-control" placeholder="phone number" required="required" onChange={(e) => { setphone(e.target.value) }} required />
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
                <input type="password" className="form-control" placeholder="Password" required="required" onChange={(e) => { setPassword(e.target.value) }} required />
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="fa fa-user"></span>
                  </span>
                </div>
                <input type="number" className="form-control" placeholder="meter number" required="required" onChange={(e) => { setmNumber(e.target.value) }} required />
              </div>
            </div>
            <br />
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block" value="submit">Submit</button><br />
              <Link to="/"><button type="submit" className="btn btn-dark btn-block" value="Back">Back</button></Link>
            </div>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="User"></img>
            <h2>User Part</h2>
            <p>“Make the customer the hero of your story.”– Ann Handley</p>
          </div>
        </div>
      </form>
    </>
  );
}
export default User;