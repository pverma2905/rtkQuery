import { NavLink } from 'react-router-dom';
import { useDeleteStudentMutation, useGetStudentsQuery } from '../feature/studentSlice';

export default function Read() {
    const { data:students, isSuccess, isError,error, isLoading } = useGetStudentsQuery();
    const [deleteStudent] = useDeleteStudentMutation();
    return (
        <div className='container mx-auto'>
            <h2>Read</h2>
            <div className="row">
                {isLoading && <span>Loading......</span>}
                {isError && <span>Something Went Wrong</span>}
                {isSuccess && students?.map((student)=>(
                    <div className="col-3" key={student?.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{student.firstName + " " + student.lastName}</h5>
                                {/* <h6 className="card-subtitle mb-2 text-body-secondary"></h6> */}
                                <div className="card-text">{student.email}</div>
                                <div className="card-text">{student.gender}</div>
                                <div className="card-text">{student.country}</div>
                                
                                <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>Delete</button>
                                <button className="btn btn-success">
                                    <NavLink to={`edit/${student?.id}`} className="decoration" style={{color:'white'}}>Edit</NavLink>  
                                </button>
                            </div>
                        </div>
                    </div>
                ))
                    
                }
                
            </div>
        </div>
    )
}
