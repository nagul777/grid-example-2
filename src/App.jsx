import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-[#fcf8f5] p-[20px_0px]'>

          <div className='p-4 lg:flex flex-row-reverse gap-8 lg:px-8 2xl:w-[1280px] m-[0px_auto] pt-[80px]'>
         
                 <div className='bg-white p-6 lg:w-[45%] xl:w-[35%] rounded-lg h-fit'>
                    <h2 className='text-2xl font-extrabold text-[#C73B0F] pb-[50px] hover:text-orange-800'>Your Cart (0)</h2>
                          <div className='flex flex-col justify-center items-center'>
                              <img src="https://product-list-with-cart-front-end.netlify.app/c2bca079754e885ead5d.svg" alt="cake" className='w-[128px]' />
                               <p className='text-[#87635A] text-base font-semibold pt-6 pb-4 hover:text-orange-800'>Your added items will appear here</p>
                          </div>
               </div>

                  <div className='p-4 lg:w-[55%] xl:w-[65%]'>

                     <div>
                      <h2 className='text-[40px] font-extrabold pb-[33px]'>Desserts</h2>
                     </div>

                        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>

                            <div className='grid gap-9 justify-start items-start p-2 rounded-md transitions duration-500 hover:bg-indigo-100'>
                                 <div className='relative'>

                                        <img src="https://product-list-with-cart-front-end.netlify.app/images/image-waffle-mobile.jpg" alt="straberry" className='rounded-lg h-[240px] object-cover'/>
                      
                                           <div className='flex justify-center'>
                                                  <button className='bg-white text-black p-[14px_28px] rounded-full border border-black flex justify-center gap-2 absolute bottom-[-25px] hover:bg-orange-200'>
                                                      <img src="https://product-list-with-cart-front-end.netlify.app/12141fdf0da9c38c6421.svg" alt="" />
                                                         <p className='text-sm font-semibold'>Add to Cart</p>
                                                     </button>
                                             </div>
                                             <span className='bg-lime-400 absolute top-0 right-2 p-3 font-medium rounded-b-lg animate-pulse'>order now</span>
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                         <p className='text-sm text-[#87635A] font-normal'>Waffle</p>
                                         <h3 className='text-base font-semibold'>Waffle with Berries</h3>
                                         <p className='text-base text-[#C73B0F] font-semibold'>$6.50</p>
                                      </div>
                              </div>

                              <div className='grid gap-9 justify-start items-start p-2 rounded-md transitions duration-500 hover:bg-indigo-100'>
                                 <div className='relative'>

                                        <img src="https://product-list-with-cart-front-end.netlify.app/images/image-waffle-mobile.jpg" alt="straberry" className='rounded-lg h-[240px] object-cover'/>
                      
                                           <div className='flex justify-center'>
                                                  <button className='bg-white p-[14px_28px] rounded-full border border-black flex justify-center gap-2 absolute bottom-[-25px]  hover:bg-orange-200'>
                                                      <img src="https://product-list-with-cart-front-end.netlify.app/12141fdf0da9c38c6421.svg" alt="" />
                                                         <p className='text-sm font-semibold'>Add to Cart</p>
                                                     </button>
                                             </div>
                                             <span className='bg-indigo-400 absolute top-0 right-2 p-3 font-medium rounded-b-lg animate-pulse'>order now</span>
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                         <p className='text-sm text-[#87635A] font-normal'>Waffle</p>
                                         <h3 className='text-base font-semibold'>Waffle with Berries</h3>
                                         <p className='text-base text-[#C73B0F] font-semibold'>$6.50</p>
                                      </div>
                              </div>

                              <div className='grid gap-9 justify-start items-start p-2 rounded-md transitions duration-500 hover:bg-indigo-100'>
                                 <div className='relative'>

                                        <img src="https://product-list-with-cart-front-end.netlify.app/images/image-waffle-mobile.jpg" alt="straberry" className='rounded-lg h-[240px] object-cover'/>
                      
                                           <div className='flex justify-center'>
                                                  <button className='bg-white p-[14px_28px] rounded-full border border-black flex justify-center gap-2 absolute bottom-[-25px]  hover:bg-orange-200'>
                                                      <img src="https://product-list-with-cart-front-end.netlify.app/12141fdf0da9c38c6421.svg" alt="" />
                                                         <p className='text-sm font-semibold'>Add to Cart</p>
                                                     </button>
                                             </div>
                                             <span className='bg-green-400 absolute top-0 right-2 p-3 font-medium rounded-b-lg animate-pulse'>order now</span>   
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                         <p className='text-sm text-[#87635A] font-normal'>Waffle</p>
                                         <h3 className='text-base font-semibold'>Waffle with Berries</h3>
                                         <p className='text-base text-[#C73B0F] font-semibold'>$6.50</p>
                                      </div>
                              </div>

                              <div className='grid gap-9 justify-start items-start p-2 rounded-md transitions duration-500 hover:bg-indigo-100'>
                                 <div className='relative'>

                                        <img src="https://product-list-with-cart-front-end.netlify.app/images/image-waffle-mobile.jpg" alt="straberry" className='rounded-lg h-[240px] object-cover'/>
                      
                                           <div className='flex justify-center'>
                                                  <button className='bg-white p-[14px_28px] rounded-full border border-black flex justify-center gap-2 absolute bottom-[-25px]  hover:bg-orange-200'>
                                                      <img src="https://product-list-with-cart-front-end.netlify.app/12141fdf0da9c38c6421.svg" alt="" />
                                                         <p className='text-sm font-semibold'>Add to Cart</p>
                                                     </button>
                                             </div>
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                         <p className='text-sm text-[#87635A] font-normal'>Waffle</p>
                                         <h3 className='text-base font-semibold'>Waffle with Berries</h3>
                                         <p className='text-base text-[#C73B0F] font-semibold'>$6.50</p>
                                      </div>
                              </div>

                              <div className='grid gap-9 justify-start items-start p-2 rounded-md transitions duration-500 hover:bg-indigo-100'>
                                 <div className='relative'>

                                        <img src="https://product-list-with-cart-front-end.netlify.app/images/image-waffle-mobile.jpg" alt="straberry" className='rounded-lg h-[240px] object-cover'/>
                      
                                           <div className='flex justify-center'>
                                                  <button className='bg-white p-[14px_28px] rounded-full border border-black flex justify-center gap-2 absolute bottom-[-25px]  hover:bg-orange-200'>
                                                      <img src="https://product-list-with-cart-front-end.netlify.app/12141fdf0da9c38c6421.svg" alt="" />
                                                         <p className='text-sm font-semibold'>Add to Cart</p>
                                                     </button>
                                             </div>
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                         <p className='text-sm text-[#87635A] font-normal'>Waffle</p>
                                         <h3 className='text-base font-semibold'>Waffle with Berries</h3>
                                         <p className='text-base text-[#C73B0F] font-semibold'>$6.50</p>
                                      </div>
                              </div>

                              <div className='grid gap-9 justify-start items-start p-2 rounded-md transitions duration-500 hover:bg-indigo-100'>
                                 <div className='relative'>

                                        <img src="https://product-list-with-cart-front-end.netlify.app/images/image-waffle-mobile.jpg" alt="straberry" className='rounded-lg h-[240px] object-cover'/>
                      
                                           <div className='flex justify-center'>
                                                  <button className='bg-white p-[14px_28px] border border-black rounded-full flex justify-center gap-2 absolute bottom-[-25px]  hover:bg-orange-200'>
                                                      <img src="https://product-list-with-cart-front-end.netlify.app/12141fdf0da9c38c6421.svg" alt="" />
                                                         <p className='text-sm font-semibold'>Add to Cart</p>
                                                     </button>
                                             </div>
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                         <p className='text-sm text-[#87635A] font-normal'>Waffle</p>
                                         <h3 className='text-base font-semibold'>Waffle with Berries</h3>
                                         <p className='text-base text-[#C73B0F] font-semibold'>$6.50</p>
                                      </div>
                              </div>

                              <div className='grid gap-9 justify-start items-start p-2 rounded-md transitions duration-500 hover:bg-indigo-100'>
                                 <div className='relative'>

                                        <img src="https://product-list-with-cart-front-end.netlify.app/images/image-waffle-mobile.jpg" alt="straberry" className='rounded-lg h-[240px] object-cover '/>
                      
                                           <div className='flex justify-center'>
                                                  <button className='bg-white p-[14px_28px] rounded-full border border-black flex justify-center gap-2 absolute bottom-[-25px]  hover:bg-orange-200'>
                                                      <img src="https://product-list-with-cart-front-end.netlify.app/12141fdf0da9c38c6421.svg" alt="" />
                                                         <p className='text-sm font-semibold'>Add to Cart</p>
                                                     </button>
                                             </div>
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                         <p className='text-sm text-[#87635A] font-normal'>Waffle</p>
                                         <h3 className='text-base font-semibold'>Waffle with Berries</h3>
                                         <p className='text-base text-[#C73B0F] font-semibold'>$6.50</p>
                                      </div>
                              </div>

                              <div className='grid gap-9 justify-start items-start p-2 rounded-md transitions duration-500 hover:bg-indigo-100'>
                                 <div className='relative'>

                                        <img src="https://product-list-with-cart-front-end.netlify.app/images/image-waffle-mobile.jpg" alt="straberry" className='rounded-lg h-[240px] object-cover'/>
                      
                                           <div className='flex justify-center'>
                                                  <button className='bg-white p-[14px_28px] rounded-full border border-black flex justify-center gap-2 absolute bottom-[-25px]  hover:bg-orange-200'>
                                                      <img src="https://product-list-with-cart-front-end.netlify.app/12141fdf0da9c38c6421.svg" alt="" />
                                                         <p className='text-sm font-semibold'>Add to Cart</p>
                                                     </button>
                                             </div>
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                         <p className='text-sm text-[#87635A] font-normal'>Waffle</p>
                                         <h3 className='text-base font-semibold'>Waffle with Berries</h3>
                                         <p className='text-base text-[#C73B0F] font-semibold'>$6.50</p>
                                      </div>
                              </div>

                              <div className='grid gap-9 justify-start items-start p-2 rounded-md transitions duration-500 hover:bg-indigo-100'>
                                 <div className='relative'>

                                        <img src="https://product-list-with-cart-front-end.netlify.app/images/image-waffle-mobile.jpg" alt="straberry" className='rounded-lg h-[240px] object-cover'/>
                      
                                           <div className='flex justify-center'>
                                                  <button className='bg-white p-[14px_28px] rounded-full border border-black flex justify-center gap-2 absolute bottom-[-25px]  hover:bg-orange-200'>
                                                      <img src="https://product-list-with-cart-front-end.netlify.app/12141fdf0da9c38c6421.svg" alt="" />
                                                         <p className='text-sm font-semibold'>Add to Cart</p>
                                                     </button>
                                             </div>
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                         <p className='text-sm text-[#87635A] font-normal'>Waffle</p>
                                         <h3 className='text-base font-semibold'>Waffle with Berries</h3>
                                         <p className='text-base text-[#C73B0F] font-semibold'>$6.50</p>
                                      </div>
                              </div>          

                           </div>
        
                   </div>

          </div>

     </div>
    </>
  )
}

export default App
