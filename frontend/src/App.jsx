import { useState } from "react";
  import GuarantorForm from "./components/GuarantorForm";
  import GetDetails from "./components/GetDetails";
  
  function App() {
    return (
      <div className="flex flex-col items-center w-full min-h-screen">
        <div className="w-[95%] md:w-[80%]">
          <p className="w-full uppercase text-center font-bold text-2xl py-5">
            Employee guarantor form
          </p>
          <GuarantorForm />
          {/* <GetDetails /> */}
        </div>
      </div>
    );
  }
  
  export default App;
  
