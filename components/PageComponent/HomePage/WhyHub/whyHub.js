import { GiTeacher } from "react-icons/gi";
const WhyHub = () => {
    let data = [1, 2, 3, 4, 5, 6];

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
                                    <div className="p-2 rounded-full border border-gray-700 text-sm xl:text-base xxl:text-lg"><GiTeacher className="" /></div>
                                    <div className="text-xs xl:text-sm xxl:text-base font-bold w-full mt-3 mb-1 Poppins">Well-Equipped Lab</div>
                                    <div className="text-justify text-xs xl:text-sm xxl:text-base text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. In sunt optio unde rem nulla, quibusdam aperiam,vol</div>
                                </div>
                            </div>
                        );
                    }) }
                </div>
            </div>
        </div>
    );
};
export default WhyHub;