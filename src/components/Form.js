import { useState } from 'react';


function RegForm() {

  return (
    <div className="RegForm container">
        <div className="bg-primary">
            <h2 className="text-light">This is Reg Form</h2>
        </div>
      <form>
        <div className="mb-3">
            <label 
                htmlFor="exampleInputEmail1" 
                className="form-label"
                >
                    Email address
            </label>
            <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                value={users.Email}
                name='Email'
            />
            <small className='text-danger'>{errors.EmailErr}</small>
        </div>

        <div className="mb-3">
            <label 
                htmlFor="exampleInputPassword1" 
                className="form-label"
            >
                UserName
            </label>
            <input 
                type="text" 
                className="form-control" 
                id="exampleInputPassword1"
                value={users.UserName}
                name="UserName" 
            />
            <small className='text-danger'>{errors.UserNameErr}</small>
        </div>

        <div className="mb-3">
            <label 
                htmlFor="exampleInputPassword1" 
                className="form-label"
            >
                Name
            </label>
            <input 
                type="text" 
                className="form-control" 
                id="exampleInputPassword1"
                value={users.Name}
                name="Name" 
            />
            <small className='text-danger'>{errors.NameErr}</small>
        </div>

        <div className="mb-3">
            <label 
                htmlFor="exampleInputPassword1" 
                className="form-label"
            >
                Password
            </label>
            <input 
                type="text" 
                className="form-control" 
                id="exampleInputPassword1"
                value={users.Password}
                name="Password" 
            />
            <small className='text-danger'>{errors.PasswordErr}</small>
        </div>
        <div className="mb-3">
            <label 
                htmlFor="exampleInputPassword1" 
                className="form-label"
            >
                confirmPassword
            </label>
            <input 
                type="text" 
                className="form-control" 
                id="exampleInputPassword1"
                value={users.confirmPassword}
                name="confirmPassword" 
            />
            <small className='text-danger'>{errors.confirmPasswordErr}</small>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default RegForm;
