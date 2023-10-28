import React, { useState,useEffect } from 'react'
import { useAddStudentMutation, useGetStudentQuery, useUpdateStudentMutation } from '../feature/studentSlice';
import { Student } from '../models/student.model';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
    const [students, setStudents] = useState<Student>(Object);
    const [updateStudent] = useUpdateStudentMutation();
    const navigate = useNavigate();
    const {id} = useParams();
    // console.log("iddd",id)
    const { data } = useGetStudentQuery(id!);
    // console.log("datat",data)
   
       

    const handleChange = (e: any) => {
        setStudents({ ...students, [e.target.name]: e.target.value })
    }  
    
    useEffect(()=>{
        if(id && data){
        setStudents({...data});
        }
    },[id, data])

   

    const handleSubmit = async (e: any) => {
       
        e.preventDefault()
        await updateStudent(students)
        navigate("/")
    }
  return (
      <div className='container mx-auto'>
          <h2>Edit</h2>
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">FirstName</label>
                  <input type="text" name="firstName" className="form-control" id="firstName" aria-describedby="emailHelp" onChange={handleChange}
                      value={students?.firstName || ''}
                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">LastName</label>
                  <input type="text" name="lastName" className="form-control" id="lastName" onChange={handleChange} value={students?.lastName || ''} />
              </div>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" id="email" onChange={handleChange} value={students?.email || ''} />
              </div>
              <div className="mb-3">
                  {/* <label htmlFor="gender" className="label">Gender
                  </label> */}
                  <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" onChange={handleChange} name="gender" id="inlineRadio1" 
                          checked={students.gender==="male" ? true : false}
                          value="male"
                      
                      />
                      <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" onChange={handleChange} name="gender" id="inlineRadio2" 
                          checked={students && students.gender==="female" ? true : false}
                          value="female"
                      />
                      <label className="form-check-label" htmlFor="inlineRadio2">Female</label></div>
              </div>
              {students?.gender}
              <div className="mb-3">
                  <label htmlFor="country" className="form-label">Country
                  </label>
                  <select className="form-select" onChange={handleChange} aria-label="Default select example" name="country" value={students.country ||''} >
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
