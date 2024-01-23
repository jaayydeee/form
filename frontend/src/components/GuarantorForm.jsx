import { useEffect, useState } from "react";
  import axios from "axios";
  import PhoneInput from "react-phone-input-2";
  import "react-phone-input-2/lib/style.css";
  import FormImage from "./FormImage";
  // import TypingText from "./TypingText";
  import { toast } from "react-toastify";
  
  const GuarantorForm = () => {
    const [loading,setLoading] = useState(false)
    const [valid, setValid] = useState(true);
    const [error,setError] = useState(false)
    const [success, setSuccess] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [formData, setFormData] = useState({
      employeesFirstName: "",
      employeeslastName: "",
      job: "",
      guarantorFirstName: "",
      guarantorlastName: "",
      email: "",
      ssn: "",
      streetAddress: "",
      city: "",
      postalCode: "",
      relationship: "",
      frontImage: "",
      backImage: "",
    });
  
    const isEmptyField = (formData) => {
      const arrOfValues = Object.values(formData)
      const empty = arrOfValues.filter(val => val === '')
      return empty.length > 0
    }

    const handleChange = (e) => {
      let { name, value } = e.target;
      setFormData((data) => ({
        ...data,
        [name]: value,
      }));
    };
  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   // const res = await axios.post("/api/guarantor", { phoneNumber, ...formData });
    //   fetch("http://localhost:5000/guarantor"),
    //     {
    //       method: "POST",
    //       crossDomain: true,
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //       },
    //       body: JSON.stringify({ phoneNumber, ...formData })
    //         .then((res) => res.json())
    //         .then((data) => console.log(data)),
    //     };
    //   // console.log(res);
    // };
    const handleSubmit = async (e) => {
      e.preventDefault();

      if(isEmptyField(formData)) {
        toast.error('Fill the empty fields')
        return
      }
  
      try {
        setLoading(true)
        const response = await fetch("http://localhost:5000/guarantor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({ phoneNumber, ...formData }),
        });
  
        if (!response.ok) {
          setLoading(false)
        //   throw new Error(HTTP error! Status: ${response.status});
        throw new Error('Error');
        }
  
        const data = await response.json();
        setLoading(false)
        setSuccess(true);
        toast.success("Successfully Submitted !");
        // console.log(data);
      } catch (error) {
        setLoading(false)
        toast.error(error.message);
      }
    };
  
    const handlePhoneNumber = (phone) => {
      setPhoneNumber(phone);
  
      validatePhoneNumber(phone);
      // console.log(phone);
      // console.log(validatePhoneNumber(phone));
    };
    const validatePhoneNumber = (phoneNumber) => {
      const phoneNumberPattern = /^\d{10}$/;
      return phoneNumberPattern.test(phoneNumber);
    };
  
    return (
      <div className=" w-full p-4">
        <span className="block font-semibold text-xl mb-4 text-gray-600">Employees's Details</span>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Employees's First and Last Name */}
          <div className="w-[full] flex flex-col gap-6 lg:flex-row lg:gap-0 lg:space-x-60">
            <div className="flex flex-col flex-1">
              <label className="form_label">first name</label>
              <input
                placeholder=""
                type="text"
                name="employeesFirstName"
                onChange={handleChange}
                value={formData.employeesFirstName}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="form_label">last name</label>
              <input
                placeholder=""
                type="text"
                name="employeeslastName"
                onChange={handleChange}
                value={formData.employeeslastName}
              />
            </div>
          </div>
          {/* Job/Role */}
          <div className="flex ">
            <label className="form_label w-[40%]">Job/Role</label>
            <input
              className="w-[60%]"
              placeholder=""
              type="text"
              name="job"
              onChange={handleChange}
              value={formData.job}
            />
          </div>
  
          <span className="font-semibold text-xl my-4 text-gray-600">Guarantor's Details</span>
          {/* Guarantor's First and Last Name */}
          <div className="w-full flex flex-col gap-6 lg:flex-row lg:gap-0 lg:space-x-60 ">
            <div className="flex flex-col flex-1">
              <label className="form_label">first name</label>
              <input
                placeholder=""
                type="text"
                name="guarantorFirstName"
                onChange={handleChange}
                value={formData.guarantorFirstName}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="form_label">last name</label>
              <input
                placeholder=""
                type="text"
                name="guarantorlastName"
                onChange={handleChange}
                value={formData.guarantorlastName}
              />
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-col lg:flex-row">
            <label className="form_label w-[40%]">Email</label>
            <input
              className="w-[100] lg:w-[60%]"
              placeholder=""
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          {/* Phone Number /SSN */}
          <div className="w-full flex gap-4 lg:gap-0 flex-col lg:flex-row lg:space-x-60">
            <div className="flex flex-col flex-1">
              <label className="form_label">
                phone number
                <PhoneInput
                  country={"us"}
                  value={phoneNumber}
                  onChange={handlePhoneNumber}
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                />
                {!valid && (
                  <span className={`text-red-600 italic`}>Please enter a valid phone number</span>
                )}
              </label>
            </div>
            <div className="flex flex-col flex-1">
              <label className="form_label">SSN</label>
              <input
                placeholder=""
                type="number"
                name="ssn"
                onChange={handleChange}
                value={formData.ssn}
              />
            </div>
          </div>
          {/* street Address/city/Postal code */}
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-20 w-[100%]">
            <div className="flex flex-col flex-1">
              <label className="form_label">street Address</label>
              <input
                className=""
                placeholder=""
                type="text"
                name="streetAddress"
                onChange={handleChange}
                value={formData.streetAddress}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="form_label">city</label>
              <input
                className=""
                placeholder=""
                type="text"
                name="city"
                onChange={handleChange}
                value={formData.city}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="form_label">postal code</label>
              <input
                className=""
                placeholder=""
                type="text"
                name="postalCode"
                onChange={handleChange}
                value={formData.postalCode}
              />
            </div>
          </div>
          {/* Relationship */}
          <div className="flex ">
            <label className="form_label w-[40%]">Relationship with employee</label>
            <input
              className="w-[60%]"
              placeholder=""
              type="text"
              name="relationship"
              onChange={handleChange}
              value={formData.relationship}
            />
          </div>
          {/* Image */}
          <FormImage setFormData={setFormData} />
          {/* {success && <div className="bg-green-400">Successfully submitted</div>} */}
          {/* {success && (
            <TypingText text={"Successfully Submitted"} intervalDuration={50} className="success" />
          )} */}
          <div className="w-full flex justify-center mt-4">
            <button className={`bg-black text-white w-full  p-2 rounded-md uppercase font-semibold ${loading && 'cursor-wait'}`} disabled={loading}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
  
  export default GuarantorForm;