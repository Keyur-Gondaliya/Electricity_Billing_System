import react, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import View from "./View";
const Udata = (prop) => {
  const n = prop.location.state.ab;
  console.log(n, "n")
  const [billid, setbillid] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3006/bill${n}`).then((result) => {
      result.json().then((resp) => {
        setbillid(resp)
      })
    })
  }, [n])
  console.log(billid, "billid")
  const e = billid.map((e) => { return (<View p={e} key={billid.id} />) });
  const hi = useHistory();
  return (
    <><div className="container">
      <h2>ELECTRICITY BILLING SYSTEM <small>USER BILL</small></h2>
    </div>
      {e}
      <div className="dkk">
        <Link to="/"><input className="btn btn-dark" value="back" readOnly /></Link><br /><br />
      </div>
    </>
  );
}
export default Udata;