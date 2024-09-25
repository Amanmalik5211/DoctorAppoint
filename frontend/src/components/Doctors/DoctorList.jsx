import React from 'react';
import { BASE_URL } from '../../config';
import useFetchData from '../../hooks/useFetchData';
import DoctorCard from './DoctorCard';
import Loader from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';

// Import Swiper and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade'; // For additional effect options

// Import Swiper modules
import { Pagination, Navigation, EffectCoverflow, EffectFade } from 'swiper/modules';

const DoctorList = () => {
  const { data, loading, error } = useFetchData(`${BASE_URL}/doctors`);
  console.log(data, 'all-data');

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}

      {!loading && !error && data.length === 0 && (
        <p className="text-center text-lg font-semibold mt-8">No doctors available at the moment.</p>
      )}

      {!loading && !error && data.length > 0 && (
        <div className="relative">
          <Swiper
            effect={'coverflow'} // Using coverflow effect for a 3D effect
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 50, // Adjust rotation for a more dramatic 3D effect
              stretch: 20, // Increase stretch to separate slides more
              depth: 200, // Increase depth for a stronger 3D effect
              modifier: 1.5, // Increase intensity
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            modules={[Pagination, Navigation, EffectCoverflow, EffectFade]}
            breakpoints={{
              // Responsive breakpoints
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="swiper-container mt-10 lg:mt-16"
          >
            {data.map((doctor) => (
              <SwiperSlide key={doctor._id}>
                <DoctorCard doctor={doctor} />
              </SwiperSlide>
            ))}

            {/* Custom pagination and navigation */}
            <div className="swiper-pagination absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4"></div>
            <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10"></div>
            <div className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10"></div>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default DoctorList;
