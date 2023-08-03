import { useState, useEffect } from "react"
import React from 'react'
import '../src/showStudents.css';
import Updatedetails from './updatedetails';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

const ShowStudents = () => {
   const [students, setStudents] = useState([]);
   const [view,setView] = useState()
   
    
  useEffect(() => {
    fetch("/get-students",{
      mode: 'no-cors'
    })
    .then((response)=>response.json())
      .then(( {data} ) => {
        setStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, [students]);
   
    return (
      <div>
      {/* <h1>Students Details</h1> */}
      <div className="totControl">
     
      {students.map((details)=>(
          <div key={details.id}
          className="view-details">
            
            <table className = 'viewForm'>
              <tbody>
                <tr>
                  
                  <DriveFileRenameOutlineIcon />
                
                <td className='align'><label htmlFor='id' >  ID : </label></td>
                  <td className="space">
                  {details.id ? details.id:"NULL"} |
                  </td>
                  <td className='align'><label htmlFor='id' >  FIRST NAME : </label></td>
                  <td >
                 {details.first_name ? details.first_name:"NULL"} |
                  </td>
                  <td className='align'><label htmlFor='id' >  LAST NAME : </label></td>
                  <td  >
                  {details.last_name ? details.last_name:"NULL"} |
                  </td>
                  <td className='align'><label htmlFor='id' >  EMAIL ID : </label></td>
                  <td>
                  {details.email_id} |
                  </td>
                  <td className='align'><label htmlFor='id' >  TAMIL : </label></td>
                  <td>
                  {details.mark ? details.mark.tamil:"NULL"} |
                  </td>
                  <td className='align'><label htmlFor='id' >  ENGLISH : </label></td>
                  <td>
                  {details.mark ? details.mark.english:"NULL"} |
                  </td>
                  <td className='align'><label htmlFor='id' >  MATHS : </label></td>
                  <td>
                  {details.mark ? details.mark.maths:"NULL"} |
                  </td>
                </tr>
              </tbody>
            </table>
          
          </div>
        
      ))}
    </div>
    </div>
  )
}

export default ShowStudents
