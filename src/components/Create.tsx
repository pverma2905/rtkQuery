import React, { useState } from 'react'
import { useAddStudentMutation, useGetStudentsQuery } from '../feature/studentSlice';
import { Student } from '../models/student.model';
import { useNavigate } from 'react-router-dom';


export default function Create() {

  const [students, setStudents] =useState<Student>(Object);
  const [addStudent] = useAddStudentMutation();
  const navigate = useNavigate();

  const handleChange = (e:any)=>{
    setStudents({...students,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e:any)=>{
    e.preventDefault()
    console.log(students)
   await addStudent(students)
   navigate("/")
  }

  return (
    <div className='container mx-auto'>
        <h2>Create</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
          <label htmlFor="firstName" className="form-label">FirstName</label>
          <input type="text" name="firstName" className="form-control" id="firstName" aria-describedby="emailHelp" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">LastName</label>
          <input type="text" name="lastName" className="form-control" id="lastName" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" className="form-control" id="email" onChange={handleChange} />
            </div>
              <div className="mb-3">
                  <label htmlFor="gender" className="label">Gender
                  </label>
                    <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" onChange={handleChange} name="gender" id="inlineRadio1" value="male"/>
                          <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" onChange={handleChange} name="gender" id="inlineRadio2" value="female"  />
                          <label className="form-check-label" htmlFor="inlineRadio2">Female</label></div>
            </div>
            <div className="mb-3">
                <label htmlFor="country" className="form-label">Country
                </label>
          <select className="form-select" onChange={handleChange} aria-label="Default select example" name="country" >
                      <option value="Select Country">Select Country</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="japan">Japan</option>
                </select>
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
