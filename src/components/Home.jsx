import React from 'react'
import polo from '../components/shopingcartimages/polo.jpg';
import {BsFillCartPlusFill} from 'react-icons/bs'

function Home() {
  return (
  
    <div>

    {/* navbar with cart start*/}
       
    <div className="bg-[#434be6] p-4 w-full relative">
        <div className="flex flex-cols justify-end px-2   items-center  ">
            <span className='bg-green-500  rounded-xl px-1 absolute text-[12px] top-[9px]  right-7 text-white border border-black'>
            0
            </span>

            <BsFillCartPlusFill size={30} className='' />
        </div>
      </div>
    {/* navbar with cart end */}
   
   <div className="max-w-[1240px] m-auto   shadow-xl min-h-[400px] mx-auto p-3 px-12  my-12  border ">
        <div className="grid grid-cols-2 py-6 ">
          <div className="">
            <p className=" uppercase font-bold"> product</p>
          </div>

          <div className="flex md:flex-col lg:flex-row lg:gap-10  ">
            <div>
              <p className=" uppercase font-bold"> quantity</p>
            </div>

            <div>
              <p className=" uppercase font-bold"> price</p>
            </div>

            <div>
              <p className=" uppercase font-bold"> </p>
            </div>

            <div>
              <p className=" uppercase font-bold"> </p>
            </div>
          </div>

          {/* <div className="text-center ">
            <h1 className="font-semibold text-2xl">Order Summary</h1>
          </div>*/}
        </div> 

        <div className="grid grid-cols-2 py-4 ">
          <div className="flex flex-cols  font-bold gap-10">
            <div>
              <img src={polo} alt="fads" className="w-16" />
            </div>

            <div className="">
              <p className="">Allen Solly Men Polo</p>
              <p className="font-thin  text-[12px] ">Size XL, Color Blue</p>
              <p className="font-thin  text-[12px] ">Brand Gucci</p>
            </div>
          </div>

          <div className="flex md:flex-col lg:flex-row lg:gap-10 ">
            <div
              className="inline-flex rounded-md shadow-sm h-[30px]"
              role="group"
            >
              <button
                type="button"
                
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-l rounded-l-md border-b border-gray-900 hover:bg-gray-900 hover:text-white   dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              >
                -
              </button>

              <button
                type="button"
              
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white  dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              >
                + 
              </button>
            </div>

            <div>
              <p className="font-bold">$1156.00</p>
              <p className="font-thin  text-[12px] ">$316 each</p>
            </div>

            <div
              className="inline-flex rounded-md shadow-sm h-[30px]"
              role="group"
            >
              <p className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-md  hover:bg-gray-900 hover:text-white  dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                {" "}
                &#x2665;
              </p>
            </div>

            <div
              className="inline-flex rounded-md shadow-sm h-[30px]"
              role="group"
            >
              <button
                onClick={() => dispatch(emptyCart(product))}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-md  hover:bg-gray-900 hover:text-white  dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              >
                {" "}
                Remove
              </button>
            </div>
          </div>
          </div>
          </div>
  
    </div>
  )
}

export default Home