import React from 'react'
import Step5 from '../../Steps/Step5'
import { Link } from 'react-router-dom'

export default function AllDone() {
    return (
        <>
            <div class="col-sm-4 d-flex align-items-center">
                <Step5 />
            </div>
            <div class="col-sm-6">
                <div class="row justify-content-sm-between">
                    <div class="col-sm-2">
                        <Link to="../../TwoCol/DriverSelfie">
                            {' < Back '}
                        </Link>
                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-10">
                        <h3 class="text-start font-weight-bold pt-5 pb-3">
                            All done!
                        </h3>
                        <p class="text-start mb-0">
                            Your profile is complete. Your profile is waiting for approval.
                        </p>
                        <p class="text-start mb-0 pb-5">
                            The verification process might take a while.
                        </p>
                        <p class="text-start mb-0 pb-3">
                            Can't wait for your first ride? Add a  payment method now to speed up the boooking process.
                        </p>
                        <div class="text-start pb-5">
                            <Link to="aLink">
                                <button type="button" className="btn btn-light rounded-pill border">
                                    Add payment method
                                </button>
                            </Link>
                        </div>
                        <p class="text-start mb-0">
                            Do you want your vehicle to make you money on Book2wheel?
                        </p>
                        <p class="text-start mb-0 pb-3">
                            Don't wait and register your vehicle now.
                        </p>
                        <div class="text-start pb-3">
                            <Link to="aLink">
                                <button type="button" className="btn btn-light rounded-pill border">
                                    Add vehicle
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-10">
                        <div class="mt-5 mb-4" >
                            <Link to="../../../TwoCol/AddInfo1">
                                <button type="button" className="btn btn-primary rounded-pill border mt-1 mb-1 w-100 h-100">
                                    <div className='container'>
                                        <div className='row text-center'>
                                            <div className='text-center'>
                                                Browse listings
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
