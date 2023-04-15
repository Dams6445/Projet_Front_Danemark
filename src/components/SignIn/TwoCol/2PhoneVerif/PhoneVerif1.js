import React from 'react'
import Step1 from '../../Steps/Step1'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const options = [
    { value: '+430', label: '+430' },
    { value: '+33', label: '+33' },
    { value: '+XX', label: '+XX' }
]

export default function PhoneVerif1() {
    return (
        <>
            <div class="col-sm-4 d-flex align-items-center">
                <Step1 />
            </div>
            <div class="col-sm-6">
                <div class="row justify-content-sm-between">
                    <div class="col-sm-2">
                        <Link to="../../TwoCol/MailVerif2">
                            {' < Back '}
                        </Link>
                    </div>
                    <div class="col-sm-3">
                        <Link to="../PhoneVerif2">
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
                            We need your phone number so that we can communicate with you even when you do not have access to the Internet.
                        </p>
                        <p class="text-start pb-4">
                            We will send you an SMS with a verification code, sometimes it can take longer.
                        </p>
                        <div class="row justify-content-start pb-5">
                            <div class="col-sm-5">
                                <Select options={options} styles={{
                                    control: (base) => ({
                                        ...base,
                                        borderRadius: '50px',
                                    }),
                                }} />
                            </div>
                            <div class="col-sm-7">
                                <input class="form-control " id="A2F1" name="A2F1" style={{ borderRadius: "50px", backgroundColor: "#F7FAFC" }} />
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-10">
                        <div class="mt-5 mb-4" >
                            <Link to="../../TwoCol/PhoneVerif2">
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
