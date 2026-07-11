import React from 'react'

const DeleteReg = () => {
  return (
    <div>
        <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">

                <center><h2>Delete Student Details</h2></center>  
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Student Registration Number
                </label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-danger">Delete Student</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteReg