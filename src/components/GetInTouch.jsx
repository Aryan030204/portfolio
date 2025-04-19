import React from "react";
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <div className="max-w-md mx-auto w-[22rem] h-[45rem] lg:w-[30rem] bg-white shadow-md rounded-md p-8">
      <h2 className="text-3xl lg:text-2xl font-bold text-gray-800 mb-6">
        <span className="text-red-500 underline underline-offset-4">Get</span>{" "}
        in touch
      </h2>

      <div className="mb-6 space-y-4 text-gray-700">
        <div className="flex items-start gap-3">
          <Phone className="text-xl mt-1" />
          <div>
            <p className="font-semibold">Phone :</p>
            <p className="text-gray-600">+91 9289641150</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="text-xl mt-1" />
          <div>
            <p className="font-semibold">Address :</p>
            <p className="text-gray-600">
              33, F block NIT-3, Faridabad
              <br />
              India
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="text-xl mt-1" />
          <div>
            <p className="font-semibold">Email :</p>
            <p className="text-gray-600">aroraaryan997@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex gap-5 text-xl text-gray-700 mt-4">
        <Link
          to={"https://www.facebook.com/profile.php?id=100090957905693"}
          target="_blank"
        >
          <Facebook className="cursor-pointer hover:text-red-500 transition" />
        </Link>
        <Link to={"https://x.com/_Aryan_324"} target="_blank">
          <Twitter className="cursor-pointer hover:text-red-500 transition" />
        </Link>
        <Link to={"https://www.instagram.com/_aryan_324/"} target="_blank">
          <Instagram className="cursor-pointer hover:text-red-500 transition" />
        </Link>
        <Link to={"https://github.com/Aryan030204"} target="_blank">
          <Github className="cursor-pointer hover:text-red-500 transition" />
        </Link>
      </div>
      <div className="flex w-full mt-4 shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.4488830582317!2d77.28753670936891!3d28.39524301476936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc2a21556881%3A0xd2f36534221d32d1!2sBlock%20F%2C%20New%20Industrial%20Twp%203%2C%20New%20Industrial%20Township%2C%20Faridabad%2C%20Haryana%20121001!5e0!3m2!1sen!2sin!4v1745047577764!5m2!1sen!2sin"
          width="400"
          height="350"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GetInTouch;
