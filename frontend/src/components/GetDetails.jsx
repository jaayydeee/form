import { useEffect, useState } from "react";
  
  const GetDetails = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/guarantor", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              // You may not need the "Access-Control-Allow-Origin" header for a GET request
            },
            // You can include query parameters in the URL if needed
            // For example, appending "?param1=value1&param2=value2"
          });
  
          if (!response.ok) {
            // throw new Error(HTTP error! Status: ${response.status})
            throw new Error('Error')
          }
  
          const data = await response.json();
          setData(data);
          console.log(data);
        } catch (error) {
          console.error("Error:", error.message);
        }
      };
  
      // Call the fetch function when the component mounts
      fetchData();
    }, []);
    return (
      <div>
        <p>All Guarantors</p>
        {data?.map(
          (
            {
              backImage,
              city,
              email,
              employeesFirstName,
              employeeslastName,
              job,
              guarantorFirstName,
              guarantorlastName,
              phoneNumber,
              ssn,
              streetAddress,
              postalCode,
              relationship,
              frontImage,
            },
            index
          ) => (
            <div className="w-full" key={index}>
              <div className="w-full flex">
                <img className="w-40 h-40" src={backImage} alt="backImage" />
                <img className="w-40 h-40" src={frontImage} alt="frontImage" />
              </div>
              <p className="">
                <span className="font-bold">City</span>
                {city}
              </p>
              <p className="">
                <span className="font-bold">Employee FirtName</span>
                {employeesFirstName}
              </p>
              <p className="">
                <span className="font-bold">Employee LastName</span>
                {employeeslastName}
              </p>
              <p className="">
                <span className="font-bold">Email</span>
                {email}
              </p>
              <p className="">
                <span className="font-bold">Job</span>
                {job}
              </p>
              <p className="">
                <span className="font-bold">Guarantor FirstName</span>
                {guarantorFirstName}
              </p>
              <p className="">
                <span className="font-bold">Guarantor LastName</span>
                {guarantorlastName}
              </p>
              <p className="">
                <span className="font-bold">SSN</span>
                {ssn}
              </p>
              <p className="">
                <span className="font-bold">Phone Number</span>
                {phoneNumber}
              </p>
              <p className="">
                <span className="font-bold">Street Address</span>
                {streetAddress}
              </p>
              <p className="">
                <span className="font-bold">Postal Address</span>
                {postalCode}
              </p>
              <p className="">
                <span className="font-bold">Relationship</span>
                {relationship}
              </p>
            </div>
          )
        )}
      </div>
    );
  };
  export default GetDetails;