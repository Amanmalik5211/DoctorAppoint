import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageToCloudinary from './../../Utils/uploadCloudinary';
import { BASE_URL, token } from './../../config';
import Tabs from "./Tabs";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 
// import { useDispatch, useSelector } from 'react-redux';
// import { updateDoctorProfile, fetchDoctorProfile } from '../../redux/slices/doctorProfileSlice.js';

const Profile = ({ doctorData, setDoctorData }) => {
  // const dispatch = useDispatch();
  // const doctorProfile = useSelector((state) => state.doctorProfile.profile);
  const navigate = useNavigate();
  const [tab, setTab] = useState("overview");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    photo: "",
    gender: "",
    phone: "",
    bio: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: "",
  });

  useEffect(() => {
    if (doctorData) {
      console.log("Updating form data with:", doctorData);
      setFormData({
        email: doctorData.email || "",
        name: doctorData.name || "",
        photo: doctorData.photo || "",
        gender: doctorData.gender || "",
        phone: doctorData.phone || "",
        bio: doctorData.bio || "",
        specialization: doctorData.specialization || "",
        ticketPrice: doctorData.ticketPrice || 0,
        qualifications: doctorData.qualifications || [],
        experiences: doctorData.experiences || [],
        timeSlots: doctorData.timeSlots || [],
        about: doctorData.about || "",
      });
    }
  }, [doctorData]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    console.log("Image uploaded to Cloudinary:", data);
    setFormData({ ...formData, photo: data?.url });
  };

  const updateProfileHandler = async (event) => {
    event.preventDefault();

    try {
        const doctorId = doctorData._id; // Assuming doctorData contains the doctor ID
        const response = await axios.put(`${BASE_URL}/doctors/${doctorId}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            toast.success("Profile updated successfully!");

            // Update both doctorData and formData to reflect the changes immediately without refresh
            const updatedData = response.data;
            if (setDoctorData) {
                setDoctorData(updatedData);  // Update the parent state with new data
            }

            setFormData({
                ...formData,
                ...updatedData,  // Update formData with the new values from the server
            });
        } else {
            toast.error("Failed to update profile.");
        }
    } catch (err) {
        toast.error(`Error updating profile: ${err.response?.data?.message || err.message}`);
    }
};


  
  // Reusable function for adding item..
  const addItem = (key, item) => {
    setFormData(prevFormData => ({ ...prevFormData, [key]: [...prevFormData[key], item] }));
  };

  // Reusable function for delete item.. 
  const deleteItem = (key, index) => {
    setFormData(prevFormData => ({ ...prevFormData, [key]: prevFormData[key].filter((_, i) => i !== index) }));
  };

  // Reusable input change function 
  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;

    setFormData(prevFormData => {
      const updateItems = [...prevFormData[key]];
      updateItems[index][name] = value;
      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };


  const addQualification = (e)=>{
    e.preventDefault();
    addItem('qualifications',{
      startingDate: "", endingDate: "", degree: "PHD", university: "Geeta Medical College"
    })
  }
  const handleQualificationChange = (event,index)=>{
    handleReusableInputChangeFunc('qualifications', index, event)
  }
  const deleteQualification = (e,index)=>{
    e.preventDefault();
    deleteItem('qualifications', index)
  }


  const addExperience = (e)=>{
    e.preventDefault();
    addItem('experiences',{
      startingDate: "", endingDate: "", position:"Senior Surgeon", hospital:'Dhaka Medical'
    })
  }
  const handleExperienceChange = (event,index)=>{
    handleReusableInputChangeFunc('experiences', index, event)
  }
  const deleteExperience = (e,index)=>{
    e.preventDefault();
    deleteItem('experiences', index)
  }


  const addTimeSlot = (e)=>{
    e.preventDefault();
    addItem('timeSlots', {day:'Sunday', startingTime:'10:00',endingTime:'04:30'});
  }
  const handleTimeSlotChange = (event,index)=>{
    handleReusableInputChangeFunc('timeSlots', index, event)
  }
  const deleteTimeSlot = (e,index)=>{
    e.preventDefault();
    deleteItem('timeSlots', index)
  }


  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>

      <form>
        <div className="mb-3">
          <p className="form_label">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form_input"
          />
        </div>

        <div className="mb-3">
  <p className="form_label">Email*</p>
  <input
    type="email"
    placeholder="Enter your email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    className="form_input"
    readOnly
    aria-readonly="true"
    
  />
  
</div>


        <div className="mb-3">
          <p className="form_label">Phone*</p>
          <input
            type="number"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form_input"
          />
        </div>

        <div className="mb-3">
          <p className="form_label">Bio*</p>
          <input
            type="text"
            placeholder="Bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="form_input"
            maxLength={100}
          />
        </div>

        <div className="mb-3">
          <div className="grid grid-cols-3 gap-5 mb-[30px] ">
            <div>
              <p className="form_label">Gender*</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form_input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <p className="form_label">Specialization*</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="form_input py-3.5"
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>

            <div>
              <p className="form_label">Ticket Price*</p>
              <input
                type="number"
                placeholder="100"
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleInputChange}
                className="form_input"
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <p className="form_label">Qualifications*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5 ">
                  <div>
                    <p className="form_label">Starting Date</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={e=>handleQualificationChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form_label">Ending Date</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={e=>handleQualificationChange(e, index)}

                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5 ">
                  <div>
                    <p className="form_label">Degree*</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form_input"
                      onChange={e=>handleQualificationChange(e, index)}

                    />
                  </div>

                  <div>
                    <p className="form_label">University*</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className="form_input"
                      onChange={e=>handleQualificationChange(e, index)}

                    />
                  </div>
                </div>
              </div>

              <button
              onClick={e=>deleteQualification(e,index)}
                className="bg-red-600 p-2 rounded-full text-white text-[18px] 
              mt-2 mb-[30px] cursor-pointer"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
          <button onClick={addQualification} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
            Add Qualification
          </button>
        </div>


        <div className="mb-3">
          <p className="form_label">Experiences*</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5 ">
                  <div>
                    <p className="form_label">Starting Date</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={e=>handleExperienceChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form_label">Ending Date</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={e=>handleExperienceChange(e, index)}

                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5 ">
                  <div>
                    <p className="form_label">Position*</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      className="form_input"
                      onChange={e=>handleExperienceChange(e, index)}

                    />
                  </div>

                  <div>
                    <p className="form_label">Hospital*</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      className="form_input"
                      onChange={e=>handleExperienceChange(e, index)}

                    />
                  </div>
                </div>
              </div>

              <button
               onClick={e=>deleteExperience(e,index)}
                className="bg-red-600 p-2 rounded-full text-white text-[18px] 
              mt-2 mb-[30px] cursor-pointer"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
          <button onClick={addExperience} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
            Add Experience
          </button>
        </div>


        <div className="mb-3">
          <p className="form_label">Time Slots*</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2  md:grid-cols-4 mb-[30px] gap-5 ">
                  <div>
                    <p className="form_label">Day*</p>
                    <select
                      name="day"
                      value={item.day}
                      className="form_input py-3.5"
                      onChange={e=>handleTimeSlotChange(e, index)}
                    >
                      <option value="">Select</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                  </div>

                  <div>
                    <p className="form_label">Starting Time*</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className="form_input"
                      onChange={e=>handleTimeSlotChange(e, index)}

                    />
                  </div>

                  <div>
                    <p className="form_label">Ending Time*</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className="form_input"
                      onChange={e=>handleTimeSlotChange(e, index)}

                    />
                  </div>

                  <div className="flex items-center ">
                    <button
                     onClick={e=>deleteTimeSlot(e,index)}
                      className="bg-red-600 p-2 rounded-full text-white text-[18px] 
                      cursor-pointer mt-9"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button onClick={addTimeSlot} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
            Add Time Slot
          </button>
        </div>


        <div className="mb-3">
          <p className="form_label">About*</p>
          <textarea
            name="about"
            rows={6}
            value={formData.about}
            placeholder="Write about you"
            onChange={handleInputChange}
            className="form_input"
          ></textarea>
        </div>
        <div className="mb-5 flex items-center gap-3 ">
  {formData.photo && (
    <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-black flex items-center justify-center">
      <img src={formData.photo} alt="" className="w-full  h-full object-cover rounded-full" />
    </figure>
  )}

  <div className="relative w-[140px] h-[50px]">
    <input
      type="file"
      className="border-[4px] absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
      name="photo"
      onChange={handleFileInputChange}
      id="customFile"
      accept=".jpg, .png"
    />
    <label
      htmlFor="customFile"
      className="bg-blue-500 absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-semibold rounded-lg cursor-pointer"
    >
      Upload Photo
    </label>
  </div>
</div>



        <div className="mt-7">
          <button type='submit' onClick={updateProfileHandler} className="bg-primaryColor text-white text-[18px] leading-[30px] w-full
          py-3 px-4 rounded-lg">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
