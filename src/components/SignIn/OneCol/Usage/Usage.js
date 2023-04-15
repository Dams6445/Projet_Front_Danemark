import React from 'react';
import { CarFrontFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

//TODO: Remplace href="aLink" by your link

export default function OneCol() {
  return (
    <div class="container">
      <div class="row justify-content-sm-center">
        <div class="col-sm-5">
          <h3 class="text-start font-weight-bold pb-3">
            How do you want to use Book2wheel ?
          </h3>
          <p class="text-start">
            Tell us how you primarily want to use Book2wheel so we can guide you better through the registration process and support you later  on your adventure with us.
          </p>
          <div class="my-4" style={{ height: "10%" }}>
            <button type="button" className="btn btn-light rounded-pill border mt-1 mb-1 w-100 h-100">
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-sm-1'>
                    <input type="checkbox" />
                  </div>
                  <div className='col-sm-9 text-start'>
                    I want to rent a vehicle
                  </div>
                  <div className='col-sm-1'>
                    <CarFrontFill />
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div class="my-4" style={{ height: "10%" }}>
            <button type="button" className="btn btn-light rounded-pill border mt-1 mb-1 w-100 h-100">
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-sm-1'>
                    <input type="checkbox" />
                  </div>
                  <div className='col-sm-9 text-start'>
                    I want to offer a vehicle
                  </div>
                  <div className='col-sm-1'>
                    <CarFrontFill />
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div class="my-4" style={{ height: "10%" }}>
            <button type="button" className="btn btn-light rounded-pill border mt-1 mb-1 w-100 h-100">
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-sm-1'>
                    <input type="checkbox" />
                  </div>
                  <div className='col-sm-9 text-start'>
                    I want both
                  </div>
                  <div className='col-sm-1'>
                    <CarFrontFill />
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div class="my-4" style={{ height: "10%" }}>
            <button type="button" className="btn btn-light rounded-pill border mt-1 mb-1 w-100 h-100">
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-sm-1'>
                    <input type="checkbox" />
                  </div>
                  <div className='col-sm-9 text-start'>
                    Not sure yet
                  </div>
                  <div className='col-sm-1'>
                    <CarFrontFill />
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div class="mt-5 mb-4" style={{ height: "10%" }}>
            <Link to="../Pres">
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
            <Link to="aLink">
              Save and complete registration later
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
