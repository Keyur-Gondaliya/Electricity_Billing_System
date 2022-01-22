import { Link } from 'react-router-dom'
const Appdata = (props) => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>ELECTRICITY BILLING SYSTEM USING REACTJS</h2>
            <h3>Learn More <span>About Us</span></h3>
            <p>This purpose of the paper” Electricity Billing Management System” is to reduce manpower for billing and collecting bills and wastage of paper for billing</p>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              <p>
                Electricity Billing System is an website, from which user can easily manage Customers details, Bills details, Connection details
            </p>
              <ul>
                <li>User can search details of the Units, Customers, Reading and Consumption.</li>
                <li>User can easily pay online with one-click and also at a time of  bill receiving.</li>
                <li>The first advantage is that it offers a paperless mode.</li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                It is a website which helps the user to work with the billing cycles, paying bills, managing different departments under which employees are working etc.
            </p>
              <a href="#" className="btn-learn-more">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>CONTACT US</h2>
            <p>If you have any problem then you can contact us. </p>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              <ul>
                <li> Location:- charusat university</li>
                <li> Email:- info@email.com</li>
                <li> Call:- 00 00 00 00 00</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Link to={{ pathname: "/aoption", state: props.location.state }}><input className="btn btn-dark" type="submit" value="Back" /></Link>
    </>
  )
}
export default Appdata;