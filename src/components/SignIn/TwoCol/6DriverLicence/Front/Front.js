import React from 'react'
import { Link } from 'react-router-dom'

export default function Front() {
    return (
        <>
            <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                <div class="col-sm-8">
                    <h3 class="text-start font-weight-bold pt-5 pb-3">
                        Front side of drivers license
                    </h3>
                    <p class="text-start pb-3">
                        We will use this information to verify that you can drive.
                    </p>
                    <div class="row justify-content-sm-center pb-3">
                        <div class="col-sm-10">
                            {/* TODO : insert img */}
                        </div>
                    </div>
                    <p class="text-start">
                        Make sure the photo is clear and readable.
                    </p>
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
                        <Link to="../../../TwoCol/DriverLicence/Back">
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
        </>
    )
}
