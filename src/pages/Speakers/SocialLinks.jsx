import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const SocialLinks = () => {
  return (
    <div>
      <div className="flex justify-center gap-4 pt-4">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebookF className="text-black text-lg opacity-30 hover:text-blue-800 hover:opacity-100"></FaFacebookF>
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
          <FaGoogle className="text-black text-lg opacity-30 hover:text-blue-800 hover:opacity-100"></FaGoogle>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram className="text-black text-lg opacity-30 hover:text-blue-800 hover:opacity-100"></FaInstagram>
        </a>
        <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
          <FaTwitter className="text-black text-lg opacity-30 hover:text-blue-800 hover:opacity-100"></FaTwitter>
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <FaYoutube className="text-black text-lg opacity-30 hover:text-blue-800 hover:opacity-100"></FaYoutube>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
