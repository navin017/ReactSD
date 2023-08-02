import React, { useState ,useEffect } from 'react';
import '../src/getOne.css'
import { FaSearch } from "react-icons/fa";


const GetOneDetails = () => {
    const [student, setStudent] = useState('');
    const [records,setRecords] = useState([])
    const handleGetOne = (e) => {
        setStudent(e.target.value)
    }
//    useEffect(() => {
//     submitHandler()
//   },[])
    const submitHandler = (e) => {
        e.preventDefault()
     
    fetch("/get-one?id="+student,{
        method:'GET',
      mode: 'no-cors',
      headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
    })
    .then((response) => response.json())
         .then(({data}) => {
        setRecords(data)
        console.log("Fetched Successfully", data)
      })
  
  console.log(student, "++++++++")
 

         
        // fetch('/get-one?id='+student, {
        //     mode: 'no-cors',
        //     method: 'GET',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        // })
        //     .then((response) => response.json())
        //     .then(({data}) => {
        //         setRecords(data)
        //         console.log("Fetched Successfully", data)
        //     })
        //     .catch((err) => {
        //         console.log("Error Occured", err)
        //     })
        }
       
        
    return (
        
        <div>
          
            {records && records.map((detail,index)=>{
        return(
          <div key={index}>
          <ul>
            <li>
              {detail.first_name? detail.first_name:"NULL" }
            </li>
            <li>
              {detail.last_name ? detail.last_name:"NULL"}
            </li>
            <li>
              {detail.email_id ? detail.email_id:"NULL"}
            </li>
            <li>
              {detail.id ? detail.id:"NULL"}
            </li>
            <li>
              {detail.mark ? detail.mark.english:"NULL"}
            </li>
            <li>
              {detail.mark ? detail.mark.tamil:"NULL"}
            </li>
            <li>
              {detail.mark ? detail.mark.maths:"NULL"}
            </li>

          </ul>
          </div>
        )
      })}
      
      <form onSubmit={submitHandler}>
            <div className='get'>
                <input
                    className='getOne-box'
                    type='text'
                    maxLength={23}
                    onChange={handleGetOne}
                    placeholder='Search by id'
                    >
                </input>
            <FaSearch id="search-icon" />
            </div>
        </form>
        </div>
    )
}

export default GetOneDetails
