
function AddService ()  {

    return (
      <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="p-3 rounded w-50 border">
          <h3 className="text-center">Add Service</h3>
          <form className="row g-1" >
            <div className="col-12">
              <label htmlFor="inputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputName"
                placeholder="Enter Name"
              
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control rounded-0"
                id="inputEmail4"
                placeholder="Enter Email"
                autoComplete="off"
               
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded-0"
                id="inputPassword4"
                placeholder="Enter Password"
               
              />
              <label htmlFor="inputSalary" className="form-label">
                Salary
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputSalary"
                placeholder="Enter Salary"
                autoComplete="off"
               
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputAddress"
                placeholder="1234 Main St"
                autoComplete="off"
                
              />
            </div>
            <div className="col-12">
              <label htmlFor="category" className="form-label">
                Role
              </label>
              <select
                name="category"
                id="category"
                className="form-select"
                
              >
                <option value="">Select a role</option>
                
              </select>
            </div>
            <div className="col-12 mb-3">
              <label className="form-label" htmlFor="inputGroupFile01">
                Select Image
              </label>
              <input
                type="file"
                className="form-control rounded-0"
                id="inputGroupFile01"
                name="image"
                
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Add Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default AddService;
  