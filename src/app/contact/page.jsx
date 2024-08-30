// "use client";
// import { motion } from "framer-motion";
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const ContactPage = () => {
//   const [message, setMessage] = useState("");
  
//   const text = "Let's Connect";
//   const form = useRef();
// const nameref = useRef(null);
  

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         process.env.NEXT_PUBLIC_SERVICE_ID,
//         process.env.NEXT_PUBLIC_TEMPLATE_ID,
//         form.current,
//         process.env.NEXT_PUBLIC_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           toast.success("Your message has been sent successfully!");
//           setMessage("");
//           form.current.reset();
//         },
//         () => {
//           toast.error("Something went wrong. Please try again.");
//         }
//       );
//   };

//   const containerVariants = {
//     hidden: { opacity: 1 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const childVariants = {
//     hidden: { y: "100%", opacity: 0 },
//     visible: { y: "0%", opacity: 1, transition: { duration: 0.5 } },
//   };

//   const slideFromLeft = {
//     hidden: { x: "-100%", opacity: 0 },
//     visible: { x: "0%", opacity: 1, transition: { duration: 0.8 } },
//   };

//   const slideFromRight = {
//     hidden: { x: "100%", opacity: 0 },
//     visible: { x: "0%", opacity: 1, transition: { duration: 0.8 } },
//   };

//   return (
//     <motion.div
//       className="h-full"
//       initial={{ y: "-200vh" }}
//       animate={{ y: "0%" }}
//       transition={{ duration: 1 }}
//     >
//       <div className="h-full overflow-scroll flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
//         <div className="h-1/3 lg:h-full lg:w-1/2 flex justify-center items-center text-6xl ">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {text.split("").map((letter, index) => (
//               <motion.span key={index} variants={childVariants}>
//                 {letter}
//               </motion.span>
//             ))}
//           </motion.div>
//         </div>

//         <div
//           className="h-2/3 lg:h-full p-2 drop-shadow-lg rounded-md rounded-t-3xl lg:w-1/2 md:bg-transparent max-sm:bg-gradient-to-r lg:bg-gradient-to-r from-gray-300  to-red-50"
//         >
//           <form
//             onSubmit={sendEmail}
//             ref={form}
//             className="w-full rounded-xl text-xl flex flex-col gap-8 h-fit justify-center p-8 z-30"
//           >
//                         <motion.label
//               className="font-semibold text-gray-800"
//               variants={slideFromRight}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               Email Address:
//             </motion.label>
//             <motion.input
//               name="user_email"
//               type="email"
              
//               className="bg-transparent border-b-2 border-b-black outline-none cursor-text w-full"
//               placeholder="yourname@example.com"
              
//               variants={slideFromLeft}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             />
//             <motion.label
//               className="font-semibold text-gray-800"
//               variants={slideFromLeft}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               Your Message:
//             </motion.label>
//             <motion.input
//               className="bg-transparent border-b-2 border-b-black outline-none cursor-text w-full overflow-hidden text-ellipsis" 
//               name="user_message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               ref={nameref}
//               placeholder="Type your message here"
//               variants={slideFromRight}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             />

//             {/* <motion.label
//               className="font-semibold text-gray-800"
//               variants={slideFromRight}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               Email Address:
//             </motion.label>
//             <motion.input
//               name="user_email"
//               type="email"
              
//               className="bg-transparent border-b-2 border-b-black outline-none cursor-text w-full"
//               placeholder="yourname@example.com"
//               variants={slideFromLeft}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             /> */}

//             <motion.label
//               className="font-semibold text-gray-800"
//               variants={slideFromLeft}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               Best Regards,
//             </motion.label>
//             <motion.input
//               name="user_name"
//               type="text"
//               className="bg-transparent border-b-2 border-b-black outline-none  cursor-text w-full"
//               placeholder="Your Name"
//               variants={slideFromRight}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             />

//             <motion.button
//               className="rounded-lg font-semibold text-white p-4"
//               variants={slideFromRight}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               style={{ background: "#333333" }}
//             >
//               Send
//             </motion.button>
//           </form>
//         </div>
//       </div>
//       <ToastContainer />
//     </motion.div>
//   );
// };

// export default ContactPage;


"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [message, setMessage] = useState("");
  const [email,setEmail] =useState("")
  
  const text = "Let's Connect";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Your message has been sent successfully!");
          setMessage("");
          setEmail("")
          form.current.reset();
        },
        () => {
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { duration: 0.5 } },
  };

  const slideFromLeft = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 0.8 } },
  };

  const slideFromRight = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="h-full overflow-y-auto"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {text.split("").map((letter, index) => (
              <motion.span key={index} variants={childVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div
          className="h-2/3 lg:h-full p-2 drop-shadow-lg rounded-md rounded-t-3xl lg:w-1/2 bg-gradient-to-r from-gray-300  to-red-50"
        >
          <form
            onSubmit={sendEmail}
            ref={form}
            className="w-full h-full py-24 px-4 overflow-y-scroll rounded-xl text-xl flex flex-col gap-8 justify-center  z-30"
          >
            <motion.label
              className="font-semibold text-gray-800"
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Email Address:
            </motion.label>
            <input
              name="user_email"
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="bg-transparent border-b-2 border-b-black outline-none cursor-text w-full"
              placeholder="yourname@example.com"
            />

            <motion.label
              className="font-semibold text-gray-800"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Your Message:
            </motion.label>
            <input
              className="bg-transparent border-b-2 border-b-black outline-none cursor-text w-full overflow-hidden text-ellipsis"
              name="user_message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here"
            />

            <motion.label
              className="font-semibold text-gray-800"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Best Regards,
            </motion.label>
            <input
              name="user_name"
              type="text"
              className="bg-transparent border-b-2 border-b-black outline-none cursor-text w-full"
              placeholder="Your Name"
            />

            <motion.button
              className="rounded-lg font-semibold text-white p-4 "
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ background: "#333333" }}
              disabled={!email || !message}
            >
              Send
            </motion.button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default ContactPage;
