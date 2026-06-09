import { useEffect } from "react";
import { Download } from "lucide-react";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Bekhukha Tech Solutions - Portfolio";
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white p-8 print:p-0">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 pb-8 border-b-2 border-gray-300 print:page-break-after-avoid">
          <div className="flex items-start justify-between mb-4 print:flex-col">
            <div>
              <h1 className="text-4xl font-bold text-blue-900 mb-2">Bekhukha Tech Solutions</h1>
              <p className="text-gray-600 text-lg">Professional Digital Solutions for South African Businesses</p>
            </div>
            <div className="text-right print:text-left mt-4 print:mt-0">
              <p className="font-semibold">Contact Information</p>
              <p>Email: hello@bekhukhatech.com</p>
              <p>Phone: +27 799 844 222</p>
              <p>Instagram: @bekhukhatechsolution</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-12 print:page-break-inside-avoid">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">Services & Pricing</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Website Development", price: "R2,000", desc: "Professional business websites with smooth animations and responsive design" },
              { title: "Mobile Apps", price: "R3,500", desc: "Android and iOS apps built for your business needs" },
              { title: "Logo Design", price: "R450", desc: "Professional brand logos tailored to your vision" },
              { title: "Website Maintenance", price: "R290/month", desc: "Monthly updates, security, and 24-hour support" },
            ].map((service) => (
              <div key={service.title} className="border-2 border-gray-300 p-4 print:break-inside-avoid">
                <h3 className="font-bold text-lg text-blue-900 mb-2">{service.title}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-3">{service.price}</p>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mb-12 print:page-break-inside-avoid">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">Recent Projects</h2>
          <div className="space-y-4">
            {[
              { name: "E-Commerce Platform", desc: "Full-featured online store with payment integration for a retail business" },
              { name: "Corporate Website", desc: "Professional brand website with SEO optimization and lead generation forms" },
              { name: "Restaurant Management", desc: "Booking system and menu management platform for hospitality sector" },
              { name: "Logo & Branding", desc: "Complete brand identity package including logo, color palette, and guidelines" },
            ].map((project) => (
              <div key={project.name} className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="font-bold text-gray-900">{project.name}</h3>
                <p className="text-gray-700 text-sm">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="mb-12 print:page-break-inside-avoid">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">About Us</h2>
          <p className="text-gray-700 mb-4">
            Bekhukha Tech Solutions is a South African technology service company dedicated to helping businesses grow through modern digital solutions. With over 3 years of experience, we've delivered 50+ projects for 40+ happy clients across the country.
          </p>
          <p className="text-gray-700 mb-4">
            Our team combines creativity with technical expertise to deliver websites, logos, and software solutions that are not only professional but also affordable. We understand the unique challenges faced by South African businesses in the digital landscape.
          </p>
          <p className="text-gray-700">
            From building your first business website to providing ongoing maintenance and software support, we walk the journey with you. Our client-first approach means we listen, adapt, and deliver solutions that truly fit your needs and budget.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-12 print:page-break-inside-avoid">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">Our Team</h2>
          <div className="space-y-4">
            {[
              { name: "Emmanuel Ngobeni", role: "CEO & Founder", bio: "Visionary leader with passion for empowering South African businesses through technology" },
              { name: "Freeman Rikhotso", role: "Manager", bio: "Oversees operations and client relationships, ensuring world-class service delivery" },
              { name: "Praise Nwandula", role: "Chief Operating Officer", bio: "Ensures disciplined execution and operational excellence across all projects" },
            ].map((member) => (
              <div key={member.name} className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 text-sm font-semibold">{member.role}</p>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12 print:page-break-inside-avoid">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">Why Choose Bekhukha?</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Client-Focused Solutions",
              "Continuous Innovation",
              "Reliable & Fast Turnaround",
              "Quality Craftsmanship",
              "Mobile-First Approach",
              "Affordable Pricing",
            ].map((reason) => (
              <div key={reason} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-900 text-white p-8 rounded-lg text-center print:bg-gray-100 print:text-gray-900 print:border-2 print:border-gray-400">
          <h2 className="text-2xl font-bold mb-3">Ready to Grow Your Business?</h2>
          <p className="mb-4">Contact us today for a free consultation and personalized quote.</p>
          <p className="font-bold">WhatsApp: +27 799 844 222 | Instagram: @bekhukhatechsolution</p>
        </div>

        {/* Print Button */}
        <div className="mt-8 text-center print:hidden">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download size={20} />
            Download as PDF
          </button>
          <p className="text-sm text-gray-600 mt-3">Click the button above or use Ctrl+P to save as PDF</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
