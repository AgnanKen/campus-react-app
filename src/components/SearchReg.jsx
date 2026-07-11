import React from 'react'
import NavBar from './NavBar'

const SearchReg = () => {
  return (
    <div>
        <NavBar />
        <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">


                <center><h2>Search Student Details</h2></center>  
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Student Registration Number
                </label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-warning">Submit</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchReg