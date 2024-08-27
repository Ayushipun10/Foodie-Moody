import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "../../../src/index.css";

const Faq = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <h1 className="font-bold">FAQs</h1>
      <div className="Question 1 border-b-2 m-2">
        <div
          className="accordion title flex justify-between w-[100%]"
          onClick={() => setIsActive(!isActive)}
        >
          <p>
            What are the mandatory documents needed to list my restaurant on
            Foodie Moody?
          </p>
          <span className="m-3">
            <IoIosArrowDown />
          </span>
        </div>
        {isActive && (
          <div className="accordion-content  text-gray-400 text-sm pb-4">
            <ul>
              <li>- Copies of the below documents are mandatory</li>
              <li>- FSSAI Licence OR FSSAI Acknowledgement </li>
              <li>- Pan Card</li>
              <li>- GSTIN Certificate</li>
              <li>- Cancelled Cheque OR bank Passbook</li>
              <li>- Menu</li>
            </ul>
          </div>
        )}
      </div>
      <div className="Question 2 border-b-2 m-2">
        <div
          className="accordion title flex justify-between w-[100%]"
          onClick={() => setIsActive(!isActive)}
        >
          <p>
            After I submit all documents, how long will it take for my
            restaurant to go live on Foodie Moody?
          </p>
          <span className="m-3">
            <IoIosArrowDown />
          </span>
        </div>
        {isActive && (
          <div className="accordion-content  text-gray-400 text-sm pb-4">
            <p>
              After all mandatory documents have been received and verified it
              takes upto 7-10 working days for the onboarding to be completed
              and make your restaurant live on the platform.
            </p>
          </div>
        )}
      </div>
      <div className="Question 3 border-b-2 m-2">
        <div
          className="accordion title flex justify-between w-[100%]"
          onClick={() => setIsActive(!isActive)}
        >
          <p>
            What is this one time Onboarding fees? Do I have to pay for it while
            registering?
          </p>
          <span className="m-3">
            <IoIosArrowDown />
          </span>
        </div>
        {isActive && (
          <div className="accordion-content text-gray-400 text-sm pb-4">
            <p>
              This is a one-time fee charged towards the system & admin costs
              incurred during the onboarding process. It is deducted from the
              weekly payouts after you start receiving orders from Foodie Moody.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
