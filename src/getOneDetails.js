import React, { useState ,useEffect } from 'react';
import '../src/getOne.css'
import { FaSearch } from "react-icons/fa";


const GetOneDetails = ({ onGetOneFinish }) => {
    const [student, setStudent] = useState('');
    const [records,setRecords] = useState({})
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
      // mode: 'no-cors',
      headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
    })
    .then((response) => response.json())
         .then((data) => {
          if(data && data.data){

            setRecords(data.data)
            console.log("Fetched Successfully", data)
          }
        else {
          setRecords({});
          console.log("No data found.");
      }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        onGetOneFinish();

    });
  
        }
       
        
    return (
        
        <div>
          
          {Object.keys(records).length > 0 ? (
          <div>
          <ul>
            <li>
              {records.first_name}
            </li>
            <li>
              {records.last_name }
            </li>
            <li>
              {records.email_id }
            </li>
            <li>
              {records.id}
            </li>
            <li>
              {records.mark.tamil }
            </li>
            <li>
              {records.mark.english }
            </li>
            <li>
              {records.mark.maths}
            </li>

          </ul>
          </div>
        
      ):("")
      }
      
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
