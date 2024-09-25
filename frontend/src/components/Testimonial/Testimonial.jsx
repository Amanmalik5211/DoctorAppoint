import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { HiStar } from "react-icons/hi";
import patientAvatar from "../../assets/images/patient-avatar.png";


// import { BASE_URL } from "../../config";
// import { useState , useEffect } from "react";
//   console.log(`${BASE_URL}/doctors/${doctorId}/reviews`, "Review API URL");

//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       if (!doctorId) {
//         setError('No doctor ID provided');
//         setLoading(false);
//         return;
//       }

      // try {
        // Updated the URL to include "doctors"
  //       const response = await axios.get(`${BASE_URL}/doctors/${doctorId}/reviews`);
  //       const { data } = response;
  //       console.log(data, 'allreviews-data');
  //       setReviews(data); 
  //     } catch (err) {
  //       setError('Failed to fetch reviews');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchReviews();
  // }, [doctorId]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  const Testimonial = () => {
    return (
      <div className="mt-[30px] lg:mt-[55px]">
        <Swiper
          modules={[EffectCoverflow]}
          effect={"coverflow"}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 60,
            stretch: 0,
            depth: 400,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false} 
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="swiper-container"
        >
          {/* Example slide */}
          <SwiperSlide>
            <div className="py-[30px] px-5 bg-gradient-to-r from-black via-gray-600 to-red-500 rounded-3xl shadow-xl transform transition-all duration-500  hover:shadow-2xl hover:shadow-pink-500/50 ">
              <div className="flex items-center gap-[13px]">
                <img
                  src={patientAvatar}
                  alt="Patient Avatar"
                  className="w-[60px] h-[60px] rounded-full shadow-lg transform transition-transform duration-500 hover:scale-125 hover:shadow-pink-500/50"
                />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-white">
                    Rahul
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="text-yellow-400 w-[18px] h-5" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-white font-[400] italic">
                "I have taken medical services from them. They treat so well and provide the best medical service."
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-[30px] px-5 bg-gradient-to-r from-black via-gray-800 to-blue-500 rounded-3xl shadow-xl transform transition-all duration-500  hover:shadow-2xl hover:shadow-pink-500/50 ">
              <div className="flex items-center gap-[13px]">
                <img
                  src={patientAvatar}
                  alt="Patient Avatar"
                  className="w-[60px] h-[60px] rounded-full shadow-lg transform transition-transform duration-500 hover:scale-125 hover:shadow-pink-500/50"
                />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-white">
                    Amit
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="text-yellow-400 w-[18px] h-5" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-white font-[400] italic">
                "I have taken medical services from them. They treat so well and provide the best medical service."
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-[30px] px-5 bg-gradient-to-r from-black via-gray-600 to-red-500 rounded-3xl shadow-xl transform transition-all duration-500  hover:shadow-2xl hover:shadow-pink-500/50 ">
              <div className="flex items-center gap-[13px]">
                <img
                  src={patientAvatar}
                  alt="Patient Avatar"
                  className="w-[60px] h-[60px] rounded-full shadow-lg transform transition-transform duration-500 hover:scale-125 hover:shadow-pink-500/50"
                />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-white">
                    Sumit
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="text-yellow-400 w-[18px] h-5" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-white font-[400] italic">
                "I have taken medical services from them. They treat so well and provide the best medical service."
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-[30px] px-5 bg-gradient-to-r from-black via-gray-800 to-blue-500 rounded-3xl shadow-xl transform transition-all duration-500  hover:shadow-2xl hover:shadow-pink-500/50 ">
              <div className="flex items-center gap-[13px]">
                <img
                  src={patientAvatar}
                  alt="Patient Avatar"
                  className="w-[60px] h-[60px] rounded-full shadow-lg transform transition-transform duration-500 hover:scale-125 hover:shadow-pink-500/50"
                />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-white">
                    Geeta
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="text-yellow-400 w-[18px] h-5" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-white font-[400] italic">
                "I have taken medical services from them. They treat so well and provide the best medical service."
              </p>
            </div>
          </SwiperSlide>



          <SwiperSlide>
            <div className="py-[30px] px-5 bg-gradient-to-r from-black via-gray-600 to-red-500 rounded-3xl shadow-xl transform transition-all duration-500  hover:shadow-2xl hover:shadow-pink-500/50 ">
              <div className="flex items-center gap-[13px]">
                <img
                  src={patientAvatar}
                  alt="Patient Avatar"
                  className="w-[60px] h-[60px] rounded-full shadow-lg transform transition-transform duration-500 hover:scale-125 hover:shadow-pink-500/50"
                />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-white">
                   Ramesh
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="text-yellow-400 w-[18px] h-5" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-white font-[400] italic">
                "I have taken medical services from them. They treat so well and provide the best medical service."
              </p>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="py-[30px] px-5 bg-gradient-to-r from-black via-gray-800 to-blue-500 rounded-3xl shadow-xl transform transition-all duration-500  hover:shadow-2xl hover:shadow-pink-500/50 ">
              <div className="flex items-center gap-[13px]">
                <img
                  src={patientAvatar}
                  alt="Patient Avatar"
                  className="w-[60px] h-[60px] rounded-full shadow-lg transform transition-transform duration-500 hover:scale-125 hover:shadow-pink-500/50"
                />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-white">
                     Poonam
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="text-yellow-400 w-[18px] h-5" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-white font-[400] italic">
                "I have taken medical services from them. They treat so well and provide the best medical service."
              </p>
            </div>
          </SwiperSlide>
  
        </Swiper>
      </div>
    );
  };
  
  export default Testimonial;