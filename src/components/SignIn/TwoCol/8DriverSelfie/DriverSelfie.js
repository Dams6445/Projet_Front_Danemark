import React from 'react'
import Step4 from '../../Steps/Step4'
import { Link } from 'react-router-dom'

export default function DriverSelfie() {
    return (
        <>
            <div class="col-sm-4 d-flex align-items-center">
                <Step4 />
            </div>
            <div class="col-sm-6">
                <div class="row justify-content-sm-between">
                    <div class="col-sm-2">
                        <Link to="../../TwoCol/AddInfo2">
                            {' < Back '}
                        </Link>
                    </div>
                    <div class="col-sm-3">
                        <Link to="../../TwoCol/AllDone">
                            {' Skip for now '}
                        </Link>
                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-8">
                        <h3 class="text-start font-weight-bold pt-5 pb-3">
                        Selfie with a driving license
                        </h3>
                        <p class="text-start pb-3">
                        Make sure the selfie is not blurred and readable.
                        </p>
                        <div class="row justify-content-sm-center pb-3">
                            <div class="col-sm-10">
                                {/* TODO : insert img */}
                            </div>
                        </div>
                        <div class="text-start">
                            <Link to="aLink">
                                <button type="button" className="btn btn-light rounded-pill border">
                                    Browse
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-10">
                        <div class="mt-5 mb-4" >
                            <Link to="../../TwoCol/AllDone">
                                <button type="button" className="btn btn-primary rounded-pill border mt-1 mb-1 w-100 h-100">
                                    <div className='container'>
                                        <div className='row text-center'>
                                            <div className='text-center'>
                                                Upload
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
