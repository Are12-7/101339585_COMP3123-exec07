import React from "react"
  
const Student = (props) => {
    const stu = props.student;
  
    return (
       <React.Fragment>
       <div className="student">
           <h2>{stu.title} </h2>
           <h3>{stu.id} </h3>
           <h4>{stu.name} </h4>
           <h5>{stu.college} </h5>
            </div>  
    </React.Fragment>
   )
}
  
export default Student;