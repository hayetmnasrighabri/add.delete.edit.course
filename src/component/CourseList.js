import React, { useState } from 'react';
import './CourseList.css';

const initialCourses = [
    { id: 0, name: "HTML" },
    { id: 1, name: "CSS" },
    { id: 2, name: "PYTHON" }
];

function CourseList() {
    const [name, setName] = useState('');
    const [courses, setCourses] = useState(initialCourses);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Generate a new ID for the new course
        const newId = courses.length ? Math.max(...courses.map(course => course.id)) + 1 : 0;

        setCourses([
            ...courses,
            { id: newId, name:name }
        ]);
        setName('');
        console.log(courses)
      };

    const handleDelete = (id) => {
        setCourses(courses.filter(course => course.id !== id));
        console.log(courses)
      };

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
            <ul className='table'>
                {courses.map(course => (
                    <li key={course.id}>
                        {course.name}
                        <button className='button1'>Edit</button>
                        <button className='button2' onClick={() => handleDelete(course.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseList;