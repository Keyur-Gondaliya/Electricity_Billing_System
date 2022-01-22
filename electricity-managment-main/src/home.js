import { Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const Home = () => {
  return (
    <>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto"><a href="index.html">Electricity billing System</a></h1>
        </div>
      </header>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>"A smile costs less than electricity, but gives much light."</h1>
              <h2>--Abbe Pierre</h2>
              <div className="d-lg-flex">
                <p></p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" className="image-layout"></img>
                <Link to="/user">
                  <input className="btn btn-primary" type="submit" value="User" />&nbsp;&nbsp;</Link>
                <img src="https://icon-library.com/images/employees-icon-png/employees-icon-png-18.jpg" className="image-layout"></img>
                <Link to="/admin">
                  <input className="btn btn-primary" type="submit" value="Admin" /></Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src="https://cdn3.vectorstock.com/i/thumb-large/69/12/electricity-utility-bills-icon-vector-24926912.jpg" className="img-fluid animated" alt=""></img>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home;