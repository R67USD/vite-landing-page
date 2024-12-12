import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  // Define Yup validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone Number is required"),
    message: Yup.string().required("Message is required"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://vite-landing-page-server.vercel.app/api/email",
          {
            body: JSON.stringify(values),
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => res.json());
        setLoading(false);

        if (response?.data?.mailId) {
          toast.success("Email sent successfully");
          resetForm();
        } else {
          console.log(response, "response");
          toast.error(
            response?.data?.error?.response || "Something went wrong!"
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section id={"contact"} className="relative bg-maroon-darker">
      <div className="container pt-[140px] pb-[80px] mx-auto px-4">
        <div className="max-w-[1219px] mx-auto rounded-tl-[34px] relative p-[1px] ">
          <div className="bg-maroon-dark backdrop-blur-sm rounded-3xl max-sm:p-8 p-12">
            <div className="flex flex-col md:grid md:grid-cols-2 max-sm:gap-4 gap-8">
              {/* Left Form Section - Second on mobile */}
              <div className="space-y-6 order-2 md:order-1">
                <div className="flex flex-col gap-y-4">
                  <h2 className=" text-[33.24px] font-semibold leading-[40.23px] tracking-[-0.02em] text-left text-white">
                    Let's connect
                  </h2>
                  <p className="text-sm sm:text-[17.73px] font-normal leading-[21.46px] tracking-[-0.01em] text-left text-gray-300">
                    Ready to elevate your brand? Contact us today to
                    <br className="max-sm:hidden" />
                    discuss how we can help you achieve your goals
                    <br className="max-sm:hidden" />
                    through innovative strategies and creative solutions.
                  </p>
                </div>

                <form onSubmit={formik.handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full bg-maroon-dark border border-slate-100/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                      />
                      {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="text-red-500 text-sm">
                          {formik.errors.lastName}
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full bg-maroon-dark border border-slate-100/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                      />
                      {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="text-red-500 text-sm">
                          {formik.errors.firstName}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-maroon-dark border border-slate-100/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-maroon-dark border border-slate-100/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={4}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-maroon-dark border border-slate-100/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 resize-none"
                    ></textarea>
                    {formik.touched.message && formik.errors.message ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.message}
                      </div>
                    ) : null}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Right Display Section - First on mobile */}
              <div className="flex flex-col gap-y-3 bg-yellow-gradient from-yellow-start to-yellow-end md:rounded-xl rounded-2xl max-sm:p-6 p-12 justify-center order-1 md:order-2">
                <h2 className="text-left font-bold text-[134.6px] max-sm:text-[52.6px] leading-[111.34px] max-sm:leading-[48.6px] text-purple-primary">
                  Get in
                  <br />
                  touch
                </h2>
                <p className=" text-[17.73px] font-normal leading-[21.46px] tracking-[-0.01em] text-left">
                  Ready to elevate your brand? Contact us today to
                  <br />
                  discuss how we can help you achieve your goals
                  <br />
                  through innovative strategies and creative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
