import React from 'react'
import Step2 from '../../Steps/Step2'
import { Link } from 'react-router-dom'

export default function Name() {
    return (
        <>
            <div class="col-sm-4 d-flex align-items-center">
                <Step2 />
            </div>
            <div class="col-sm-6">
                <div class="row justify-content-sm-between">
                    <div class="col-sm-2">
                        <Link to="../../TwoCol/PhoneVerif2">
                            {' < Back '}
                        </Link>
                    </div>
                    <div class="col-sm-3">
                        <Link to="../../TwoCol/Adress">
                            {' Skip for now '}
                        </Link>
                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-8">
                        <h3 class="text-start font-weight-bold pt-5 pb-5">
                            What is your name?
                        </h3>
                        <div class="text-start pt-5 pb-5">
                            <form>
                                <label class="form-label" for="fName">First Name</label>
                                <input class="form-control mb-5" type="text" id="fName" name="fName" placeholder="First Name" style={{ borderRadius: "50px", backgroundColor: "#F7FAFC" }} />
                                <label class="form-label" for="sName">Second Name</label>
                                <input class="form-control " type="text" id="sName" name="sName" placeholder="Second Name" style={{ borderRadius: "50px", backgroundColor: "#F7FAFC" }} />
                            </form>

                        </div>

                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-10">
                        <div class="mt-5 mb-4" >
                            <Link to="../../TwoCol/Adress">
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
