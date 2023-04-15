import React from 'react'
import Step0 from '../../Steps/Step0'
import { Link } from 'react-router-dom'

export default function MailVerif1() {
    return (
        <>
            <div class="col-sm-4 d-flex align-items-center">
                <Step0 />
            </div>
            <div class="col-sm-6">
                <div class="row justify-content-sm-between">
                    <div class="col-sm-2">
                        <Link to="../../Onecol/Pres">
                            {' < Back '}
                        </Link>
                    </div>
                    <div class="col-sm-3">
                        <Link to="../MailVerif2">
                            {' Skip for now '}
                        </Link>
                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-8">
                        <h3 class="text-start font-weight-bold pt-5 pb-3">
                            E-mail verification
                        </h3>
                        <p class="text-start pb-5">
                            We will send you an e-mail with a verification code, sometimes it can take longer.
                        </p>
                        <div class="text-start">
                            <form>
                                <label class="form-label" for="email">E-mail</label>
                                <input class="form-control " type="email" id="email" name="email" placeholder="E-mail" style={{ borderRadius: "50px", backgroundColor: "#F7FAFC" }} />
                            </form>

                        </div>

                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-10">
                        <div class="mt-5 mb-4" >
                            <Link to="../../TwoCol/MailVerif2">
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
