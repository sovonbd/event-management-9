import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <div className="relative lg:mb-96">
        <img
          className="w-full h-[70vh] object-top"
          style={{
            backgroundImage:
              "url('https://in-conference.cmsmasters.net/wp-content/uploads/2015/11/map-1.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          alt=""
        />
        <div className="lg:w-3/4 mx-auto py-14 bg-white lg:absolute lg:top-[400px] lg:left-44 border-b-2 z-20">
          <h2 className="text-center text-5xl">USA</h2>
          <img
            src="https://i.imgur.com/BGzObsJ.jpg"
            className="mx-auto py-4"
            alt=""
          />
          <div className="grid grid-cols-1 gap-10 lg:gap-40 lg:grid-cols-3 justify-between text-center py-5 w-max mx-auto">
            <div className="space-y-4">
              <FaMobileAlt className="mx-auto text-blue-800 text-4xl"></FaMobileAlt>
              <p>1-800-123-1234</p>
              <p className="uppercase tracking-[5px] text-xs">Phone</p>
            </div>
            <div className="space-y-4">
              <FaMapMarkerAlt className="mx-auto text-blue-800 text-4xl"></FaMapMarkerAlt>
              <p>Brooklyn, NY 10036, United States</p>
              <p className="uppercase tracking-[5px] text-xs">ADDRESS</p>
            </div>
            <div className="space-y-4">
              <FaEnvelope className="mx-auto text-blue-800 text-4xl"></FaEnvelope>
              <p>example@example.com</p>
              <p className="uppercase tracking-[5px] text-xs">EMAIL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
