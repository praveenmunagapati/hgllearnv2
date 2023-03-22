import React from 'react'
import {Link} from 'next/link'
import PopularCourses from '../../HomePage/PopularCourses/PopularCourses';
function AllCourses({Courses}) {
  return (
    <div>
      <div className=''>
      <PopularCourses card={Courses} value="courses" />
      </div>
    </div>
  )
}

export default AllCourses
