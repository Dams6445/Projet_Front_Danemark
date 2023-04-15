import React from 'react'
import Step2 from '../../Steps/Step2'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const optionsNationality = [
    { value: '1', label: 'Afghan' },
    { value: '2', label: 'Albanian' },
    { value: '3', label: 'Algerian' },
    { value: '4', label: 'American' },
    { value: '5', label: 'Andorran' },
    { value: '6', label: 'Angolan' },
    { value: '7', label: 'Antiguans' },
    { value: '8', label: 'Argentinean' },
    { value: '9', label: 'Armenian' },
    { value: '10', label: 'Australian' }
]

export default function Adress() {
    return (
        <>
            <div class="col-sm-4 d-flex align-items-center">
                <Step2 />
            </div>
            <div class="col-sm-6">
                <div class="row justify-content-sm-between">
                    <div class="col-sm-2">
                        <Link to="../../TwoCol/Name">
                            {' < Back '}
                        </Link>
                    </div>
                    <div class="col-sm-3">
                        <Link to="../../TwoCol/Birth">
                            {' Skip for now '}
                        </Link>
                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-8">
                        <h3 class="text-start font-weight-bold pt-5 pb-5">
                            Permanent address
                        </h3>
                        <div class="row justify-content-sm-between text-start pb-4">
                            <div class="col-sm-6">
                                <label class="form-label" for="StreetN">Street Name</label>
                                <input class="form-control " id="StreetN" name="StreetN" placeholder="Street Name" style={{ borderRadius: "50px", backgroundColor: "#F7FAFC" }} />
                            </div>
                            <div class="col-sm-6">
                                <label class="form-label" for="StreetNum">Street Number</label>
                                <input class="form-control " id="StreetNum" name="StreetNum" placeholder="Street Number" style={{ borderRadius: "50px", backgroundColor: "#F7FAFC" }} />
                            </div>
                        </div>
                        <div class="row justify-content-sm-between text-start pb-4">
                            <div class="col-sm-6">
                                <label class="form-label" for="City">City</label>
                                <input class="form-control " id="City" name="City" placeholder="City" style={{ borderRadius: "50px", backgroundColor: "#F7FAFC" }} />
                            </div>
                            <div class="col-sm-6">
                                <label class="form-label" for="ZIP">ZIP code</label>
                                <input class="form-control " id="ZIP" name="ZIP" placeholder="ZIP code" style={{ borderRadius: "50px", backgroundColor: "#F7FAFC" }} />
                            </div>
                        </div>
                        <div class="row justify-content-sm-between text-start pb-4">
                            <div class="col-sm-12">
                                <label class="form-label" for="text">Country</label>
                                <Select options={optionsNationality} styles={{
                                    control: (base) => ({
                                        ...base,
                                        borderRadius: '50px',
                                        backgroundColor: "#F7FAFC"
                                    }),
                                }} />
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-10">
                        <div class="mt-5 mb-4" >
                            <Link to="../../TwoCol/Birth">
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
