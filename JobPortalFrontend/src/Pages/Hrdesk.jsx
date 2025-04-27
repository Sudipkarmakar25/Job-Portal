// Hrdesk.jsx
import React from "react";
import Hrcard from "../Components/Hrcard";

const hrData = [
  {
    company: "TechCorp",
    hrName: "Alice Johnson",
    email: "alice.johnson@techcorp.com",
    phone: "123-456-7890",
  },
  {
    company: "InnoSoft",
    hrName: "Bob Smith",
    email: "bob.smith@innosoft.com",
    phone: "987-654-3210",
  },
  {
    company: "FutureWorks",
    hrName: "Carol Davis",
    email: "carol.davis@futureworks.com",
    phone: "456-789-0123",
  },
  {
    company: "TechCorp",
    hrName: "Alice Johnson",
    email: "alice.johnson@techcorp.com",
    phone: "123-456-7890",
  },
  {
    company: "InnoSoft",
    hrName: "Bob Smith",
    email: "bob.smith@innosoft.com",
    phone: "987-654-3210",
  },
  {
    company: "FutureWorks",
    hrName: "Carol Davis",
    email: "carol.davis@futureworks.com",
    phone: "456-789-0123",
  },
  {
    company: "TechCorp",
    hrName: "Alice Johnson",
    email: "alice.johnson@techcorp.com",
    phone: "123-456-7890",
  },
  {
    company: "InnoSoft",
    hrName: "Bob Smith",
    email: "bob.smith@innosoft.com",
    phone: "987-654-3210",
  },
  {
    company: "FutureWorks",
    hrName: "Carol Davis",
    email: "carol.davis@futureworks.com",
    phone: "456-789-0123",
  },
];

const Hrdesk = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-4">HR Desk</h1>
        <div className="flex flex-col gap-6 items-center w-full max-h-[600px] overflow-y-auto">
          {hrData.map((hr, index) => (
            <Hrcard key={index} hr={hr} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hrdesk;