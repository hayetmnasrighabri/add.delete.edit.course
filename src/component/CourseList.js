import React, { useState } from 'react';
import './CourseList.css';
import EditCourse from './EditCourse';

const initialCourses = [
    { id: 0, name: "HTML" },
    { id: 1, name: "CSS" },
    { id: 2, name: "PYTHON" }
];

function CourseList() {
    const [name, setName] = useState('');
    const [courses, setCourses] = useState(initialCourses);
    const [update, setUpdate] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Generate a new ID for the new course
        const newId = courses.length ? Math.max(...courses.map(course => course.id)) + 1 : 0;

        setCourses([
            ...courses,
            { id: newId, name }
        ]);
        setName('');
        console.log(courses)
      };

    const handleDelete = (id) => {
       const newlist = courses.filter(course => course.id !== id)
        setCourses(newlist);
        console.log(courses)
      };
     
      const handleEdit=(id)=>{
        setUpdate(id)
      }
    return (
        <div>
            <h2>Add Courses</h2>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    name='name'
                    value={name}
                    type='text'
                    onChange={e => setName(e.target.value)}
                />
                <button className='btn' type='submit'>
                    Add Course
                </button>
            </form>
            <hr />
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">Operation</th>
    </tr>
  </thead>
  <tbody>
    {courses.map(course => (
      update === course.id ? <EditCourse course={course} courses={courses} setCourses={setCourses} setUpdate={setUpdate} /> :
      <tr key={course.id}>
      <th scope="row">{course.id}</th>
      <td>{course.name}</td>
      <td><button className='button1' onClick={()=>handleEdit(course.id)}>
                          Edit
                          </button>
                        <button className='button2' onClick={() => handleDelete(course.id)}>
                            Delete
                        </button></td>
    </tr>
))}
  </tbody>
</table>
        </div>
    );
}

export default CourseList;