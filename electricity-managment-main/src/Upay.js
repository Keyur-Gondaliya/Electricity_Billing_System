import { useHistory, Link } from "react-router-dom";
import { useEffect, useState } from "react"
const Upay = (props) => {
  const [cnumber, setcnumber] = useState()
  const [cvv, setcvv] = useState()
  const [mm, setmm] = useState()
  const [yy, setyy] = useState()
  const [card, setcard] = useState([])
  const [ebill, setebill] = useState();
  const hi = useHistory();
  let n = -1;
  const path = props.location.state.ab.ab;
  const path1 = props.location.state.id;
  console.log(path, "ab")
  console.log(path1, "id")
  useEffect(() => {
    fetch("http://localhost:3006/card/").then((result) => {
      result.json().then((resp) => {
        setcard(resp)
        console.log(card, "c")
      })
    })
  }, [cvv])
  function updateUser() {
    ebill.status = "paid";
    fetch(`http://localhost:3006/bill${path}/${path1}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ebill)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
      })
    })
  }
  useEffect(() => {
    fetch(`http://localhost:3006/bill${path}/${path1}/`).then((result) => {
      result.json().then((resp) => {
        setebill(resp)
        console.log(ebill, "e")
      })
    })
  }, [cvv])
  return (
    <>
      <section className="credit-card">
        <div className="container">
          <br></br><h1 className="bg-dark text-white text-center">Electricity Billing System </h1>
          <hr></hr>
          <h2 className="text-center text-black">Payment method</h2>
          <hr></hr>
          <br></br>

          <div className="card-holder">
            <div className="card-box bg-news">
              <div className="row">
                <div className="col-lg-6">
                  <div className="img-box">
                    <img src="https://image.freepik.com/free-vector/businessman-beside-bill-payment-document_1325-401.jpg" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    console.warn(yy + "-" + mm)
                    card.map((e, i) => { (e.number === cnumber && e.cvv === cvv && e.expirationDate == (yy + "-" + mm)) ? (n = (i + 1)) : (console.log()) })
                    n !== -1 ? (<>{alert("paid successfully")}{updateUser()}{hi.push({ pathname: "/udata", state: props.location.state.ab })}</>) : alert("Invelid Card Data")
                  }}>
                    <div className="card-details">
                      <h3 className="title">Credit Card Details</h3>
                      <div className="row">
                        <div className="form-group col-sm-7">
                          <div className="inner-addon right-addon">
                            <label for="card-holder">Card Holder</label>
                            <i className="far fa-user"></i>
                            <input type="text" className="form-control" placeholder="Card Holder" aria-label="Card Holder" aria-describedby="basic-addon1" />			   </div>
                        </div>
                        <div className="form-group col-sm-5">
                          <label for="">Expiration Date</label>
                          <div className="input-group expiration-date">
                            <input type="text" className="form-control" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1" onChange={(e) => { setmm(e.target.value) }} /></div>
                          <span className="date-separator">/</span>
                          <input type="text" className="form-control" placeholder="YY" aria-label="YY" aria-describedby="basic-addon1" onChange={(e) => { setyy(e.target.value) }} />
                        </div>
                      </div>
                      <div className="form-group col-sm-8">
                        <div className="inner-addon right-addon">
                          <label for="card-number">Card Number</label>
                          <i className="far fa-credit-card"></i>
                          <input id="card-number" type="text" className="form-control" placeholder="Card Number" aria-label="Card Holder" aria-describedby="basic-addon1" onChange={(e) => { setcnumber(e.target.value) }} />
                        </div>
                      </div>
                      <div className="form-group col-sm-4">
                        <label for="cvv">CVV</label>
                        <input id="cvv" type="text" className="form-control" placeholder="CVV" aria-label="Card Holder" aria-describedby="basic-addon1" onChange={(e) => { setcvv(e.target.value) }} autoComplete="off" />				  </div>
                      <div className="form-group col-sm-12">
                        <input type="submit" className="btn btn-primary btn-block" value="pay"></input>
                        <br></br>
                        <Link to={{ pathname: "/udata", state: props.location.state.ab }}><input className="btn btn-dark btn-block" type="submit" value="Back" /></Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Upay;