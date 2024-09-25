import { useEffect, useState } from "react";
// import avatar from "../assets/images/default-Img.jpg";
import { useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../../Utils/uploadCloudinary.js";
 import { BASE_URL, token } from "../../config.js";
 import {toast} from 'react-toastify';
 import {RingLoader} from 'react-spinners';

const Profile = ({user}) => {

  const [selectedFile, setselectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    photo: "",
    gender: "",
    bloodType:'',
  });

  const navigate = useNavigate();

  useEffect(()=>{
   setFormData({name:user.name, email:user.email, photo:user.photo, gender:user.gender,
    bloodType:user.bloodType
   })
  },[user])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; 

  const handleFileInputChange = async(event)=> {
    const file = event.target.files[0];
    // console.log("fileeee",file)

    const data = await uploadImageToCloudinary(file)
    // console.log("hrllo",data.url)
    // console.log("lo",data)

    setselectedFile(data.url);
    setFormData({ ...formData, photo: data.url });

  };

  const submitHandler = async(event)=>{
  event.preventDefault()
  // console.log(formData)
  setLoading(true);

  try {
    const res = await fetch(`${BASE_URL}/users/${user._id}`,{
      method:'put',
      headers:{
        'Content-Type':'application/json',
        Authorization:`Bearer ${token}`
      },
      body: JSON.stringify(formData)
    }) 
    const {message} = await res.json();
    if(!res.ok){
      throw new Error(message);
    }
    
    setLoading(false);
    toast.success(message);
    navigate("/users/profile/me");

  } catch (err) {
    toast.error(err.message);
    setLoading(false)
  }
  }


  return (
    <div className="mt-11 max-w-md bg-white p-8 rounded-xl  hover:shadow-[5px_5px_50px_rgba(0,0,0,0.1)] shadow-[5px_5px_50px_rgba(0,0,0,0.3)] transform">
    <form onSubmit={submitHandler}>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[15px] leading-7 text-headingColor placeholder:text-textColor rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
          required
        />
      </div>
  
      <div className="mb-5">
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[15px] leading-7 text-headingColor placeholder:text-textColor rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
          aria-readonly
          readOnly   
        />
      </div>
  
      <div className="mb-5">
        <input
          type="password"
          placeholder="Password (at least 5 characters)"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[15px] leading-7 text-headingColor placeholder:text-textColor rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
          minLength={5}
        />
      </div>
  
      <div className="mb-5">
        <input
          type="text"
          placeholder="Blood Type"
          name="bloodType"
          value={formData.bloodType}
          onChange={handleInputChange}
          className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[15px] leading-7 text-headingColor placeholder:text-textColor rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
          required
        />
      </div>
  
      <div className="mb-5 flex items-center justify-between">
        <label className="text-headingColor font-bold text-[16px]  leading-7">
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="text-textColor  ml-4 font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
  
      <div className="mb-5 flex items-center gap-3">
        <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-black flex items-center justify-center shadow-lg">
          {formData.photo ? (
            <img
              src={formData.photo}
              alt=""
              className="w-full rounded-full"
            />
          ) : (
            <img
              // src={avatar}
              alt="Default Avatar"
              className="w-full rounded-full"
            />
          )}
        </figure>
  
        <div className="relative w-[140px] h-[50px]">
          <input
            type="file"
            className="broder border-[4px] absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            name="photo"
            onChange={handleFileInputChange}
            id="customFile"
            accept=".jpg, .png"
          />
          <label
            htmlFor="customFile"
            className="bg-blue-500 absolute top-0 left-0 w-full h-full flex items-center px-[15px] py-[9px] text-[16px] leading-6 overflow-hidden text-white font-semibold rounded-lg truncate cursor-pointer hover:bg-blue-600 transition-all duration-300"
          >
            {selectedFile ? selectedFile.name : "Upload Photo"}
          </label>
        </div>
      </div>
  
      <div className="mt-[35px]">
        <button
          disabled={loading && true}
          type="submit"
          className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-primaryColor-dark"
        >
          {loading ? <RingLoader size={35} color={"#fff"} /> : 'UPDATE'}
        </button>
      </div>
    </form>
  </div>
  
  )
}

export default Profile
