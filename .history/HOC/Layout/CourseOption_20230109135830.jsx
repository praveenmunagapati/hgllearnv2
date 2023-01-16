import React from 'react'

function CourseOption(props) {
    const [course, setCourse] = useState([]);
    const getData = () => {
        try {
          axios
            .get("https://himal-hubitbackend.adaptable.app/course")
            .then((res) => {
              console.log(res);
              setCourse(res.data.data);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getData();
      }, []);
    
      let courseName = [];
      {
        course.map((val, i) => {
          courseName.push({
            id: val.id,
            course_name: val.course_name,
          });
          return <div key={i}>{val.course_name}</div>;
        });
      }
      console.log(courseName);
      // options
      const options = [
        {
          id: "0",
          course_name: "choose any course name",
          apikey: "course_names",
        },
        ...courseName,
      ];
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