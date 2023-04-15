import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Facebook, Google, TelephoneFill, Envelope } from 'react-bootstrap-icons';

function MyModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.buttonText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
            <h5 className="text-center mt-5 mb-5">Welcome to Book2wheel</h5>
            <div className="d-flex flex-column align-items-center">
                {/* Continue with Facebook Button */}
                <button type="button" className="btn btn-primary rounded-pill w-75 mt-1 mb-1">
                  <div className='container'>
                    <div className='row'>
                      <div className='col-sm-2'>
                        <span class="btn-label">
                        <Facebook/>
                        </span>
                      </div>
                      <div className='col-sm-10'>
                        Continue with Facebook
                      </div>
                    </div>
                  </div>
                </button>
                {/* Continue with Google Button */}
                <button type="button" className="btn btn-secondary rounded-pill w-75 mt-1 mb-1">
                  <div className='container'>
                    <div className='row'>
                      <div className='col-sm-2'>
                        <span class="btn-label">
                        <Google/>
                        </span>
                      </div>
                      <div className='col-sm-10 align-items-left'>
                        Continue with Google
                      </div>
                    </div>
                  </div>
                </button>
                {/* Continue with Phone Button */}
                <button type="button" className="btn btn-secondary rounded-pill w-75 mt-1 mb-1">
                  <div className='container'>
                    <div className='row'>
                      <div className='col-sm-2'>
                        <span class="btn-label">
                          <TelephoneFill/>
                        </span>
                      </div>
                      <div className='col-sm-10 align-items-left'>
                        Continue with phone number
                      </div>
                    </div>
                  </div>
                </button>
                {/* Continue with Email Button */}
                <button type="button" className="btn btn-secondary rounded-pill w-75 mt-1 mb-1">
                  <div className='container'>
                    <div className='row'>
                      <div className='col-sm-2'>
                        <span class="btn-label">
                        <Envelope/>
                        </span>
                      </div> 
                      <div className='col-sm-10 align-items-left'>
                        Continue with e-mail
                      </div>
                    </div>
                  </div>
                </button>      
            </div>
            <p className='text-center mt-4 modal_footer'>*by signing up you accept our <a href='aLink'>Terms & Conditions</a> and <a href='aLink'>Privacy Policy</a></p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;
