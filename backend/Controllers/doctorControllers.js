import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
         id,
      { $set: req.body },
      { new: true }
    );
    console.log(updatedDoctor)
    res
      .status(200)
      .json({
        success: true,
        message: "successfully Updated",
        data: updateDoctor,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed Update" });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "successfully Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id).populate("reviews").select("-password");
    res
      .status(200)
      .json({ success: true, message: "User Found", data: doctor });
  } catch (error) {
    res.status(404).json({ success: false, message: "No user found" });
  }
};

export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { specialization: { $regex: query, $options: 'i' } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select("-password");
    }
    console.log(doctors);
    res.status(200).json({ success: true, message: "Doctors found", data: doctors });
  } catch (error) {
    console.error("Error fetching doctors:", error); 
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getDoctorProfile = async(req,res) =>{
  const doctorId = req.userId;
  try {
   const doctor = await Doctor.findById(doctorId);

   if(!doctor){
     return res.status(404).json({success:false,message:'Doctor not found'});
   }
   const {password, ...rest} = doctor._doc;
   const appoinments = await Booking.find({doctor:doctorId})
   res.status(200).json({success:true,message:'Profile information is getting', data:{...rest,appoinments}})
   
  } catch (err) {
   return res.status(500).json({success:false,message:'Something went wrong , cannot get'});
  }
}

