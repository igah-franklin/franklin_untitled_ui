import React from "react";
import DataTable from "../components/DataTable";
import { BorderLine } from "../ui-elements";
import { MailIcon, CloudDownloadIcon, AddIcon } from "../assets/svg-components";
import visaCard from "../assets/svg/visa.svg";
import mastercard from "../assets/svg/mastercard.svg";
import purpleCheckIcon from "../assets/svg/purple-check.svg";
import neutralCheckIcon from "../assets/svg/neutral-check.svg";

const Dashboard = () => {
  return (
    <div className="w-[49.75rem mt-7">
      <ul className="flex items-center text-xsm font-normal">
        <li className="border border-borderLine px-4 py-2 rounded-bl rounded-tl">
          My details
        </li>
        <li className="border border-borderLine px-4 py-2">Profile</li>
        <li className="border border-borderLine px-4 py-2">Password</li>
        <li className="border border-borderLine px-4 py-2">Team</li>
        <li className="border border-borderLine px-4 py-2">Plan</li>
        <li className="border border-borderLine px-4 py-2">Billing</li>
        <li className="border border-borderLine px-4 py-2">Notifications</li>
        <li className="border border-borderLine px-4 py-2">Integrations</li>
        <li className="border border-borderLine px-4 py-2 rounded-br rounded-tr">
          API
        </li>
      </ul>
      <div className="mt-[2rem]">
        <h3 className="text-boldText font-normal text-[1.125rem]">
          Payment method
        </h3>
        <p className="text-xsm text-lightText">
          Update your billing details and address.
        </p>
      </div>
      <BorderLine />
      <div className=" flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <h3 className="text-[#344054] font-normal text-xsm">Contact email</h3>
          <p className="text-xsm text-[#667085]">
            Where should invoices be sent?
          </p>
        </div>
        <div className="w-full md:w-2/3 md:ml-[5rem]">
          <form>
            <div className="flex flex-start gap-5">
              <input
                type="radio"
                name=""
                id=""
                className="accent-sideBar outline-0  border border-1 border-body"
              />
              <div className="translate-y-2">
                <h3 className="text-[#344054] font-normal text-xsm leading-[1rem]">
                  Send to my account email
                </h3>
                <p className="text-xsm text-[#667085]">
                  Update your billing details and address.
                </p>
              </div>
            </div>
            <div className="flex flex-start gap-5 mt-5">
              <input
                type="radio"
                name=""
                checked
                id=""
                className="accent-purple outline-0 rounded-[8px] border border-[#DDDADB]"
              />

              <div className="flex flex-col translate-y-4">
                <label
                  htmlFor="emailHolder"
                  className="text-[#344054] font-normal text-xsm"
                >
                  Send to an alternative email
                </label>
                <input
                  type="text"
                  name="emailHolder"
                  id="emailHolder"
                  value="billing@untitledui.com"
                  className="lg:w-[30rem] outline-0  mt-2 bg-sideBar border border-1 border-dividerLine pl-8 rounded-[0.375rem] py-1"
                />
                <span className="absolute top-9 left-2">
                  <MailIcon />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row mt-10">
        <div className="w-full md:w-1/3">
          <h3 className="text-[#344054] font-normal text-xsm">Card details</h3>
          <p className="text-xsm text-[#667085]">
            Select default payment method.
          </p>
        </div>
        <div className="w-full md:w-2/3 md:ml-[5rem]">
          <form>
            <label htmlFor="visa" className="relative">
              <input
                type="checkbox"
                name="visa"
                id="visa"
                className="peer absolute opacity-[0]"
              />
              <div className="flex flex-start justify-between gap-5 border border-[#D6BBFB] px-10 py-5 rounded-[8px] mt-5 cursor-pointer peer-checked:bg-[#F9F5FF]">
                <div className="flex gap-5">
                  <img
                    src={visaCard}
                    alt="visacard"
                    className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
                  />
                  <div className="md:translate-y-">
                    <small className="text-[#344054] font-normal text-xsm leading-[1rem]">
                      Visa ending in 1234
                    </small>
                    <p className="text-xsm text-[#667085;] font-light">
                      Expiry 06/2024.
                    </p>

                    <div className="text-xsm text-[#667085] font-light">
                      <button className="text-[#667085]">Set as default</button>
                      <button className="text-[#53389E] ml-3">Edit</button>
                    </div>
                  </div>
                </div>
                <img src={neutralCheckIcon} alt="" className="-translate-y-2" />
              </div>
            </label>
            <label htmlFor="mastercard" className="relative">
              <input
                type="checkbox"
                name="mastercard"
                id="mastercard"
                className="peer absolute opacity-[0]"
              />
              <div className="flex flex-start justify-between gap-5 border border-[#D6BBFB] px-10 py-5 rounded-[8px] mt-5 cursor-pointer peer-checked:bg-[#F9F5FF]">
                <div className="flex gap-5">
                  <img src={mastercard} alt="visacard" />
                  <div className="translate-y-2">
                    <small className="text-[#344054] font-normal text-xsm leading-[1rem]">
                      Visa ending in 1234
                    </small>
                    <p className="text-xsm text-[#667085;] font-light">
                      Expiry 06/2024.
                    </p>

                    <div className="text-xsm text-[#667085] font-light">
                      <button className="text-[#667085]">Set as default</button>
                      <button className="text-[#53389E] ml-3">Edit</button>
                    </div>
                  </div>
                </div>
                <img src={neutralCheckIcon} alt="" className="-translate-y-2" />
              </div>
            </label>
            <div className="flex flex-start items-center gap-5 text-[ #667085] mt-5">
              <AddIcon />
              <p>Add new payment method</p>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-between items-center font-normal text-sm mt-5">
        <h3 className="text-[#101828] text-[18px]">Billing history</h3>
        <button className="flex items-center gap-3 py-2 px-4 bg-sideBar border border-[#D0D5DD] text-[#344054] font-sm rounded">
          <span>
            <CloudDownloadIcon />
          </span>
          Download all
        </button>
      </div>
      <DataTable />
    </div>
  );
};

export default Dashboard;
