import { useState } from "react";
  
  const FormImage = ({ setFormData }) => {
    // Front
    const [filePreview, setFilePreview] = useState("");
    // const [frontImage, setFrontImage] = useState();
    function handleChange(e) {
      setFilePreview(URL.createObjectURL(e.target.files[0]));
      // setFile(e.target.files[0]);
      convertToBase64(e, "frontImage");
    }
  
    // Back
    const [backFilePreview, setBackFilePreview] = useState();
    // const [backImage, setBackImage] = useState();
    function handleBackImageChange(e) {
      setBackFilePreview(URL.createObjectURL(e.target.files[0]));
      // setBackFile(e.target.files[0]);
      convertToBase64(e, "backImage");
    }
  
    const convertToBase64 = (e, name) => {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        // console.log(reader.result); //base64 encoded string
        setFormData((formData) => ({
          ...formData,
          [name]: reader.result,
        }));
      };
      reader.onerror = (error) => {
        console.log("Error :", error);
      };
    };
  
    return (
      <div className="flex gap-4 pointer-events-none">
        <span className="font-semibold flex items-center w-[40%]">Identity Card</span>
        <div className="w-[60%] flex flex-col gap-2 lg:flex-row">
          <div className="flex-1">
            <label htmlFor="file" className="flex flex-col items-center">
              <img
                src={
                  filePreview
                    ? filePreview
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
                }
                alt="avatar"
                className={`w-20 h-20 ${filePreview ? "block" : "hidden"}`}
              />
              <input
                className="pointer-events-auto"
                type="file"
                accept="image/*"
                id="file"
                name="frontImg"
                // style={{ display: "none" }}
                onChange={handleChange}
              />
            </label>
          </div>
          {/* BackImage */}
          <div className="flex-1 ">
            <label htmlFor="file" className="flex flex-col items-center">
              <img
                src={
                  backFilePreview
                    ? backFilePreview
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
                }
                alt="avatar"
                className={`w-20 h-20 ${backFilePreview ? "block" : "hidden"}`}
              />
  
              <input
                //   className="flex items-center h-40 w-50 bg-red-600 text-center"
                className="pointer-events-auto"
                accept="image/*"
                type="file"
                id="file"
                name="backImage"
                // style={{ display: "none" }}
                onChange={handleBackImageChange}
              />
            </label>
          </div>
        </div>
      </div>
    );
  };
  
  export default FormImage;