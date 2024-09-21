import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { GrShieldSecurity } from "react-icons/gr";
import { FaUserCog } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineSolution } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { IzitradePay } from "./pay";
import { useEffect } from "react";
import AOS from "aos"
import { BaniereCookies } from "./banierecookies";



export const LandigPage = ()=>{
    const scrollToTop = () => {
        scroll.scrollToTop();
      };
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);

        useEffect(() => {
        AOS.init({
        duration: 2000, //Durée de l'animation
        offset: 200,    // Décalage par rapport à l'élément déclenchant
    });
  }, []);

  };
    
    return(
        <>
         <div className="min-h-screen bg-gray-100 text-gray-800 font-archivo">
            {/* Header */}
            <header className="bg-white shadow-md sticky z-30 top-0">
              <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold text-blue-600" onClick={scrollToTop}><img src="src/component/images/Sans titre - 4.png " alt="" className="w-[100px]"/></div>
                <nav className="hidden md:flex">
                  <ul className="flex space-x-4 ">

                  <Link
                                   to=""
                                   activeClass="active"
                                //    to="features"
                                   spy={true}
                                   smooth={true}
                                   offset={-150}
                                   duration={500}
                                   className="hover:text-blue-600 cursor-pointer"
                                   onClick={scrollToTop}
                                 >
                                 Accueil
                    </Link>
                       
                  
                  <Link
                                   to="features"
                                   activeClass="active"
                                //    to="features"
                                   spy={true}
                                   smooth={true}
                                   offset={-150}
                                   duration={500}
                                   className="hover:text-blue-600 cursor-pointer"
                                 >
                                 Fonctionalités
                    </Link>
                       
                    
                    {/* <li><a href="#features" className="hover:text-blue-600">Fonctionalités</a></li> */}

                    <Link
                                   to="testimonials"
                                   activeClass="active"
                                  //  to="features"
                                   spy={true}
                                   smooth={true}
                                   offset={-150}
                                   duration={500}
                                   className="hover:text-blue-600 cursor-pointer"
                                 >
                                Temoignages
                                 </Link>


                                 <Link
                                   to="contact"
                                   activeClass="active"
                                  //  to="features"
                                   spy={true}
                                   smooth={true}
                                   offset={-150}
                                   duration={500}
                                   className="hover:text-blue-600 cursor-pointer"
                                 >
                                Contact
                                 </Link>
                       
                   
                    <Link
                                   to=""
                                   activeClass="active"
                                  
                                   spy={true}
                                   smooth={true}
                                   offset={-150}
                                   duration={500}
                                   className="hover:text-blue-600 cursor-pointer"
                                 >
                             <button className="bg-blue-600 text-white rounded-[5px] p-1 hover:bg-gray-300 hover:text-blue-600">Connexion</button> 
                                 </Link>
                  </ul>
                </nav>



                <div className="md:hidden">
                    <button onClick={toggleMenu} >
                    <IoMenu size={24} />
                    </button>
                </div>

              </div>

{/* Mobile Menu */}
<div id="telephone">
{isOpen && (
          <nav  className="md:hidden bg-white shadow-md p-4">
            <ul className="block  " >

<div className="mb-2"><Link
                 to=""
                 activeClass="active"
              //    to="features"
                 spy={true}
                 smooth={true}
                 offset={-150}
                 duration={500}
                 className="hover:text-blue-600 cursor-pointer"
                 onClick={scrollToTop}
               >
               Accueil
  </Link></div>    

<div className="mb-2"><Link
                 to="features"
                 activeClass="active"
              //    to="features"
                 spy={true}
                 smooth={true}
                 offset={-150}
                 duration={500}
                 className="hover:text-blue-600 cursor-pointer"
               >
               Fonctionalités
  </Link></div>
     
  
  {/* <li><a href="#features" className="hover:text-blue-600">Fonctionalités</a></li> */}

  <div className="mb-2"><Link
                 to="testimonials"
                 activeClass="active"
                //  to="features"
                 spy={true}
                 smooth={true}
                 offset={-150}
                 duration={500}
                 className="hover:text-blue-600 cursor-pointer"
               >
              Temoignages
               </Link></div>

               <div className="mb-2"><Link
                 to="contact"
                 activeClass="active"
                //  to="features"
                 spy={true}
                 smooth={true}
                 offset={-150}
                 duration={500}
                 className="hover:text-blue-600 cursor-pointer"
               >
              Contact
               </Link></div>
     
  {/* <li><a href="#testimonials" className="hover:text-blue-600">Témoignages</a></li> */}
  {/* <li><a href="#pricing" className="hover:text-blue-600">Tarifs</a></li> */}
  {/* <li><a href="#contact" className="hover:text-blue-600">Contact</a></li> */}
  <div><Link
                 to=""
                 activeClass="active"
                
                 spy={true}
                 smooth={true}
                 offset={-150}
                 duration={500}
                 className="hover:text-blue-600 cursor-pointer"
               >
           <button className="bg-blue-600 text-white rounded-[5px] p-3 hove4:bg-gray-300 hover:text-blue-600">Connexion</button> 
               </Link></div>
</ul>
          </nav>
        )}
</div>
            </header>
      
            {/* Hero Section */}
            <section className="hero  text-white py-48  relative "  data-aos="fade-up">
            <div className=" bg-[url('src/component/images/baniere3.png')] bg-contain bg-cover h-full py-48 absolute z-0 inset-0"></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="container mx-auto text-center relative z-10">
                <h1 className="text-6xl font-bold mb-4 " >UN CLIC, UN PAYEMENT</h1>
                <p className=" mb-14 text-2xl">La solution de paiement transparentes, sécurisées et efficaces adaptées à vos besoins. <br /> Rejoignez les milliers de personnes qui nous font confiance pour le traitement de leurs paiements.</p>
                <a href="#get-started" className="bg-blue-600 text-blue py-3 px-6 rounded-[5px] font-bold hover:bg-gray-200 hover:text-blue-600 ">
                Creer votre compte
                </a>
              </div>
              
            </section>
      
            {/* Features Section */}
            <section id="features" className="py-20 justify-center " data-aos="fade-right">
              <div className="container mx-auto text-center ">
                <h2 className="text-3xl font-bold mb-8 ">Pourquoi izitrade ?</h2>
                <div className="flex flex-wrap justify-center">

                  <div className="w-full sm:w-1/2 md:w-1/3 p-4 justify-center" data-aos="fade-left">
                    <div className="bg-white rounded shadow-lg ">

                    <div className="bg-[#022231] p-4 rounded-t-[12px] text-white ">
                    
                        <div><FaUserCog size={50} color="orange" className="mb-6"/></div>
                        <div><h3 className="text-xl font-bold mb-4 ">Traitement rapide</h3></div>
                    
                    </div>
                    
                      <p className="p-4">Bénéficiez d’un traitement des paiements ultra-rapide avec un délai minimal.</p>
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2 md:w-1/3 p-4" >
                    <div className="bg-white rounded shadow-lg ">

                      <div className="bg-[#022231] p-4 rounded-t-[12px] text-white justify-center items-center">
                        <div className=" mb-6"><GrShieldSecurity size={50} /></div>
                        <h3 className="text-xl font-bold mb-4 "> Transactions sécurisées</h3>
                      </div>

                      <p className="p-4">Nos mesures de sécurité avancées garantissent que vos transactions sont toujours protégées.</p>
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2 md:w-1/3 p-4 justify-center items-center" >
                    <div className="bg-white rounded shadow-lg  ">

                        <div className="bg-[#022231] p-4 rounded-t-[12px] text-white items-center  ">
                            
                            <div className="mb-6 "><AiOutlineSolution size={50} color="orange" /></div>
                            <h3 className="text-xl font-bold mb-4 ">Solutions personnalisables</h3>

                        </div>
                      
                        <p className="p-4">Tailor our payment solutions to fit the specific needs of your business.</p>
                    </div>
                  </div>

                </div>
              </div>
            </section>
      
            {/* Testimonials Section */}
            <section id="testimonials" className="bg-gray-200 py-20" data-aos="fade-down">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Clients satisfaits</h2>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                    <div className="bg-white rounded shadow-lg p-6">
                      <p>"Izitrade a complètement transformé ma façon de vendre."</p>
                      <h4 className="text-lg font-bold mt-4">- Alex, Commerçant Professionnel</h4>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                    <div className="bg-white rounded shadow-lg p-6">
                      <p>"L'interface est si simple à utiliser, même pour les débutants."</p>
                      <h4 className="text-lg font-bold mt-4">- Sarah, Commerçant Debutante</h4>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                    <div className="bg-white rounded shadow-lg p-6">
                      <p>"L'interface est si simple à utiliser, même pour les débutants."</p>
                      <h4 className="text-lg font-bold mt-4">- Sarah, Commerçant Debutante</h4>
                    </div>
                  </div>

                </div>
              </div>
            </section>




            <section id="testimonials" className="bg-blue-200 py-20 relative" data-aos="fade-left">
            <div className=" bg-[url('src/component/images/baniere2.png')] bg-contain bg-cover h-full py-48 absolute z-0 inset-0"></div>
            <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="container mx-auto text-center  relative z-10">
                <div className=""><h2 className="text-6xl font-bold mb-8 text-white">Prêt à commencer ?</h2></div>
                <div className="flex flex-wrap justify-center">
                  {/* <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                    <div className="bg-white rounded shadow-lg p-6">
                      <p>"Izitrade a complètement transformé ma façon de vendre."</p>
                      <h4 className="text-lg font-bold mt-4">- Alex, Commerçant Professionnel</h4>
                    </div>
                  </div> */}
                  <div className="w-full sm:w-1/2 md:w-1/3 text-white ">
                    <div className=" ">
                      <p className="mb-8 text-2xl">Rejoignez le nombre croissant d'entreprises qui nous font confiance pour leurs solutions de paiement. Commencez dès aujourd'hui !</p>
                      <button ><a href="#get-started" className="bg-blue-600 text-blue py-3 px-6 rounded-[5px] font-bold hover:bg-gray-200 hover:text-blue-600">
                Nous contacter
                </a></button>
                    </div>
                  </div>
                  {/* <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                    <div className="bg-white rounded shadow-lg p-6">
                      <p>"L'interface est si simple à utiliser, même pour les débutants."</p>
                      <h4 className="text-lg font-bold mt-4">- Sarah, Commerçant Debutante</h4>
                    </div>
                  </div> */}

                </div>
              </div>
            </section>



            


      
            {/* Footer */}
            <footer id="contact" className="bg-[#022231] text-white py-5 text-[13px]">
              <div className="container mx-auto text-center">
              
                <p>&copy; 2024 Izitrade, un produit NTOPROG. Tous droits réservés. </p>
                <div className="">
                  <a href="#" className="mx-2 hover:underline">Privacy Policy</a>
                  <a href="#" className="mx-2 hover:underline">Terms of Service</a>
                  <a href="#" className="mx-2 hover:underline">Contact Us</a>
                </div>
              </div>
            </footer>
          </div>
          <IzitradePay/>
          <BaniereCookies/>
        </>
    )
}