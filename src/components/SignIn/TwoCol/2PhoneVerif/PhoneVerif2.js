import React from 'react'
import { Link } from 'react-router-dom'
import Step1 from '../../Steps/Step1'

export default function PhoneVerif2() {
    return (
        <>
            <div class="col-sm-4 d-flex align-items-center">
                <Step1 />
            </div>
            <div class="col-sm-6">
                <div class="row justify-content-sm-between">
                    <div class="col-sm-2">
                        <Link to="../PhoneVerif1">
                            {' < Back '}
                        </Link>
                    </div>
                    <div class="col-sm-3">
                        <Link to="../../TwoCol/Name">
                            {' Skip for now '}
                        </Link>
                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-8">
                        <h3 class="text-start font-weight-bold pt-5 pb-3">
                            Phone number verification
                        </h3>
                        <p class="text-start">
                            Enter below the cerification code we sent to +43097281928.
                        </p>
                        <p class="text-start pb-4">
                            If you did not receive the SMS, have it sent again.
                        </p>
                        <div class="text-start pb-5">
                            <Link to="aLink">
                                <button type="button" className="btn btn-light rounded-pill border">
                                    Resend code
                                </button>
                            </Link>
                        </div>
                        <div class="row justify-content-sm-center">
                            <div class="col-sm-2">
                                <input class="form-control " style={{ backgroundColor: "#F7FAFC" }} />
                            </div>
                            <div class="col-sm-2">
                                <input class="form-control " style={{ backgroundColor: "#F7FAFC" }} />
                            </div>
                            <div class="col-sm-2">
                                <input class="form-control " style={{ backgroundColor: "#F7FAFC" }} />
                            </div>
                            <div class="col-sm-2">
                                <input class="form-control " style={{ backgroundColor: "#F7FAFC" }} />
                            </div>
                            <div class="col-sm-2">
                                <input class="form-control " style={{ backgroundColor: "#F7FAFC" }} />
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-10">
                        <div class="mt-5 mb-4" >
                            <Link to="../../TwoCol/Name">
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
