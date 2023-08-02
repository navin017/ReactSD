import { useState, useEffect} from 'react'
import React from 'react'


const Category =() =>{
    const [option,setOption] = useState([])
    useEffect(() => {
        fetch("/category",{
          mode: 'no-cors',
          })
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
       const entries = Object.entries(option)
       console.log(entries,"*********")
  return (
    <div>
       {entries.map((rank,index)=>{
        return(
          <div key={index}>
          <ul>
            <li>
              {rank.first_name}
            </li>
            <li>
              {rank.last_name}
            </li>
            <li>
              {rank.email_id}
            </li>
            <li>
              {rank.id}
            </li>
            <li>
              {rank.average ? rank.average.total_mark:"NULL"}
            </li>
            <li>
              {rank.mark ? rank.mark.tamil:"NULL"}
            </li>
            <li>
              {rank.mark ? rank.mark.maths:"NULL"}
            </li>

          </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Category
