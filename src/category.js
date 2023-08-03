import { useState, useEffect} from 'react'
import React from 'react'


const Category =() =>{
    const [option,setOption] = useState({})
    useEffect(() => {
        fetch("/category")
        .then(response=>response.json())
        .then(({data}) => {
            setOption(data);
            console.log(data,",,,,,,,,,,,")
          })
          .catch((error) => {
            console.log(error);
          });
        }, []);
        // console.log('option',option['average'])
      //  const entries = Object.entries(option)
      //  console.log(entries,"*********")
  return (
    <div>
            <h1>Student Categories</h1>
            {Object.entries(option).map(([category, students]) => (
                <div key={category}>
                    <h2>{category}</h2>
                    {students.length > 0 ? (
                        <ul>
                            {students.map(({ student_id, total_mark, student }) => (
                                <li key={student_id}>
                                    {student.first_name} {student.last_name} - {student.email_id} - Total Mark: {total_mark}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No students found in this category.</p>
                    )}
                </div>
            ))}
        </div>
  )
}

export default Category
