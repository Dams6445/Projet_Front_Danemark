import React from 'react'
import Step0 from '../../Steps/Step0'
import { Link } from 'react-router-dom'

export default function MailVerif2() {
    return (
        <>
            <div class="col-sm-4 d-flex align-items-center">
                <Step0 />
            </div>
            <div class="col-sm-6">
                <div class="row justify-content-sm-between">
                    <div class="col-sm-2">
                        <Link to="../MailVerif1">
                            {' < Back '}
                        </Link>
                    </div>
                    <div class="col-sm-3">
                        <Link to="../../TwoCol/PhoneVerif1">
                            {' Skip for now '}
                        </Link>
                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-8">
                        <h3 class="text-start font-weight-bold pt-5 pb-3">
                            E-mail verification
                        </h3>
                        <p class="text-start">
                            Check your inbox. To verify type in the code from the e-mail we sent to example@gmail.com.
                        </p>
                        <p class="text-start pb-4">
                            If you do not see the e-mail check your spam folder. If you can't find it there either, have it sent to you again.
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
                            <Link to="../../TwoCol/PhoneVerif1">
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
