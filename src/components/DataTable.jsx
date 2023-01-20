import React from "react";
import { SuccessIcon } from "../assets/svg-components";
import userOne from "../assets/svg/user_one.svg";
import userTwo from "../assets/svg/user_two.svg";
import userThree from "../assets/svg/user_three.svg";
import userFour from "../assets/svg/user_four.svg";
import userFive from "../assets/svg/user_five.svg";

const DataTable = () => {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 Capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                Invoice
              </th>
              <th scope="col" class="px-6 py-3">
                Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                User on plan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b border-borderLine dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 ">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-normal text-gray-900 text-sm whitespace-nowrap"
              >
                Basic Plan – Dec 2022
              </th>
              <td class="px-6 py-4 text-xsm font-light">USD $10.00</td>
              <td class="px-6 py-4 text-xsm font-light">Dec 1, 2022</td>
              <td class="px-6 py-4">
                <p className="flex items-center gap-1 text-xsm text-[#027A48] bg-[#ECFDF3] py-1 px-2 rounded-full">
                  <span>
                    <SuccessIcon />
                  </span>
                  Paid
                </p>
              </td>
              <td class="px-6 py-4">
                <div className="flex items-center relative">
                  <img src={userOne} alt="" className="absolute" />
                  <img src={userTwo} alt="" className="absolute left-5" />
                  <img src={userThree} alt="" className="absolute left-10" />
                  <img src={userFour} alt="" className="absolute left-[60px]" />
                  <img src={userFive} alt="" className="absolute left-[80px]" />
                  <div className="h-[25px] w-[25px] flex justify-center absolute rounded-full text-[10px] left-[95px] bg-sideBar">
                    <span className="translate-y-1 font-normal">+2</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="bg-white border-b border-borderLine dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 ">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-2"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-2" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-normal text-gray-900 text-sm text-xsm whitespace-nowrap"
              >
                Basic Plan – Dec 2022
              </th>
              <td class="px-6 py-4 text-xsm font-light">USD $10.00</td>
              <td class="px-6 py-4 text-xsm font-light">Dec 1, 2022</td>
              <td class="px-6 py-4">
                <p className="flex items-center gap-1 text-xsm text-[#027A48] bg-[#ECFDF3] py-1 px-2 rounded-full">
                  <span>
                    <SuccessIcon />
                  </span>
                  Paid
                </p>
              </td>
              <td class="px-6 py-4">
                <div className="flex items-center relative">
                  <img src={userOne} alt="" className="absolute" />
                  <img src={userTwo} alt="" className="absolute left-5" />
                  <img src={userThree} alt="" className="absolute left-10" />
                  <img src={userFour} alt="" className="absolute left-[60px]" />
                  <img src={userFive} alt="" className="absolute left-[80px]" />
                  <div className="h-[25px] w-[25px] flex justify-center absolute rounded-full text-[10px] left-[95px] bg-sideBar">
                    <span className="translate-y-1 font-normal">+1</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="bg-white border-b border-borderLine dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 ">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-3"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-3" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-normal text-gray-900 text-sm whitespace-nowrap"
              >
                Basic Plan – Dec 2022
              </th>
              <td class="px-6 py-4 text-xsm font-light">USD $10.00</td>
              <td class="px-6 py-4 text-xsm font-light">Dec 1, 2022</td>
              <td class="px-6 py-4">
                <p className="flex items-center gap-1 text-xsm text-[#027A48] bg-[#ECFDF3] py-1 px-2 rounded-full">
                  <span>
                    <SuccessIcon />
                  </span>
                  Paid
                </p>
              </td>
              <td class="px-6 py-4">
                <div className="flex items-center relative">
                  <img src={userOne} alt="" className="absolute" />
                  <img src={userTwo} alt="" className="absolute left-5" />
                  <img src={userThree} alt="" className="absolute left-10" />
                  <img src={userFour} alt="" className="absolute left-[60px]" />
                  <img src={userFive} alt="" className="absolute left-[80px]" />
                </div>
              </td>
            </tr>
            <tr class="bg-white border-b border-borderLine dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 ">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-3"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-3" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-normal text-gray-900 text-sm whitespace-nowrap"
              >
                Basic Plan – Dec 2022
              </th>
              <td class="px-6 py-4 text-xsm font-light">USD $10.00</td>
              <td class="px-6 py-4 text-xsm font-light">Dec 1, 2022</td>
              <td class="px-6 py-4">
                <p className="flex items-center gap-1 text-xsm text-[#027A48] bg-[#ECFDF3] py-1 px-2 rounded-full">
                  <span>
                    <SuccessIcon />
                  </span>
                  Paid
                </p>
              </td>
              <td class="px-6 py-4">
                <div className="flex items-center relative">
                  <img src={userOne} alt="" className="absolute" />
                  <img src={userTwo} alt="" className="absolute left-5" />
                  <img src={userThree} alt="" className="absolute left-10" />
                </div>
              </td>
            </tr>
            <tr class="bg-white border-b border-borderLine dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 ">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-3"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-3" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-normal text-gray-900 text-sm whitespace-nowrap"
              >
                Basic Plan – Dec 2022
              </th>
              <td class="px-6 py-4 text-xsm font-light">USD $10.00</td>
              <td class="px-6 py-4 text-xsm font-light">Dec 1, 2022</td>
              <td class="px-6 py-4">
                <p className="flex items-center gap-1 text-xsm text-[#027A48] bg-[#ECFDF3] py-1 px-2 rounded-full">
                  <span>
                    <SuccessIcon />
                  </span>
                  Paid
                </p>
              </td>
              <td class="px-6 py-4">
                <div className="flex items-center relative">
                  <img src={userOne} alt="" className="absolute" />
                  <img src={userTwo} alt="" className="absolute left-5" />
                  <img src={userThree} alt="" className="absolute left-10" />
                  <img src={userFour} alt="" className="absolute left-[60px]" />
                </div>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 ">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-3"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-3" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-normal text-gray-900 text-sm whitespace-nowrap"
              >
                Basic Plan – Dec 2022
              </th>
              <td class="px-6 py-4 text-xsm font-light">USD $10.00</td>
              <td class="px-6 py-4 text-xsm font-light">Dec 1, 2022</td>
              <td class="px-6 py-4">
                <p className="flex items-center gap-1 text-xsm text-[#027A48] bg-[#ECFDF3] py-1 px-2 rounded-full">
                  <span>
                    <SuccessIcon />
                  </span>
                  Paid
                </p>
              </td>
              <td class="px-6 py-4">
                <div className="flex items-center relative">
                  <img src={userOne} alt="" className="absolute" />
                  <img src={userTwo} alt="" className="absolute left-5" />
                  <img src={userThree} alt="" className="absolute left-10" />
                  <img src={userFour} alt="" className="absolute left-[60px]" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataTable;
