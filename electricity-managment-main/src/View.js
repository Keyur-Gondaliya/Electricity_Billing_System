import { Link } from "react-router-dom";
const View = (props) => {
  return (
    <><Link to={{ pathname: `/finalbillview/${props.p.id}`, state: props.p }}>
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
              <td>{props.p.id}</td>
              <td>{props.p.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Link><hr />
    </>
  )
}
export default View;