import React from 'react';
import { FaLinkedinIn, FaRegLightbulb, FaBullseye, FaRocket } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-8 animate-fade-in-down">
                        Empowering Futures with <span className="text-blue-600">Carrer</span>Horizon
                    </h1>
                    <div className="w-48 h-2 bg-blue-500 mx-auto mb-12 rounded-full"></div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {AboutUs.map((item, index) => (
                            <div key={index} className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2">
                                <div className="text-blue-600 text-4xl mb-4">
                                    {item.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h2>
                                <div className="space-y-4 text-blue-700 leading-relaxed">
                                    {item.content.map((point, i) => (
                                        <p key={i} className="flex items-start">
                                            <span className="text-blue-500 mr-2">▹</span>
                                            {point}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

       {/* Team Section */}
<section className="py-20 px-4 bg-blue-50">
    <div className="max-w-4xl mx-auto"> {/* Reduced max-width for better focus */}
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Core Team</h2>
            <p className="text-xl text-blue-600 max-w-xl mx-auto">
                The driving force behind our success
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Two-column layout */}
            {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                    <div className="relative mb-8">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-80 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-2xl flex items-end p-6">
                            <p className="text-white text-base leading-relaxed">{member.bio}</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">{member.name}</h3>
                        <p className="text-xl text-blue-600 mb-6">{member.role}</p>
                        <div className="flex justify-center space-x-6">
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" 
                               className="text-blue-600 hover:text-blue-800 transition-colors p-3 rounded-full bg-blue-50 hover:bg-blue-100">
                                <FaLinkedinIn className="text-3xl" />
                            </a>
                            <a href={member.github} target="_blank" rel="noopener noreferrer" 
                               className="text-blue-600 hover:text-blue-800 transition-colors p-3 rounded-full bg-blue-50 hover:bg-blue-100">
                                <TbBrandGithubFilled className="text-3xl" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>
        </div>
    );
};

const AboutUs = [
    {
        title: "Our Mission",
        icon: <FaBullseye />,
        content: [
            "Bridge the gap between education and employment",
            "Provide real-time career opportunities",
            "Empower students with verified industry insights",
            "Democratize access to career resources"
        ]
    },
    {
        title: "Our Vision",
        icon: <FaRegLightbulb />,
        content: [
            "Create a holistic career ecosystem",
            "Become India's most trusted career platform",
            "Innovate with AI-driven solutions",
            "Expand to 50+ cities by 2025"
        ]
    },
    {
        title: "Our Promise",
        icon: <FaRocket />,
        content: [
            "100% verified opportunities",
            "Personalized career guidance",
            "Continuous platform improvements",
            "24/7 student support"
        ]
    }
];

const teamMembers = [
    {
        name: "Sudip Karmakar",
        role: "Backend Developer",
        image: "https://example.com/rahul.jpg",
        linkedin: "#",
        github: "#",
        bio: "Tech visionary with 10+ years in EdTech"
    },
    {
      name: "Sagnik das",
      role: "Backend Developer",
      image: "https://example.com/rahul.jpg",
      linkedin: "#",
      github: "#",
      bio: "Tech visionary with 10+ years in EdTech"
    }
   
];

export default About;