import React from 'react'
import Step2 from '../../Steps/Step2'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const optionsDay = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
    { value: '16', label: '16' },
    { value: '17', label: '17' },
    { value: '18', label: '18' },
    { value: '19', label: '19' },
    { value: '20', label: '20' },
    { value: '21', label: '21' },
    { value: '22', label: '22' },
    { value: '23', label: '23' },
    { value: '24', label: '24' },
    { value: '25', label: '25' },
    { value: '26', label: '26' },
    { value: '27', label: '27' },
    { value: '28', label: '28' },
    { value: '29', label: '29' },
    { value: '30', label: '30' },
    { value: '31', label: '31' },
]

const optionsMonth = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
]

const optionsYear = [
    { value: '1990', label: '1990' },
    { value: '1991', label: '1991' },
    { value: '1992', label: '1992' },
    { value: '1993', label: '1993' },
    { value: '1994', label: '1994' },
    { value: '1995', label: '1995' },
    { value: '1996', label: '1996' },
    { value: '1997', label: '1997' },
    { value: '1998', label: '1998' },
    { value: '1999', label: '1999' },
    { value: '2000', label: '2000' },
    { value: '2001', label: '2001' },
    { value: '2002', label: '2002' },
    { value: '2003', label: '2003' },
    { value: '2004', label: '2004' },
    { value: '2005', label: '2005' },
    { value: '2006', label: '2006' },
    { value: '2007', label: '2007' },
    { value: '2008', label: '2008' },
    { value: '2009', label: '2009' },
    { value: '2010', label: '2010' },
    { value: '2011', label: '2011' },
    { value: '2012', label: '2012' },
    { value: '2013', label: '2013' },
    { value: '2014', label: '2014' },
    { value: '2015', label: '2015' },
    { value: '2016', label: '2016' },
    { value: '2017', label: '2017' },
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' }
]

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

export default function Birth() {
    return (
        <>
            <div class="col-sm-4 d-flex align-items-center">
                <Step2 />
            </div>
            <div class="col-sm-6">
                <div class="row justify-content-sm-between">
                    <div class="col-sm-2">
                        <Link to="../../TwoCol/Adress">
                            {' < Back '}
                        </Link>
                    </div>
                    <div class="col-sm-3">
                        <Link to="../../TwoCol/DriverLicence/Front">
                            {' Skip for now '}
                        </Link>
                    </div>
                </div>
                <div class="row justify-content-sm-center" style={{ borderLeft: "1px solid", borderLeftColor: "#718096" }}>
                    <div class="col-sm-8">
                        <h3 class="text-start font-weight-bold pt-5 pb-3">
                            Date of Birth
                        </h3>
                        <div class="row justify-content-sm-between text-start pb-4">
                            <div class="col-sm-3">
                                <label class="form-label" for="Day">Day</label>
                                <Select options={optionsDay} styles={{
                                    control: (base) => ({
                                        ...base,
                                        borderRadius: '50px',
                                        backgroundColor: "#F7FAFC"
                                    }),
                                }} />
                            </div>
                            <div class="col-sm-4">
                                <label class="form-label" for="Month">Month</label>
                                <Select options={optionsMonth} styles={{
                                    control: (base) => ({
                                        ...base,
                                        borderRadius: '50px',
                                        backgroundColor: "#F7FAFC"
                                    }),
                                }} />
                            </div>
                            <div class="col-sm-3">
                                <label class="form-label" for="Year">Year</label>
                                <Select options={optionsYear} styles={{
                                    control: (base) => ({
                                        ...base,
                                        borderRadius: '50px',
                                        backgroundColor: "#F7FAFC"
                                    }),
                                }} />
                            </div>
                        </div>
                        <h3 class="text-start font-weight-bold pt-5 pb-3">
                            Nationality
                        </h3>
                        <div class="row justify-content-sm-between text-start pb-4">
                            <div class="col-sm-6">
                                <label class="form-label" for="email">Nationality</label>
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
                            <Link to="../../TwoCol/DriverLicence/Front">
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
