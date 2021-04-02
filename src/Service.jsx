import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.jpg";
// import Card from './Card';

const Service = () => {
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">This is Our Services</h1>
        </div>
        <div className="container mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                      <div className="col-md-4 col-10 mx-auto">
                      <div class="card d-flex">
                            <img src={web} class="card-img-top" alt="card img" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
                            </div>
                        </div>
                      </div>



                      <div className="col-md-4 col-10 mx-auto">
                      <div class="card d-flex">
                            <img src={web} class="card-img-top" alt="card img" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
                            </div>
                        </div>
                      </div>


                      <div className="col-md-4 col-10 mx-auto">
                      <div class="card d-flex">
                            <img src={web} class="card-img-top" alt="card img" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
                            </div>
                        </div>
                      </div>


                      <div className="col-md-4 col-10 mx-auto">
                      <div class="card d-flex">
                            <img src={web} class="card-img-top" alt="card img" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
                            </div>
                        </div>
                      </div>


                      <div className="col-md-4 col-10 mx-auto">
                      <div class="card d-flex">
                            <img src={web} class="card-img-top" alt="card img" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
                            </div>
                        </div>
                      </div>



                      




                      <div className="col-md-4 col-10 mx-auto">
                      <div class="card">
                            <img src={web} class="card-img-top" alt="card img" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Service;
