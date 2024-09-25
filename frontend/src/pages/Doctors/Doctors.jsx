import React, { useEffect, useState } from "react";
import DoctorCard from "./../../components/Doctors/DoctorCard";
import { doctors } from "./../../assets/data/doctors";
import Testimonial from "../../components/Testimonial/Testimonial";
import Loader from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import { BASE_URL } from '../../config';
import useFetchData from '../../hooks/useFetchData';


const Doctors = () => {
const[query, setQuery] = useState('')
const[debounceQuery, setDebounceQuery] = useState('')
const handleSearch =  ()=>{
  setQuery(query.trim())
  console.log('handle search')
}

useEffect(()=>{
const timeout = setTimeout(()=>{
  setDebounceQuery(query)
},700)
return ()=> clearTimeout(timeout)
},[query])

const { data, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);

  return (
    <>
<section className="bg-[#fff9ea] py-8">
  <div className="container mx-auto text-center">
    <h2 className="text-5xl font-bold text-blue-800 mb-7">Find Doctor</h2>

    <div className="max-w-md mx-auto bg-gradient-to-r from-white to-gray-100 shadow-lg rounded-lg flex items-center border border-gray-300 overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="py-3 px-4 w-full border-none outline-none placeholder-gray-500 text-gray-700 focus:ring-2 focus:ring-blue-400"
        placeholder="Search doctor by name or specialty"
      />
      <button
        className="bg-blue-600 text-white py-3 px-6 rounded-r-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  </div>
</section>




      <section>
  <div className="container">
    {loading && <Loader />}
    {error && <Error />}
    
   
    {!loading && !error && data.length === 0 && (
      <p className="text-center text-gray-600 mt-5">No doctors found.</p>
    )}

    {!loading && !error && data.length > 0 && (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        {data.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    )}
  </div>
</section>


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

export default Doctors;
