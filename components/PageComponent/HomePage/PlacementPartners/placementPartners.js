import { SiMicrosoft } from "react-icons/si";

const PlacementPartners = () => {
    const data = [1, 2, 3, 4, 5, 6, 7];

    return (
        <div className="px-4 md:px-8 lg:px-20 xl:px-24 xxl:px-32 mt-20 flex flex-col items-center">
            <div className="w-max text-[#a0047d] text-lg xl:text-xl xxl:text-2xl capitalize Poppins font-bold">Placement Partners</div>
            <div className="w-full flex flex-row flex-wrap gap-10 justify-around my-6">
                {
                    data.map((item) => {
                        return (
                            <div key={ item } className="flex flex-row h-max items-center py-1 px-2 border border-gray-500 shadow-md">
                                <span className="text-base xl:text-lg xxl:text-xl"><SiMicrosoft /></span>
                                <span className="ml-2 text-xs xl:text-sm xxl:text-base">Microsoft</span>
                            </div>
                        );
                    }
                    ) }
            </div>
        </div>
    );
};
export default PlacementPartners;