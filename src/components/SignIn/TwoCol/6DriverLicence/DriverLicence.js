import React from 'react'
import Step3 from '../../Steps/Step3'
import { Link, Outlet } from 'react-router-dom'
// import Select from 'react-select'

export default function DriverLicence() {
    return (
        <>
            <div class="col-sm-4 d-flex align-items-center">
                <Step3 />
            </div>
            <div class="col-sm-6">
                <div class="row justify-content-sm-between">
                    <div class="col-sm-2">
                        <Link to="../../TwoCol/Birth">
                            {' < Back '}
                        </Link>
                    </div>
                    <div class="col-sm-3">
                        <Link to="../../TwoCol/AddInfo1">
                            {' Skip for now '}
                        </Link>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}
