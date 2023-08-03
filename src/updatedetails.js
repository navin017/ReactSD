import React, { useState } from 'react'
import '../src/update.css'



const Updatedetails = ({updateClose}) => {
    const [update, setUpdate] = useState('')
    const [updateName, setUpdateName] = useState('')
    const [tamil, setTamil] = useState("");
    const [english, setEnglish] = useState("");
    const [maths, setMaths] = useState("")

    const updateHandler = (e) => {
        setUpdate(e.target.value)
    }
    const updateNameHandler = (e) => {
        setUpdateName(e.target.value)
    }
    const handleTamil = (e) => {
        setTamil(e.target.value)
    }
    const handleEnglish = (e) => {
        setEnglish(e.target.value)
    }
    const handleMaths = (e) => {
        setMaths(e.target.value)
    }
    const closeHandler = (e)=>{
        // e.preventDefault()
        updateClose()
        setUpdate("");
        setEnglish("");
        setMaths("");
        setTamil("");
        setUpdateName("");
    }
    const submitHandler = (e) => {
       
        fetch('/update', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: update,
                updateName: {
                    last_name: updateName
                },
                updatedMarks: {
                    tamil: tamil,
                    english: english,
                    maths: maths
                }
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Updated Successfully", data.message)
            })
            .catch((err) => {
                console.log("Error Occured", err)
            })
            updateClose()
    }
    return (
       
        <form onSubmit={submitHandler}>

        <div className='total'>
          <table className='covers'>
            <tr>
              <td>
              <lable>ENTER EMAIL-ID TO UPDATE</lable><br/>
                <input
                  type='text'
                  maxLength={20}
                  onChange={updateHandler}
                  className='input-box'
                  required>
                </input>
              </td>
            </tr>
            <tr>
              <td>
              <lable>UPDATE LAST-NAME</lable><br/>
            <input
              className='input-box'
              type='text'
              maxLength={20}
              onChange={updateNameHandler}
             
            >
            </input>
            </td>
            </tr>
            <tr>
              <td>
              <p>UPDATE MARKS :</p>
              <lable>TAMIL</lable><br/>
            <input
              className='input-box'
              type='number'
              maxLength={20}
              onChange={handleTamil}
              >
            </input>
            </td>
            </tr>
            <tr>
              <td>
              <lable>ENGLISH : </lable><br/>
            <input
              className='mark'
              type='number'
              onChange={handleEnglish}
             
            ></input>
             </td>
            </tr>
            <tr>
              <td>
            <lable>MATHS : </lable><br/>
            <input
              className='mark'
              type='number'
              onChange={handleMaths}
            ></input>
             </td>
            </tr>
            <button type='submit'>UPDATE</button>
            <button type='submit' onClick={closeHandler}>CLOSE</button>
          </table>
        </div>
  
      </form>
    )
}

export default Updatedetails
