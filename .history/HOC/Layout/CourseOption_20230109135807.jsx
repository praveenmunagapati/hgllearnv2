import React from 'react'

function CourseOption(props) {
    const [course, setCourse] = useState([]);
  return (
    <div>
         <select>
        {options.map((val, i) => {
          return <option key={i}>{val.course_name}</option>;
        })}
      </select>
    </div>
  )
}

export default CourseOption