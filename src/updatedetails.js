import React, { useState } from 'react'


const Updatedetails = () => {
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
    const submitHandler = (e) => {
        e.preventDefault()
        fetch('/update', {
            method: 'PUT',
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
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='input-box2'>
                    <lable>ENTER EMAIL-ID TO UPDATE</lable>
                    <input
                        className='last-name'
                        type='text'
                        maxLength={200}
                        onChange={updateHandler}
                    >
                    </input>
                    <lable>UPDATE LAST-NAME</lable>
                    <input
                        className='last-name'
                        type='text'
                        maxLength={20}
                        onChange={updateNameHandler}
                    >
                    </input>
                    <h1>UPDATE MARKS</h1>
                    <lable>TAMIL</lable>
                    <input
                        className='last-name'
                        type='text'
                        maxLength={20}
                        onChange={handleTamil}
                    >
                    </input>
                    <lable>ENGLISH : </lable>
                    <input
                        className='mark'
                        type='number'
                        onChange={handleEnglish}
                    ></input>
                    <lable>MATHS : </lable>
                    <input
                        className='mark'
                        type='number'
                        onChange={handleMaths}
                    ></input>
                </div>
                <button>UPDATE</button>
            </form>
        </div>
    )
}

export default Updatedetails
