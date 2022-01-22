import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
const Empinfo = (props) => {
    return (<>
        <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="https://image.freepik.com/free-vector/corporate-meeting-employees-cartoon-characters-discussing-business-strategy-planning-further-actions-brainstorming-formal-communication-seminar_335657-284.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>
                                Name : {props.location.state.ab.name}
                            </h5>
                            <h6>
                                Electricity billing System Employe
                                    </h6>
                            <br></br>
                            <hr></hr>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Link to={{ pathname: "/aoption", state: props.location.state }} >

                            <input className="btn btn-dark" value="back" readOnly /></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINK</p>
                            <a href="">{props.location.state.ab.website}</a><hr></hr>
                            <p>SKILLS</p>
                            <a href="">Bill Designer</a><hr></hr>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <p>company</p>
                            </div>
                            <div className="col-md-4">
                                <p>{props.location.state.ab.company.name}</p>
                            </div>
                            {/* <break></break> */}
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <label>catchPhrase</label>
                            </div>
                            <div className="col-md-4">
                                <p>{props.location.state.ab.company.catchPhrase}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <label>BS</label>
                            </div>
                            <div className="col-md-4">
                                <p>{props.location.state.ab.company.bs}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>User Id</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{props.location.state.ab.username}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{props.location.state.ab.name}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{props.location.state.ab.email}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{props.location.state.ab.phone}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Address</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{props.location.state.ab.address.street}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>suite</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{props.location.state.ab.address.suite}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>city</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{props.location.state.ab.address.city}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>zipcode</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{props.location.state.ab.address.zipcode}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>lng</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{props.location.state.ab.address.geo.lng}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>lat</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{props.location.state.ab.address.geo.lat}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>)
}
export default Empinfo;