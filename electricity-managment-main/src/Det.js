import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
const Billdatapass = (props) => {
	const [ab, setab] = useState({ ab: props.location.state.q.ab });
	const { meter, bid, amount, status, reading, billingDate, eCharge, fixCharge, lReading, lastPayDate, usage, unitPrize } = props.location.state.p;
	return (
		<>
			<h1>ELECTRICITY BILLING SYSTEM</h1>
			<h3>They can't do without electricity. They can do with less electricity.</h3>
			<div className="invoice-box">
				<table>
					<tr className="top">
						<td colSpan="2">
							<table>
								<tr>
									<td className="title">
										<img src="https://image.freepik.com/free-vector/electric-company-logo-template_1061-1.jpg" alt="Company logo" className="imagelayoutd" />
									</td>

									<td>
										ELETRICITY BILL<br /><p></p>
                        USER NAME<br />
										<p>BILL DATE : {billingDate}</p>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr className="information">
						<td colSpan="2">
							<table>
								<tr>
									<td>
										<strong>ELETRICITY BILL</strong><br></br>
				TELEPHONE.: 00 00 00 00 00<br></br>
				EMAIL: contact@website.com<br></br>
				WEB: www.website.com
								</td>

									<td>
										<strong>USER NAME</strong><br></br>
				BILL NUMBER:-{bid}<br></br>
				METER NUMBER:-{meter}<br></br>

									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr className="heading">
						<td>ELECTRICITY BILL</td>
						<td>ALL ABOUT  BILL</td>
					</tr>
					<tr className="item">
						<td>METER READING</td>
						<td>{reading}</td>
					</tr>
					<tr className="item">
						<td>ELECTRICITY CHARGE</td>
						<td>{eCharge}</td>
					</tr>
					<tr className="item">
						<td>FIX CHARGE</td>
						<td>{fixCharge}</td>
					</tr>
					<tr className="item">
						<td>USAGE</td>
						<td>{usage}</td>
					</tr>
					<tr className="item">
						<td>LAST READING</td>
						<td>{lReading}</td>
					</tr>
					<tr className="item">
						<td>LAST BILL PAY DATE</td>
						<td>{lastPayDate}</td>
					</tr>
					<tr className="item">
						<td>UNIT PRIZE</td>
						<td>{unitPrize}</td>
					</tr>
					<tr className="item">
						<td>AMOUNT</td>
						<td>{amount}</td>
					</tr>
					<tr className="item">
						<td>STATUS</td>
						<td>{status}</td>
					</tr>
					<br></br>
					<br></br>
					<tr className="heading">
						<td>Payment Method</td>
						<td>Check #</td>
					</tr>
					<tr className="details">
						<td>CREDIT CARD</td>
						<td></td>
					</tr>
				</table>
				<div id="note">
					<h4>Note :</h4>
					<p>ALL GST TAX INCLUDE</p>
				</div>
				<div id="footer">
					<p>@ELECTRICITY BILLING MANAGMENT</p>
				</div>
			</div>
			<Link to={{ pathname: "/showbill", state: ab }}><input className="btn btn-dark" value="back" readOnly /></Link>
		</>
	)
}
export default Billdatapass;