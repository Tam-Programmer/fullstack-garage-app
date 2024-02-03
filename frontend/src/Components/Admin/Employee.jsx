import { Link } from "react-router-dom";

function Employee () {

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success">
        Add Employee
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              <tr >
                <td>name</td>
                <td>
                  image
                </td>
                <td>email</td>
                <td>address</td>
                <td>salary</td>
                <td>
                  <Link
                    to="/dashboard/"
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
