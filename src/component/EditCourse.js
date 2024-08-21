import React from 'react'

function EditCourse({course, courses, setCourses, setUpdate}) {
  
  const handleInput=(e)=>{
    const newcourse = courses.map(li => (
      li.id === course.id ?
          {...li, [e.target.name]:e.target.value} :
            li
    ))
    setCourses(newcourse)
  }
  const handleClick=(e)=> {
    e.preventDefault()
    setUpdate(null)

  }
    return (

    <tr>
      <td><input type='text' name='name' value={course.name} onChange={handleInput}/></td>
      <td><button type='submit' onClick={handleClick}>update</button></td>

    </tr>
  )
}

export default EditCourse
