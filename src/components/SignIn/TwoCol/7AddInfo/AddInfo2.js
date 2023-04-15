import React from 'react'
import Step3 from '../../Steps/Step3'
import { Link } from 'react-router-dom'

export default function AddInfo2() {
    return (
        <>
            <div class="col-sm-4 d-flex align-items-center">
                <Step3 />
            </div>
            <div class="col-sm-6">
                <div class="row justify-content-sm-between">
                    <div class="col-sm-2">
                        <Link to="../../TwoCol/AddInfo1">
                            {' < Back '}
                        </Link>
                    </div>
                    <div class="col-sm-3">
                        <Link to="../../TwoCol/DriverSelfie">
                            {' Skip for now '}
                        </Link>
                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-8">
                        <h3 class="text-start font-weight-bold pt-5 pb-5">
                            Additional information
                        </h3>
                        <p class="text-start pb-1">
                            I am allowed to drive categories:
                        </p>
                        <div class="text-start pb-2">
                            <input type="checkbox" />
                            <label style={{ paddingLeft: "10px" }}>AM (mopeds)</label>
                        </div>
                        <div class="text-start pb-2">
                            <input type="checkbox" />
                            <label style={{ paddingLeft: "10px" }}>A1 (small motorcycles/scooters)</label>
                        </div>
                        <div class="text-start pb-2">
                            <input type="checkbox" />
                            <label style={{ paddingLeft: "10px" }}>A (motorcycles)</label>
                        </div>
                        <div class="text-start pb-2">
                            <input type="checkbox" />
                            <label style={{ paddingLeft: "10px" }}>B1 (quadricycles/tricycles)</label>
                        </div>
                        <div class="text-start pb-2">
                            <input type="checkbox" />
                            <label style={{ paddingLeft: "10px" }}>B (passenger cars)</label>
                        </div>
                        <div class="text-start pb-2">
                            <input type="checkbox" />
                            <label style={{ paddingLeft: "10px" }}>C1 (trucks)</label>
                        </div>
                        <div class="text-start pb-2">
                            <input type="checkbox" />
                            <label style={{ paddingLeft: "10px" }}>C (heavy trucks)</label>
                        </div>
                        <div class="text-start pb-2">
                            <input type="checkbox" />
                            <label style={{ paddingLeft: "10px" }}>D1 (minibuses/small minivans)</label>
                        </div>
                        <div class="text-start pb-2">
                            <input type="checkbox" />
                            <label style={{ paddingLeft: "10px" }}>D (buses/big minivans/9 or more seats)</label>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-10">
                        <div class="mt-5 mb-4" >
                            <Link to="../../TwoCol/DriverSelfie">
                                <button type="button" className="btn btn-primary rounded-pill border mt-1 mb-1 w-100 h-100">
                                    <div className='container'>
                                        <div className='row text-center'>
                                            <div className='text-center'>
                                                Continue
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </Link>
                        </div>
                        <div className='text-center'>
                            <Link to="../Pres">
                                Save and complete registration later
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
