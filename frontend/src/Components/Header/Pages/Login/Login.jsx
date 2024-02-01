import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
  // const [values, setValues] = useState({
  //   email: '',
  //   password: '',
  // });
  // const [error, setError] = useState(null);
  // const navigate = useNavigate();

  // axios.defaults.withCredentials = true;

  // const handleLogin = (role) => {
  //   if (role === 'admin') {
  //     navigate('/dashboard');
  //   } else if (role === 'employee') {
  //     navigate('/employee');
  //   }
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post('http://localhost:3000/auth/login', values)
  //     .then((result) => {
  //       if (result.data.loginStatus) {
  //         localStorage.setItem('LoggedIn', true);
  //         handleLogin(result.data.role); // Redirect based on the returned role
  //       } else {
  //         setError(result.data.error);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 w-25 rounded border loginForm'>
        {/* <div className='text-warning'>{error && error}</div> */}
        <h2>Login Page</h2>
        <form >
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email:</strong>
            </label>
            <input
              
              type='email'
              name='email'
              autoComplete='off'
              placeholder='enter email'
              className='form-control rounded-0'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password:</strong>
            </label>
            <input
              
              type='password'
              name='password'
              placeholder='enter password'
              className='form-control rounded-0'
            />
          </div>
          <button className='btn btn-success w-100 rounded-0 mb-2' type="submit">
            Submit
          </button>

          <div className='mb-3'>
            <input
              type='checkbox'
              name='tick'
              id='tick'
              className='me-2'
            />
            <label htmlFor='password'>
              {' '}
              I agree with the terms & conditions.
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;