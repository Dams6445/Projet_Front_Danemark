import React from 'react'
import { CheckCircle, CheckCircleFill } from 'react-bootstrap-icons'

export default function Step2() {
    return (
        <div>
            <div class="my-4">
                <div className='row align-items-center'>
                    <div className='col-auto text-start'>
                        <CheckCircleFill color="blue" />
                    </div>
                    <div className='col-sm-9 text-start'>
                        E-mail verification
                    </div>
                </div>
            </div>
            <div class="my-4">
                <div className='row align-items-center'>
                    <div className='col-auto text-start'>
                        <CheckCircleFill color="blue" />
                    </div>
                    <div className='col-sm-9 text-start'>
                        Phone number verification
                    </div>
                </div>
            </div>
            <div class="my-4">
                <div className='row align-items-center'>
                    <div className='col-auto text-start'>
                        <CheckCircle />
                    </div>
                    <div className='col-sm-9 text-start'>
                        Basic data
                    </div>
                </div>
            </div>
            <div class="my-4">
                <div className='row align-items-center'>
                    <div className='col-auto text-start'>
                        <CheckCircle />
                    </div>
                    <div className='col-sm-9 text-start'>
                        Upload your driving license
                    </div>
                </div>
            </div>
            <div class="my-4">
                <div className='row align-items-center'>
                    <div className='col-auto text-start'>
                        <CheckCircle />
                    </div>
                    <div className='col-sm-9 text-start'>
                        Upload your selfie with a driving license
                    </div>
                </div>
            </div>
        </div>
    )
}
