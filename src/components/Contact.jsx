import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import { MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";




const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset(); // Clear the form after submission
  };

  return (
    <section  id="contact" className="contact-container">
      <div className="contact-details">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-info"> <span><MdLocationPin/></span>
           Byron Bay, Australia </p>
        <p className="contact-info"><span1><IoIosMail /></span1>
Email: liamcode</p>
        <p className="contact-info"><span2><FaPhoneAlt /></span2>
Phone: ......</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-title">Enquiry form</h2>
        <p className="form-des">Jot your details below and i will get back to you with a bespoke plan.
        </p>
        
        <input
          type="text" id="name"
          {...register("fullName", { required: "Full name is required" })}
          placeholder="Enter your full name.."
          className="form-input"
        />
        {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}

        <input
          type="tel" id="phone"
          {...register("phone", {
            required: "Phone Number is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Phone number must be numeric",
            },
          })}
          placeholder="Phone Number.."
          className="form-input"
        />
        {errors.phone && <p className="error-message">{errors.phone.message}</p>}

        <input
          type="email" id="email"
          {...register("email", {
            required: "Email Address is required",
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address",
            },
          })}
          placeholder="Email Address.."
          className="form-input"
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}

        <textarea id="details"
          {...register("message", { required: "Message cannot be empty" })}
          placeholder="Please enter your project details.."
          className="form-textarea"
        />
        {errors.message && <p className="error-message">{errors.message.message}</p>}

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
