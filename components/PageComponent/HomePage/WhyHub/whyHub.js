import { GiTeacher } from "react-icons/gi";
const WhyHub = () => {
    let data = [1, 2, 3, 4, 5, 6];

    return (
        <div className="px-4 md:px-8 lg:px-20 xl:px-24 w-full h-max my-16">
            <div className="flex flex-row w-full h-max gap-7 items-center">
                <div className="flex flex-col w-2/6">
                    <div className="w-max text-2xl capitalize Poppins font-bold">Why Choose</div>
                    <div className="w-max text-[#a0047d] text-2xl capitalize Poppins font-bold text-justify ">HUBIT</div>
                    <div className="text-xs text-gray-700 text-justify mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, est enim? Quod eaque, at odio nobis maxime corporis. Velit sit fugit aliquam accusamus maiores enim molestiae!</div>
                </div>
                <div className="grid grid-cols-3 gap-x-6 gap-y-10  w-4/6">
                    { data.map((item) => {
                        return (
                            <div key={ item }>
                                <div className="flex flex-col items-center">
                                    <div className="p-2 rounded-full border border-gray-700"><GiTeacher className="text-gray-600" /></div>
                                    <div className="text-xs font-bold w-full mt-3 mb-1 ">Well-Equipped Lab</div>
                                    <div className="text-justify text-xs text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. In sunt optio unde rem nulla, quibusdam aperiam,vol</div>
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