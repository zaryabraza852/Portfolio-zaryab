import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: "service_8612sdt",
  templateId: "template_aazj8yb",
  accessToken: "mTtiddn7ETETSHI2d",
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />
        <div className="flex gap-4 items-center mb-4">
          <FaEnvelope className="text-white" size={20} />
          <a href={`mailto:${config.html.email}`} className="text-white">{config.html.email}</a>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <FaPhone className="text-white" size={20} />
          <a href="tel:+923037688500" className="text-white">+923037688500</a>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } = config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[input]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <div className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1 relative">
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="h-[80%]"
        >
          <EarthCanvas />
        </motion.div>

        {/* Social Media Icons and Copyright Section */}
        <div className="absolute bottom-0 w-full py-4 mt-8">
          <div className="container mx-auto flex flex-col items-center gap-4 text-white">
            <h2 className="text-xl font-semibold mb-4">Connect with me:</h2>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/zaryab-raza-681554151/"
                className="hover:text-gray-300 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={40} style={{ color: "#0077B5" }} />
              </a>
              <a
                href="https://wa.me/+923037688500"
                className="hover:text-gray-300 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={40} style={{ color: "#25D366" }} />
              </a>
              <a
                href={`mailto:${config.html.email}`}
                className="hover:text-gray-300 transition duration-300"
              >
                <FaEnvelope size={40} style={{ color: "#3b60c4" }} />
              </a>
              <a
                href="https://github.com/zaryabraza852"
                className="hover:text-gray-300 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={40} style={{ color: "#47bafa" }} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
