import React from 'react'
import { Outlet } from 'react-router'

export default function TwoCol() {
  return (
    <div class="container">
      <div class="row justify-content-sm-center">
        <Outlet />
      </div>
    </div>
  )
}
