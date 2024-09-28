import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import faqImg from "../assets/images/faq-img.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleAppointmentRequest = () => {
    navigate("/doctors");
  };


  // console.log(`${BASE_URL}/doctors/`, "Doctor API URL");

  // const [data, setData] = useState([]);
  // const [reviewsData, setReviewsData] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchDoctorsAndReviews = async () => {
  //     try {
  //       const response = await axios.get(`${BASE_URL}/doctors/`);
  //       console.log(response, "Full Doctor API Response");

  //       const doctors = response.data.data;
  //       console.log(doctors, "12doctors12");
  //       setData(doctors);

  //       const reviewRequests = doctors.map((doctor) =>
  //         axios.get(`${BASE_URL}/doctors/${doctor._id}/reviews`).then((response) => ({
  //           id: doctor._id,
  //           reviews: response.data,
  //         }))
  //       );

  //       const reviews = await Promise.all(reviewRequests);
  //       const reviewsMap = reviews.reduce((acc, { id, reviews }) => {
  //         acc[id] = reviews;
  //         return acc;
  //       }, {});

  //       setReviewsData(reviewsMap);
  //     } catch (err) {
  //       console.error(err);
  //       setError(`Failed to fetch data: ${err.message}`);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchDoctorsAndReviews();
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;


  return (
    <>
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-center">
            {/* content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[30px]  leading-[39px] text-headingColor font-[600] md:text-[60px] md:leading-[69px]">
                  We help patients live a healthy, longer life.
                </h1>

                <p className="text_para">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae voluptate, illo quae aliquid commodi incidunt eos ea
                  earum iure, magni fugiat nisi magnam ipsum. Minima cumque
                  natus aliquam? Sint, aliquid.
                </p>
                <div className="flex items-center justify-center">
                  <button
                    onClick={handleAppointmentRequest}
                    className="btnn hover:shadow-black hover:shadow-lg"
                  >
                    Request an Appointment
                  </button>
                </div>
              </div>

              {/* counter */}
              <div className="mt-[25px] lg:mt-[60px] flex flex-col lg:flex-row lg:items-center  gap-5 lg:gap-[30px] justify-center">
                {/* Statistic Block 1 */}
                <div className="group w-[150px] h-[150px] flex flex-col justify-center items-center bg-white rounded-full shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-10px]">
                  <h2 className="text-[30px] flex justify-center items-center font-[600] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[80px] h-1 bg-yellowColor rounded-full block mt-[-1px]"></span>
                  <p className="text_para text-center mt-2 text-[22px]">
                    Years of Experience
                  </p>
                </div>

                {/* Statistic Block 2 */}
                <div className="group w-[150px] h-[150px] flex flex-col justify-center items-center bg-white rounded-full shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-10px]">
                  <h2 className="text-[30px] flex justify-center items-center font-[600] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[80px] h-1 bg-purpleColor rounded-full block mt-[-1px]"></span>
                  <p className="text_para text-center mt-2 text-[22px]  ">
                    Clinic  Locations
                  </p>
                </div>

                {/* Statistic Block 3 */}
                <div className="group w-[150px] h-[150px] flex flex-col justify-center items-center bg-white rounded-full shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-10px]">
                  <h2 className="text-[30px] flex justify-center items-center font-[600] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[80px] h-1 bg-irisBlueColor rounded-full block mt-[-1px]"></span>
                  <p className="text_para text-center mt-2 text-[21px]">
                    Patient Satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* contant  */}

            <div className="flex gap-[30px] justify-end items-center relative">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <img
                  className="w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                  src={heroImg01}
                  alt=""
                />
              </div>

              <div className="mt-[30px] relative">
                <div className="mb-[30px] relative z-20 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <img
                    className="w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                    src={heroImg02}
                    alt=""
                  />
                </div>

                <div className="relative z-10 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <img
                    className="w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                    src={heroImg03}
                    alt=""
                  />
                </div>
              </div>

              {/* Add a background effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-300 blur-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[550px] mx-auto text-center  mb-20">
            <h2
              className="text-5xl font-bold mb-4 transform   shadow-lg p-4 rounded-lg bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white hover:from-blue-500 hover:to-blue-900 hover:shadow-2xl"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Adding text shadow
              }}
            >
              Providing the best medical services
              <p
                className="text-gray-300 mt-4 text-[17px]"
                style={{
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)", // Subtle shadow for text
                }}
              >
                World-class care for everyone. Our health system offers
                unmatched, expert health care.
              </p>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {/* Card 1: Find a Doctor */}
            <div className="relative py-[30px] px-5 w-[360px] shadow-lg rounded-xl transform transition-transform duration-700 hover:rotate-y-[360deg] hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[19px] text-center">
                <h2 className="text-[26px] leading-9 font-bold text-gray-900">
                  Find a Doctor
                </h2>

                <p className="text-[16px] leading-7 text-gray-600 font-semibold mt-4">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-gray-400 mt-[20px] mx-auto flex items-center justify-center group bg-gray-200 hover:bg-primaryColor hover:border-none transition-all duration-300"
                >
                  <BsArrowRight className="hover:text-white text-black w-6 h-5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Find a Location */}
            <div className="relative py-[30px] px-5 w-[360px] shadow-lg rounded-xl transform transition-transform duration-700 hover:rotate-y-[360deg] hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[19px] text-center">
                <h2 className="text-[26px] leading-9 font-bold text-gray-900">
                  Find a Location
                </h2>

                <p className="text-[16px] leading-7 text-gray-600 font-semibold mt-4">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link
                  to="/location"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-gray-400 mt-[20px] mx-auto flex items-center justify-center group bg-gray-200 hover:bg-primaryColor hover:border-none transition-all duration-300"
                >
                  <BsArrowRight className="group-hover:text-white text-black w-6 h-5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Book an Appointment */}
            <div className="relative py-[30px] px-5 w-[360px] shadow-lg rounded-xl transform transition-transform duration-700 hover:rotate-y-[360deg] hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[19px] text-center">
                <h2 className="text-[25px] leading-9 font-bold text-gray-900">
                  Book an Appointment
                </h2>

                <p className="text-[16px] leading-7 text-gray-600 font-semibold mt-4">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-gray-400 mt-[20px] mx-auto flex items-center justify-center group bg-gray-200 hover:bg-primaryColor hover:border-none transition-all duration-300"
                >
                  <BsArrowRight className="group-hover:text-white text-black w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* service */}
      <section>
        <div className="container">
          <div className="lg:w-[550px] mx-auto text-center  mb-20">
            <h2
              className="text-5xl font-bold mb-4 transform   shadow-lg p-4 rounded-lg bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white hover:from-blue-500 hover:to-blue-900 hover:shadow-2xl"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Adding text shadow
              }}
            >
              Our medical services
              <p
                className="text-gray-300 mt-4 text-[17px]"
                style={{
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)", // Subtle shadow for text
                }}
              >
                Word-class care for everyone.Our health system offers
                unmatched,expert health care.
              </p>
            </h2>
          </div>

          <ServiceList />
        </div>
      </section>

      {/* feature */}
      {/* <section>
        <div className="container">
          <div className="flex items-centerjustify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>

              <ul className="pl-4">
                <li className="text_para">
                  1. Schedule the appoinment directly.
                </li>
                <li className="text_para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text_para">
                  3. View our physician who are accepting new patients, use the
                  online scheduling tool to select an appoinment time.
                </li>
              </ul>

              <Link to="/">                                                                                                                          
                <button className="btnn">Learn More</button>
              </Link>
            </div>

            {/* feature img */}
      {/* <div className="relative  z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt="" className="w-3/4" />

              <div
                className="w-[150px] lg:w-[248px] bg-white absolute buttom-[50px] 
            left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]"
              >
                <div className="flex item-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>

                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00 AM
                    </p>
                  </div>

                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex  items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div
                  className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2  lg:py-[6px] lg:px-[10px]
                  text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full "
                >
                  Consultation
                </div>

                <div className="flex item-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                       Mansi sangwan
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* doctors */}

      <section>
        <div className="container">
          <div className="lg:w-[550px] mx-auto text-center  mb-20">
            <h2
              className="text-5xl font-bold mb-4 transform   shadow-lg p-4 rounded-lg bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white hover:from-blue-500 hover:to-blue-900 hover:shadow-2xl"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Adding text shadow
              }}
            >
              Our great doctors
              <p
                className="text-gray-300 mt-4 text-[17px]"
                style={{
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)", // Subtle shadow for text
                }}
              >
                Word-class care for everyone.Our health system offers
                unmatched,expert health care.
              </p>
            </h2>
          </div>

          <DoctorList />
        </div>
      </section>

      {/* faq */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-900 tracking-wide leading-tight lg:leading-snug text-center md:text-left mb-6">
  Most Questions by Our Beloved Patients
</h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section>
        <div className="container">
          <div className="lg:w-[550px] mx-auto text-center mb-20">
            <h2
              className="text-5xl font-bold mb-4 transform   shadow-lg p-4 rounded-lg bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white hover:from-blue-500 hover:to-blue-900 hover:shadow-2xl"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Adding text shadow
              }}
            >
              What our patient say
              <p
                className="text-gray-300 mt-4 text-[17px]"
                style={{
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)", // Subtle shadow for text
                }}
              >
                Word-class care for everyone.Our health system offers
                unmatched,expert health care.
              </p>
            </h2>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
