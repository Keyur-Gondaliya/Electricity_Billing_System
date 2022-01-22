import React from 'react'
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Billdatapass = (props) => {
  return (
    <>
      <Link to={{ pathname: `/det/${props.p.id}`, state: props }}>
        <div className="container">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">METER NUMBER</th>
                <th scope="col">AMOUNT</th>
                <th scope="col">READING</th>
                <th scope="col">BILL NUMBER</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{props.p.meter}</th>
                <td>{props.p.amount}</td>
                <td>{props.p.reading}</td>
                <td>{props.p.bid}</td>
                <td>{props.p.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Link>
      {/* <br></br> */}
    </>
  )
}
export default Billdatapass;