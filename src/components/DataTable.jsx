import React from "react";
import { SuccessIcon, CloudDownloadIcon } from "../assets/svg-components";
import userOne from "../assets/svg/user_one.svg";
import userTwo from "../assets/svg/user_two.svg";
import userThree from "../assets/svg/user_three.svg";
import userFour from "../assets/svg/user_four.svg";
import userFive from "../assets/svg/user_five.svg";

const DataTable = () => {
  const tabeleData = [
    {
      invoice:'Basic Plan – Dec 2022',
      amount:'USD $10.00',
      date:'Dec 1, 2022',
      status:'Paid',
      plan:{
        profileImages:[userOne, userTwo, userThree, userFour, userFive]
      }
    },
    {
      invoice:'Basic Plan – Dec 2022',
      amount:'USD $10.00',
      date:'Dec 1, 2022',
      status:'Paid',
      plan:{
        profileImages:[userOne, userTwo, userThree, userFour, userFive]
      }
    },
    {
      invoice:'Basic Plan – Dec 2022',
      amount:'USD $10.00',
      date:'Dec 1, 2022',
      status:'Paid',
      plan:{
        profileImages:[userOne, userTwo, userThree, userFour, userFive]
      }
    },
    {
      invoice:'Basic Plan – Dec 2022',
      amount:'USD $10.00',
      date:'Dec 1, 2022',
      status:'Paid',
      plan:{
        profileImages:[userOne, userTwo, userThree, userFour, userFive]
      }
    },
    {
      invoice:'Basic Plan – Dec 2022',
      amount:'USD $10.00',
      date:'Dec 1, 2022',
      status:'Paid',
      plan:{
        profileImages:[userOne, userTwo, userThree]
      }
    },
    {
      invoice:'Basic Plan – Dec 2022',
      amount:'USD $10.00',
      date:'Dec 1, 2022',
      status:'Paid',
      plan:{
        profileImages:[userOne, userTwo, userThree, userFour]
      }
    },
    {
      invoice:'Basic Plan – Dec 2022',
      amount:'USD $10.00',
      date:'Dec 1, 2022',
      status:'Paid',
      plan:{
        profileImages:[userOne, userTwo, userThree, userFour]
      }
    },
  ]
  return (
    <>
      {/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table class="w-full text-sm text-left">
          <thead class="text-[0.75rem] text-[#667085] border-b border-t border-borderLine Capitalize bg-gray-50">
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
              <th scope="col" class="px-3 py-3">
                Amount
              </th>
              <th scope="col" class="px-3 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                User on plan
              </th>
              <th scope="col" class="px-6 py-3">
              
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
              <td class="px-3 py-4 text-xsm font-light">USD $10.00</td>
              <td class="px-3 py-4 text-xsm font-light">Dec 1, 2022</td>
              <td class="px-3 py-4">
                <p className="w-[3.8rem] justify-center font-normal flex items-center gap-1 text-[0.75rem] text-[#027A48] bg-[#ECFDF3] py-1 px-2 rounded-full">
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
              <td><CloudDownloadIcon/></td>
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
              <td class="px-3 py-4 text-xsm font-light">USD $10.00</td>
              <td class="px-3 py-4 text-xsm font-light">Dec 1, 2022</td>
              <td class="px-3 py-4">
                <p className="w-[3.8rem] justify-center font-normal flex items-center gap-1 text-[0.75rem] text-[#027A48] bg-[#ECFDF3] py-1 px-2 rounded-full">
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
              <td><CloudDownloadIcon/></td>
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
              <td class="px-3 py-4 text-xsm font-light">USD $10.00</td>
              <td class="px-3 py-4 text-xsm font-light">Dec 1, 2022</td>
              <td class="px-3 py-4">
                <p className="w-[3.8rem] justify-center font-normal flex items-center gap-1 text-[0.75rem] text-[#027A48] bg-[#ECFDF3] py-1 px-2 rounded-full">
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
              <td><CloudDownloadIcon/></td>
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
              <td class="px-3 py-4 text-xsm font-light">USD $10.00</td>
              <td class="px-3 py-4 text-xsm font-light">Dec 1, 2022</td>
              <td class="px-3 py-4">
                <p className="w-[3.8rem] justify-center font-normal flex items-center gap-1 text-[0.75rem] text-[#027A48] bg-[#ECFDF3] py-1 px-2 rounded-full">
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
              <td><CloudDownloadIcon/></td>
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
              <td class="px-3 py-4 text-xsm font-light">USD $10.00</td>
              <td class="px-3 py-4 text-xsm font-light">Dec 1, 2022</td>
              <td class="px-3 py-4">
                <p className="w-[3.8rem] justify-center font-normal flex items-center gap-1 text-[0.75rem] text-[#027A48] bg-[#ECFDF3] py-1 px-2 rounded-full">
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
              <td><CloudDownloadIcon/></td>
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
              <td class="px-3 py-4 text-xsm font-light">USD $10.00</td>
              <td class="px-3 py-4 text-xsm font-light">Dec 1, 2022</td>
              <td class="px-3 py-4">
                <p className="w-[3.8rem] justify-center font-normal flex items-center gap-1 text-[0.75rem] text-[#027A48] bg-[#ECFDF3] py-1 px-2 rounded-full">
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
              <td><CloudDownloadIcon/></td>
            </tr>
          </tbody>
        </table>
      </div> */}

<div class="flex flex-col shadow-md sm:rounded-lg mt-10">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="text-[0.75rem] text-[#667085] border-b border-t border-borderLine Capitalize bg-gray-50">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              <input type="checkbox" name="" id="" className='accent-purple' />
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Invoice
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Amount
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Date
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Status
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                User on Plan
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-lef">
                
              </th>
           
            </tr>
          </thead>
          <tbody>
            {tabeleData.map((data, index)=>(
              <tr key={index} class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 border-borderLine hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><input type="checkbox" name="" id="" className='accent-purple' /></td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {data.invoice}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {data.amount}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {data.date}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                
                <p className="w-[3.8rem] justify-center font-normal flex items-center gap-1 text-[0.75rem] text-[#027A48] bg-[#ECFDF3] py-1 px-2 rounded-full">
                  <span>
                    <SuccessIcon />
                  </span>
                  {data.status}
                </p>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrp">
                <div className="flex items-center relative">
                  {console.log(data.plan.profileImages.length)}
                  {data.plan.profileImages.map((image, index)=>(
                    <div>
                        <img src={image} alt="" className={`${index===0 ? '-translate-x-0' : index===1 ? '-translate-x-2' : index===2 ? '-translate-x-4' : index===3 ? '-translate-x-6' : index===4 ? '-translate-x-8':''}`} />
                        
                    </div>
                  ))}
                  <div className="h-[25px] w-[25px] flex justify-center absolute rounded-full text-[10px] left-[99px] bottom-0 bg-sideBar">
                      {data.plan.profileImages.length>4 ? <span className="translate-y-1 font-normal">+1</span> : ''}
                  </div>
                </div>
              </td>
              <td class="text-sm text-gray-900 font-light py-4 ">
                <CloudDownloadIcon/>
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default DataTable;
