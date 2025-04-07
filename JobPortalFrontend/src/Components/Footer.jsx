import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1a143a] text-white text-sm">
      <div className="flex flex-col items-center py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl gap-y-8 md:gap-y-0">
          
          <section className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="font-extrabold text-xl mb-2">CarrierHorizon</h3>
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.ynAJPcTkuj1gHvWbhQFZ4QHaMV?w=600&h=999&rs=1&pid=ImgDetMain"
              alt="Logo"
              className="w-16 h-16 rounded-full border-4 border-green-500 transition-transform duration-300 hover:scale-110"
            />
          </section>

          <section className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="font-semibold text-lg mb-2">Connections</h3>
            <ul className="space-y-1">
              <li><a href="/login" className="hover:text-green-400">Login</a></li>
              <li><a href="/SignUp" className="hover:text-green-400">SignUp</a></li>
              <li><a href="/Logout" className="hover:text-green-400">Logout</a></li>
            </ul>
          </section>

          <section className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="font-semibold text-lg mb-2">Facilities</h3>
            <ul className="space-y-1">
              <li>Jobs</li>
              <li>Internships</li>
              <li>Collaboration</li>
              <li>Referral</li>
            </ul>
          </section>

          <section className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="font-semibold text-lg mb-2">Contact</h3>
            <ul className="space-y-1">
              <li>NIT Agartala, Jirania</li>
              <li>PIN: 799122</li>
              <li>Phone: 9382xxxxxxx</li>
              <li>Email: sudip@6969gmail.com</li>
            </ul>
          </section>
        </div>
      </div>

      <div className="bg-[#0f0f0f] py-3 border-t border-gray-700">
        <p className="text-center text-xs">
          © 2024 KuchNahi.com. All rights reserved. |{" "}
          <a href="/privacy" className="underline hover:text-green-400">Privacy Policy</a>{" "}
          |{" "}
          <a href="/terms" className="underline hover:text-green-400">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
