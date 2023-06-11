import { useState, useRef, useEffect } from "react"
import momentorLogo from "../public/momentor-logo.webp"
import mobile from "../public/mobile.webp"
import Image from "next/image"
import Svg1 from "../public/svgexport-2.svg"
import Svg2 from "../public/svgexport-3.svg"
import Svg3 from "../public/svgexport-4.svg"
import Svg4 from "../public/svgexport-5.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head"
import { useRouter } from 'next/router'

export default function Home() {
  const {asPath} = useRouter()
  const isBrowser = () => typeof window !== 'undefined';
  const formRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(null)
  const [index, setIndex] = useState(0)
  const executeScroll = () => formRef.current.scrollIntoView() 
  const delay = 5000;
  const timeoutRef = useRef(null);

  const testimonials = [
    {
      image: "https://static.wixstatic.com/media/11062b_cbc9128d84c942c78aa4eecc3f810e97~mv2.jpg/v1/fill/w_632,h_976,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_cbc9128d84c942c78aa4eecc3f810e97~mv2.jpg",
      thought: "I see such value in a service like Momentor because it creates enough of an incentive to actually get a response. I’ve tried and gave up finding a mentor in the past because people just never answer me.",
      name: "Joan Marks"
    },
    {
      image: "https://static.wixstatic.com/media/b3d7c6d8a94944adbef7604c00d0976a.jpg/v1/fill/w_614,h_976,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b3d7c6d8a94944adbef7604c00d0976a.jpg",
      thought: "I’ve spent hours and hours watching video after video of courses but I never feel like I can apply them in the real world. By speaking to a real expert who’s executed the same kind of tasks to what I’m working on unlocks a workflow I’ve been searching for so long. Can’t believe it only takes a quick conversation.",
      name: "Raymond Souza"
    },
    {
      image: "https://static.wixstatic.com/media/11062b_0e7efbe793c741cc9743119f3d2ff624~mv2.jpeg/v1/fill/w_614,h_976,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_0e7efbe793c741cc9743119f3d2ff624~mv2.jpeg",
      thought: "I've been so frustrated using mentor programmes in the past because I found it hard to verify their exact experience with their profile. Using Momentor's LinkedIn plugin, I will be able to search directly for the experience I need, auto-message them and have a response in no time! Really awesome guys!.",
      name: "Maggie Stalk"
    }
  ]

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
        setIndex((prevIndex) =>
          prevIndex === testimonials?.length-1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  if (isBrowser()) {
    AOS.init();
  }

  const submitForm = (e) => {
    e.preventDefault();
    setFormSubmitted(true)
  }

  const HomeSection = () => (
    <section className="relative w-full snap-start h-screen">
      <Image src={momentorLogo} alt="Momentor Logo" className="absolute mt-4" width={200} height={100} />
      <video className="w-full h-screen object-cover" autoPlay muted playsInline>
        <source src="/main-video.mp4" type="video/mp4">
        </source>
      </video>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col">
        <p className="leading-normal text-white text-center font-mono text-3xl lg:text-4xl">Software That Connects You To The Right <span className="text-theme">Mentors</span> At The Right <span className="text-theme">Moment</span> </p>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-6 border border-gray-400 rounded shadow mt-4 text-lg" onClick={executeScroll}>
          Learn More
        </button>
      </div>
    </section>
  )

  const FunctionsSection = () => (
    <section className="bg-dark w-10/12 snap-start h-screen	">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full mt-12 lg:mt-0">
        <div className="w-full lg:w-3/12 flex items-center justify-center flex items-center justify-center flex-col mb-12 lg:mb-0" data-aos="fade-in" data-aos-delay="500" data-aos-duration="1000" >
          <Image src={Svg1} alt="Active Users" className="mt-4 mb-4 w-16 lg:w-24" width={100} height={200} />
          <p className="text-white text-xl lg:text-2xl text-center">1 Billion Active User Market</p>
        </div>
        <div className="w-full lg:w-6/12 flex items-center justify-center pt-0 hidden lg:flex">
          <Image src={mobile} alt="App Demo" className="mt-4" width={250} height={300} />
        </div>
        <div className="w-full lg:w-3/12 flex items-center justify-center flex items-center justify-center flex-col mb-12 lg:mb-0" data-aos="fade-in" data-aos-delay="2300" data-aos-duration="1000" >
          <Image src={Svg4} alt="Passive Income" className="mt-4 mb-4 w-16 lg:w-24" width={100} height={200} />
          <p className="text-white text-xl lg:text-2xl text-center">Passive Income For Millions</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <div className="w-full lg:w-6/12 flex items-center justify-center flex items-center justify-center flex-col mb-12 lg:mb-0" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1000" >
          <Image src={Svg3} alt="Solving Problems" className="mb-4 mt-4 w-16 lg:w-24" width={100} height={400} />
          <p className="text-white text-xl lg:text-2xl text-center">Solving Real-world <br />Problems. Now</p>
        </div>
        <div className="w-full lg:w-6/12 flex items-center justify-center flex items-center justify-center flex-col mb-12 lg:mb-0" data-aos="fade-in" data-aos-delay="1500" data-aos-duration="1000" >
          <Image src={Svg2} alt="Seamless Process" className="mb-4 mt-4 w-16 lg:w-24" width={100} height={400} />
          <p className="text-white text-xl lg:text-2xl text-center">Seamless 3-step. <br />3 Click Process</p>
        </div>
      </div>
    </section>
  )

  const TestimonialsSection = () => (
    <section className="rounded-lg bg-dark p-24 text-white flex items-center justify-center flex-col hidden lg:flex snap-start h-screen">
      <h1 className="text-5xl font-semibold">What Other People Think About The Problem</h1>
      <div className="mx-auto overflow-hidden">
        <div
          className="transition ease duration-1000 flex flex-row"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {testimonials?.map(testimonial=> (
              <div key={testimonial?.name} className="min-w-full inline-block p-24">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center mt-14">
                  <img
                    alt="Man"
                    src={testimonial?.image}
                    className="aspect-square w-full rounded-lg object-cover"
                  />
                  <blockquote className="sm:col-span-2">
                    <p className="text-xl font-medium sm:text-2xl">
                    {testimonial?.thought}
                    </p>
                    <cite className="mt-8 inline-flex items-center not-italic">
                      <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                      <p className="text-sm uppercase text-gray-500 sm:ms-3">
                        <strong>{testimonial?.name}</strong>
                      </p>
                    </cite>
                  </blockquote>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  const FormSection = () => (
    <section ref={formRef} className="flex items-stretch text-white snap-start h-screen">
      <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{backgroundImage: "url(https://images.pexels.com/photos/4339867/pexels-photo-4339867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"}}>
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
              <h1 className="text-5xl font-bold text-left tracking-wide">Hear When We Are Launching</h1>
              <p className="text-2xl my-4">Join Us As We Make The Knowledge Transfer To The Next Generation Only 3 Clicks Away!</p>
          </div>
          <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
              <span>
                  <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </span>
              <span>
                  <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </span>
              <span>
                  <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </span>
          </div>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-dark">
          <div className="w-full py-6">
              <h1 className="text-3xl font-bold text-center tracking-wide lg:hidden px-4 mb-4">Hear When We Are Launching</h1>
              {formSubmitted ? <p className="text-xl text-theme">Thank you for your submission. We'll reach out to you with updates soon!</p> : 
              <form onSubmit={submitForm} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                  <div className="pb-2 pt-4">
                      <input className="block w-full p-4 text-lg rounded-sm bg-black" type="name" name="name" id="name" placeholder="First Name" required/>
                  </div>
                  <div className="pb-2 pt-4">
                      <input type="email" name="email" id="email" placeholder="Email" className="block w-full p-4 text-lg rounded-sm bg-black" required/>
                  </div>
                  <div className="px-4 pb-2 pt-4">
                      <button type="submit" className="uppercase block w-full p-4 text-lg rounded-full bg-theme hover:bg-indigo-600 focus:outline-none">Submit</button>
                  </div>
                  <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
                      <a href="#">
                          <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                      </a>
                      <a href="#">
                          <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                      </a>
                      <a href="#">
                          <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      </a>
                  </div>
              </form>}
          </div>
      </div>
  </section>
  )

  return (
    <>
      <Head>
        <title>Momentor - Find Your Mentor</title>
        <link rel="canonical" href={asPath} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={asPath} />
        <meta property="og:title" content="Momentor - Find Your Mentor" />
        <meta property="og:description" content="Software That Connects You To The Right Mentors At The Right Moment" />
        <meta property="og:image" content='/preview-image.png' />
        <meta name="description" content="Software That Connects You To The Right Mentors At The Right Moment" />
        <meta name="keywords" content="mentor,mentorship" />
      </Head>
      <div className="w-full bg-dark flex items-center justify-center flex-col">
        {HomeSection()}
        {FunctionsSection()}
        {TestimonialsSection()}
        {FormSection()}
      </div>
    </>
  )
}
