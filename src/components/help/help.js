import User from "../user/user";
import UserClass from "../user/userClass";
import Header from "../header/Header";
import "../../../src/index.css";
import { useState } from "react";

import PartnerOnboarding from "./PartnerOnboarding";
import Legal from "./Legal";
import Faq from "./Faq";
import InstamartOnboarding from "./InstamartOnboarding";

const HelpPage = () => {
  const [selectedSection, setSelectedSection] = useState("partnerOnboarding");
  // Handler function for clicking on a section
  const handleClick = (section) => {
    setSelectedSection(section);
  };
  return (
    <>
      <div>
        <Header />
        <div className="bg-customBlue text-white p-2 h-[100vh] ">
          <h1 className="font-bold text-3xl m-4">Help & Support</h1>
          <h4 className="text-m m-4">
            Let's take a step ahead and help you better
          </h4>
          <div className="bg-white text-black flex p-4 h-[80vh]">
            <div className="bg-gray-300 w-[20%] p-2 m-2 text-gray-500">
              <li className="p-4 list-none">
                <ul
                  className="p-3  hover:bg-white hover:font-bold"
                  onClick={() => handleClick("partnerOnboarding")}
                >
                  Partner Onboarding
                </ul>
                <ul
                  className="p-3  hover:bg-white  hover:font-bold"
                  onClick={() => handleClick("legal")}
                >
                  Legal
                </ul>
                <ul
                  className="p-3  hover:bg-white  hover:font-bold"
                  onClick={() => handleClick("faq")}
                >
                  FaQ's
                </ul>
                <ul
                  className="p-3  hover:bg-white  hover:font-bold"
                  onClick={() => handleClick("instamartOnboarding")}
                >
                  Instamart Onboarding
                </ul>
              </li>
            </div>
            <div className="m-2 p-8 w-[70%]">
              {selectedSection === "partnerOnboarding" && <PartnerOnboarding />}
              {selectedSection === "legal" && <Legal/>}
              {selectedSection === "faq" && <Faq/>}
              {selectedSection === "instamartOnboarding" && (
                <InstamartOnboarding/>
              )}
            </div>
          </div>
        </div>
        {/* <div>
          We value our customer’s time and hence moved away from a single
          customer care number to a comprehensive chat-based support system for
          quick and easy resolution. You no longer have to go through the maze
          of an IVRS call support. Just search for your issue in the help
          section on this page and initiate a chat with us. A customer care
          executive will be assigned to you shortly.{" "}
        </div> */}

        {/* <UserClass name={"ayushi class"} location={"Delhi Class"} /> */}
      </div>
    </>
  );
};

export default HelpPage;
