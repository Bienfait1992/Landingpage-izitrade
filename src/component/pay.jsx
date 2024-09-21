
import { useState } from "react"
import { MdOutlineAddBusiness } from "react-icons/md";





export const IzitradePay = ()=>{

    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
    setIsOn(!isOn);
  };

    return (

//         <div
//   class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
//   <a href="#!">
//     <img
//       class="rounded-t-lg"
//       src="src/component/images/photo-1498050108023-c5249f4df085.jpg"
//       alt="" />
//   </a>
//   <div class="p-6">
//     <h5
//       class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
//       Card title
//     </h5>
//     <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
//       Some quick example text to build on the card title and make up the
//       bulk of the card's content.
//     </p>
//     <button
//       type="button"
//       class="inline-block rounded bg-blue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
//       data-twe-ripple-init
//       data-twe-ripple-color="light">
//       Button
//     </button>
//   </div>
// </div>
    
        <div className=" w-80  m-auto   bg-[#ffffff] rounded-[10px] shadow-2xl mb-4 mt-4 border font-archivo ">
            
            <div className="">

                 <img src="src/component/images/photo-1498050108023-c5249f4df085.jpg" alt="" className="rounded-t-[5px]   m-auto "/>
            </div>

            <div className="text-sm  text-[#000000] p-4 text-justify ">
                <h1 className=" mb-4 font-medium text-[18px]">Site web et Adresses emails pour entreprises avec nom de domaine et hébergement annuel </h1>
                <p className="text-smm font-thin text-[15px]">Votre entreprise ou affaire a besoin d'un site web de qualité ainsi que des courriels professionnels. Payez et nous nous occupons du reste.</p> 
            </div>
            <div className="flex text-smm  justify-center mb-2 mt-2">
                <div>200USD</div>
                
                <div className=" border-l-[2px] border-t-none border-b-none border-r-none border-black pl-1 ml-2 flex items-center gap-1"><MdOutlineAddBusiness size={20} color="green"/><div className="font-bold">NTOPROG</div></div>
                
            </div>
           
           
            <div className="flex flex-col p-4 pt-2 pb-4 border border-l-none border-r-none border-b-none">
                   
                    <div className=" ">
                        <input type="tel" name="telephone" id="telephone" className="  bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-4 rounded-l-lg  " placeholder="Votre numero de téléphone"  />
                    </div>

                    <div className="flex justify-center p-2 items-center justify-between">
                    
                        <div>
                            <button onClick={toggle}
                                    className={`${
                                       
                                        isOn ? 'bg-blue-700 ' : 'bg-white-300 border border-gray-300'
                                    } relative inline-flex items-center h-4 rounded-full w-8 transition-colors duration-300 focus:outline-none ` } >
                                    
                                    <span
                                    className={`${ 
                                        isOn? 'bg-white' : 'bg-gray-300'
                                    }
                                        ${
                                        isOn ? 'translate-x-5'  : 'translate-x-1'
                                    } inline-block w-2.5 h-2.5 transform  rounded-full transition-transform duration-300`}
                                    />
                            </button>
                        </div>
                        <div>
                            <p className="text-[15px] font-thin">J'accepte les Termes & Conditions.</p>
                        </div>
                    </div>
                
                
                <div className="text-sm  bg-orange-100 pl-6  pr-6  p-3 flex justify-between mb-6 text-blue">
                   <div><a href="/" className="font-medium text-[#4F46E5] hover:underline">Retourner</a></div> 
                   <div><a href="/" className="font-medium text-[#4F46E5] hover:underline ">Termes & Conditions</a></div> 
                </div>

                <button type="submit" 
                disabled={!isOn}
                className={`${
                    isOn ? 'outline-none border  border-yellow-500 text-yellow-500 w-full  text-center hover:bg-yellow-500 hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 ' : ' border  border-yellow-300 text-yellow-300'
                  } text-white  py-2 px-4 rounded transition duration-300`}
                >
                    Payer maintenant
                </button>
                
            </div>
            
        </div>
        
                
            
        )
        }
