import { formateDate } from "../../Utils/formateDate";
import SidePanel from "./SidePanel";

const DoctorAbout = ({ name, about, qualifications, experiences }) => {
  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <div className="relative p-8">
        <div className="mb-8">
          <h3 className="text-[24px] leading-[34px] text-headingColor font-semibold flex items-center gap-2">
            About
            <span className="text-irisBlueColor font-bold text-[26px] transform transition-transform duration-300 hover:scale-105 hover:text-blue-500">
              {capitalizeFirstLetter(name)}
            </span>
          </h3>

          <p className="text_para text-black text-[18px] break-words overflow-hidden whitespace-pre-wrap leading-relaxed mt-4 shadow-inner p-4">
            {about}
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-[22px] leading-[30px] text-headingColor font-semibold">
            Education :
          </h3>

          <ul className="pt-6">
            {qualifications?.map((item, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-lg sm:justify-between sm:items-end mb-[30px] shadow-lg transform transition-transform "
              >
                <div>
                  <span className="text-green-700 text-[18px] leading-6 font-semibold mr-2">
                    {formateDate(item.startingDate)} -{" "}
                    {formateDate(item.endingDate)}
                  </span>

                  <p className="text-[16px] leading-6 pt-2 font-medium text-gray-700">
                    {item.degree}
                  </p>
                </div>

                <p className="text-[15px] leading-5 font-medium text-gray-600">
                  {item.university}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-[22px] leading-[30px] text-headingColor font-semibold">
            Experience :
          </h3>

          <ul className="grid sm:grid-cols-2 gap-[30px] pt-6">
            {experiences?.map((item, index) => (
              <li
                key={index}
                className="p-5 rounded-lg bg-gradient-to-br from-orange-100 to-yellow-100 shadow-xl w-[280px] transform transition-transform "
              >
                <span className="text-orange-600 text-[16px] leading-6 font-semibold">
                  {formateDate(item.startingDate)} -{" "}
                  {formateDate(item.endingDate)}
                </span>

                <p className="text-[17px] leading-6 font-medium text-gray-800 mt-2">
                  {item.position}
                </p>

                <p className="text-[15px] leading-5 font-medium text-gray-600">
                  {item.hospital}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="lg:hidden w-[300px] mt-12">
          <SidePanel />
        </div> */}
      </div>
    </>
  );
};

export default DoctorAbout;
