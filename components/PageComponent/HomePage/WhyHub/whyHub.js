import { GiTeacher } from "react-icons/gi";
const WhyHub = () => {
    let data = [
        {
            icon:<GiTeacher />,
            title:'Well-Equipped Lab',
            description:'Labs are equipped with world class equipments and facilities based on the latest technology pertaining to different sectors. The students and faculties push the boundaries of possibilities in these world class labs, and there is always a constant buzz in this part of the institute where new knowledge is created.'
        },
        {
            icon:<GiTeacher />,
            title:'Highly experience instructor',
            description:'Our Instructors are highly qualified active professional working in an organization as developer,designer,technician with years of expertise in their own field. They are continuously conducting trainings in our advanced training centre using a cutting-edge technology.'
        },
        {
            icon:<GiTeacher />,
            title:'Updated Syllablus',
            description:'Designed syllablus focusing the sector as need of industries demand in which our students can compete the requirement need.We also research new technology or tools which will be required on the industries in present or future and we add the content to our Syllablus. '
        },
        {
            icon:<GiTeacher />,
            title:'Personality Development training',
            description:''
        },
        {
            icon:<GiTeacher />,
            title:'Support after training',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sunt optio unde rem nulla, quibusdam aperiam,vol'
        },
        {
            icon:<GiTeacher />,
            title:'Access library',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sunt optio unde rem nulla, quibusdam aperiam,vol'
        }
    ];

    return (
        <div className="px-4 md:px-8 lg:px-20 xl:px-24 xxl:px-32 w-full h-max my-16">
            <div className="flex flex-col lg:flex-row xl:flex-row xxl:flex-row w-full h-max gap-7 items-center">
                <div className="flex flex-col w-full lg:w-2/6 xl:w-2/6 xxl:w-2/6 ">
                    <div className="w-max text-lg xl:text-xl xxl:text-2xl capitalize Poppins font-bold">Why Choose</div>
                    <div className="w-max text-[#a0047d] text-lg xl:text-xl xxl:text-2xl capitalize Poppins font-bold text-justify ">HUBIT</div>
                    <div className="text-xs xl:text-sm xxl:text-base text-gray-700 text-justify mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, est enim? Quod eaque, at odio nobis maxime corporis. Velit sit fugit aliquam accusamus maiores enim molestiae!</div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-x-6 gap-y-12 w-full lg:w-4/6 xl:w-4/6 xxl:w-4/6">
                    { data.map((item) => {
                        return (
                            <div key={ item }>
                                <div className="flex flex-col items-center">
                                    <div className="p-2 rounded-full border border-gray-700 text-sm xl:text-base xxl:text-lg">
                                       {item.icon} </div>
                                    <div className="text-xs xl:text-sm xxl:text-base font-bold w-full mt-3 mb-1 Poppins">
                                    {item.title}
                                    </div>
                                    <div className="text-justify text-xs xl:text-sm xxl:text-base text-gray-700">
                                    {item.description}
                                    </div>
                                </div>
                            </div>
                        );
                    }) }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default WhyHub;
