import React from "react";
import { Outlet, Link } from 'react-router-dom';

export default function SignIn() {
    return (
        <div class="container" >
            <div class="row justify-content-sm-start">
                <div class="col-sm-2">
                    <Link to="/">
                        {' < Back '}
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
}