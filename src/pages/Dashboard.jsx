import React from "react";
import DataTable from "../components/DataTable";
import { BorderLine } from "../ui-elements";
import CenteredLayout from "../components/layouts/CenteredLayout";
import { MailIcon, CloudDownloadIcon, AddIcon } from "../assets/svg-components";
import visaCard from "../assets/svg/visa.svg";
import mastercard from "../assets/svg/mastercard.svg";
import purpleCheckIcon from "../assets/svg/purple-check.svg";
import neutralCheckIcon from "../assets/svg/neutral-check.svg";

const Dashboard = () => {

  const formSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <CenteredLayout>
    <div className="w-[49.75rem mt-7 z-[100]">
      <ul className="flex items-center text-xsm font-normal">
        <li className="min-w-[7.5rem] border border-borderLine px-4 py-2 rounded-bl rounded-tl">
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
                name="email__type"
                id="email__type__one"
                className="accent-purple outline-0 rounded-[8px] border border-[#DDDADB]"
              />
              <label htmlFor="email__type__one" className="cursor-pointer">
                <div className="translate-y-2">
                  <h3 className="text-[#344054] font-normal text-xsm leading-[1rem]">
                    Send to my account email
                  </h3>
                  <p className="text-xsm text-[#667085]">
                    Update your billing details and address.
                  </p>
                </div>
              </label>
              
            </div>
            <div className="flex flex-start gap-5 mt-5">
              <input
                type="radio"
                name="email__type"
                checked
                id="email__type__other"
                className="accent-purple outline-0 rounded-[8px] border border-[#DDDADB]"
              />

              <div className="flex flex-col translate-y-4">
                <label
                  htmlFor="email__type__other"
                  className="text-[#344054] font-normal text-xsm cursor-pointer"
                >
                  Send to an alternative email
                </label>
                <input
                  type="text"
                  name="emailHolder"
                  id="email__type"
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
          <form onSubmit={formSubmit}>
            
            <label htmlFor="visa" className="visa__label relative">
              <input
              checked
                type="radio"
                name="payment"
                id="visa"
                className="visa peer/card hidden"
              />
              <div className="visa__inner flex flex-start justify-between gap-2 border border-[#D6BBFB] px-10 py-5 rounded-[8px] mt-5 cursor-pointer peer-checked/card:bg-[#F9F5FF]">
                <div className="flex gap-5">
                  <img src={visaCard} alt="visacard" className="" />
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
                <img src={neutralCheckIcon} alt="" className="visa__neutral__badge -translate-y-2" />
                <img src={purpleCheckIcon} alt="" className="hidden visa__pink__badge -translate-y-2" />
              </div>
            </label>
            <label htmlFor="mastercard" className="mastercard__label relative">
              <input
                type="radio"
                name="payment"
                id="mastercard"
                className="mastercard peer/card hidden"
              />
              <div className="mastercard__inner flex flex-start justify-between gap-2 border border-[#D6BBFB] px-10 py-5 rounded-[8px] mt-5 cursor-pointer peer-checked/card:bg-[#F9F5FF]">
                <div className="flex gap-5">
                  <img src={mastercard} alt="visacard" className="" />
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
                <img src={neutralCheckIcon} alt="" className="neutral__badge -translate-y-2" />
                <img src={purpleCheckIcon} alt="" className="hidden pink__badge -translate-y-2" />
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
    </CenteredLayout>
  );
};

export default Dashboard;
