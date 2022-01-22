import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Billdatapass from './Billdatapass'
const Showbill = (props) => {
  const [er, seter] = useState([]);
  const t = props.location.state.ab.id
  useEffect(() => {
    fetch(`http://localhost:3006/emp${t}`).then((result) => {
      result.json().then((resp) => {
        seter(resp)
      })
    })
  }, [])
  const data = er.map((bi) => {
    return (<><Billdatapass p={bi} q={props.location.state} key={bi.id} /></>)
  })
  return (
    <>
      <div className="container d-flex align-items-center"></div>
      <section id="kd" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>ALL USER BILL DETAILS</h1>
              <div className="d-lg-flex">
                <p></p>
                <Link to={{ pathname: "/aoption", state: props.location.state }}>
                  <input className="btn btn-dark" type="submit" value="      Back      " /></Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src="https://i.dlpng.com/static/png/6446413_preview.png" className="img-fluid animated" alt=""></img>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      {data}<br /><br />
    </>
  )
}
export default Showbill;