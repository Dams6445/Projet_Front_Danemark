import React from "react";
import MyModal from '../Modal.js';
import { Link } from 'react-router-dom';

import { Facebook, Google, TelephoneFill, Envelope } from 'react-bootstrap-icons';


export default function Home() {
  const handleSave = () => {
    console.log('Enregistrer les modifications');
  };
  return (
    <div class="container">
      <div class="row justify-content-sm-center">
        <div class="col-sm-2">
          {/* Button Modal Frame*/}
          <MyModal
            buttonText="Sign In Modal"
            title="Sign In"
            content="Sign In"
            onSave={handleSave}
          />
        </div>
      </div>
      <div class="row justify-content-sm-start">
        <div class="col-sm-2">
          <Link to="/">
            {' < Back '}
          </Link>
        </div>
      </div>
      <div class="row justify-content-sm-center">
        <h5 className="text-center mt-5 mb-5">Welcome to Book2wheel</h5>
        <div className="d-flex flex-column align-items-center">
          {/* Continue with Facebook Button */}
          <Link to="/signIn/Onecol/Usage" class="w-100">
            <button type="button" className="btn btn-primary rounded-pill w-25 mt-1 mb-1">
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-2'>
                    <span class="btn-label">
                      <Facebook />
                    </span>
                  </div>
                  <div className='col-sm-10'>
                    Continue with Facebook
                  </div>
                </div>
              </div>
            </button>
          </Link>
          {/* Continue with Google Button */}
          <Link to="/signIn/Onecol/Usage" class="w-100">
            <button type="button" className="btn btn-secondary rounded-pill w-25 mt-1 mb-1">
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-2'>
                    <span class="btn-label">
                      <Google />
                    </span>
                  </div>
                  <div className='col-sm-10 align-items-left'>
                    Continue with Google
                  </div>
                </div>
              </div>
            </button>
          </Link>
          {/* Continue with Phone Button */}
          <Link to="/signIn/Onecol/Usage" class="w-100">
            <button type="button" className="btn btn-secondary rounded-pill w-25 mt-1 mb-1">
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-2'>
                    <span class="btn-label">
                      <TelephoneFill />
                    </span>
                  </div>
                  <div className='col-sm-10 align-items-left'>
                    Continue with phone number
                  </div>
                </div>
              </div>
            </button>
          </Link>
          {/* Continue with Email Button */}
          <Link to="/signIn/Onecol/Usage" class="w-100">
            <button type="button" className="btn btn-secondary rounded-pill w-25 mt-1 mb-1">
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-2'>
                    <span class="btn-label">
                      <Envelope />
                    </span>
                  </div>
                  <div className='col-sm-10 align-items-left'>
                    Continue with e-mail
                  </div>
                </div>
              </div>
            </button>
          </Link>
        </div>
        <p className='text-center mt-4 modal_footer'>*by signing up you accept our <a href='aLink'>Terms & Conditions</a> and <a href='aLink'>Privacy Policy</a></p>
      </div>
    </div>
  );

}

