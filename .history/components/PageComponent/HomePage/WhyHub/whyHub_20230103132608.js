import { GiTeacher } from "react-icons/gi";
const WhyHub = () => {
  let data = [
    {
      icon: <GiTeacher />,
      title: "Well-Equipped Lab",
      description:
        "Labs are equipped with world class equipments and facilities based on the latest technology.",
    },
    {
      icon: <GiTeacher />,
      title: "Highly experience instructor",
      description:
        "Instructors are highly qualified active professional",
    },
    {
      icon: <GiTeacher />,
      title: "Updated Syllablus",
      description:
        "Designed syllablus focusing the sector as need of industries demand in which our students can compete.",
    },
    {
      icon: <GiTeacher />,
      title: "Personality Development training",
      description: "We not only provide skill,we create P.D of students by HR professionals",
    },
    {
      icon: <GiTeacher />,
      title: "Support after training",
      description:
        "As I.T is upgraded every second our student needs support for new upgrade,we provide support after training also",
    },
    {
      icon: <GiTeacher />,
      title: "Access library",
      description:
        "Our online library provide students a vast refrence book which they may use in future also",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-20 xl:px-24 xxl:px-32 w-full h-max my-16">
      <div className="flex flex-col lg:flex-row xl:flex-row xxl:flex-row w-full h-max gap-7 items-center">
        <div className="flex flex-col w-full lg:w-2/6 xl:w-2/6 xxl:w-2/6 ">
          <div className="w-max text-lg xl:text-xl xxl:text-2xl capitalize Poppins font-bold">
            Why Choose
            <span className="w-max text-[#a0047d] text-lg xl:text-xl xxl:text-2xl capitalize Poppins font-bold text-justify ">
            HUBIT
          </span>
          </div>
          
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-x-6 gap-y-12 w-full lg:w-4/6 xl:w-4/6 xxl:w-4/6">
          {data.map((item) => {
            return (
              <div key={item}>
                <div className="flex flex-col items-center">
                  <div className="p-2 rounded-full border border-gray-700 text-sm xl:text-base xxl:text-lg">
                    {item.icon}{" "}
                  </div>
                  <div className=" xl:text-sm xxl:text-base w-full mt-3 mb-1 Poppins">
                    <h1 className="text-[16px]">{item.title}</h1>
                  </div>
                  <div className="text-justify text-xs xl:text-sm xxl:text-base text-gray-700">
                    {item.description}
                  </div>
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
