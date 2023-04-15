import React from 'react';
import { CheckCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import ModalID from './ModalID';

//TODO: Remplace href="aLink" by your link

export default function OneCol() {
    const handleSave = () => {
        console.log('Enregistrer les modifications');
      };
    return (
        <div class="container">
            <div class="row justify-content-sm-center">
                <div class="col-sm-4">
                    <h3 class="text-start font-weight-bold pb-3">
                        In the next steps...
                    </h3>
                    <p class="text-start mb-0">
                        Don't worry registration doesn’t take long.
                    </p>
                    <p class="text-start">
                        It will take only a couple of minutes.
                    </p>
                    <div class="my-4">
                        <div className='row align-items-center'>
                            <div className='col-auto text-start'>
                                <CheckCircle />
                            </div>
                            <div className='col-sm-9 text-start'>
                                E-mail verification
                            </div>
                        </div>
                    </div>
                    <div class="my-4">
                        <div className='row align-items-center'>
                            <div className='col-auto text-start'>
                                <CheckCircle />
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
                    <div class="my-4">
                        <div className='row align-items-center'>
                            <div className='col-auto text-start'>
                                Have your driving license ready for the registration.
                            </div>
                        </div>
                    </div>
                    <ModalID
                        buttonText="Why do we need to verify your identity?"
                        title="identity"
                        content="Why do we need to verify your identity?"
                        onSave={handleSave}
                    />
                </div>
            </div>
            <div class="row justify-content-sm-center">
                <div class="col-sm-5">
                    <div class="mt-5 mb-4" >
                        <Link to="../../TwoCol/MailVerif1">
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
        </div >
    )
}
