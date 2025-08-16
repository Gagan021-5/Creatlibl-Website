import Footer from "./Footer";
import { useForm } from "react-hook-form";
import Animatescroll from "./Animatescroll";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const formurl = "https://formspree.io/f/meozdngw";

  const onSubmit = async (data) => {
    try {
      const response = await fetch(formurl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
      } else {
        console.error("Form submission error");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <>
      <Animatescroll
        id="Contact"
        className="min-h-screen w-full flex flex-col justify-center items-center p-6 text-white outline-none"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
        <p className="text-gray-400 mb-8 text-center max-w-xl">
          Got a question, project idea, or just want to say hello? Fill out the
          form below and I’ll get back to you soon.
        </p>

        {isSubmitSuccessful && (
          <p className="text-green-400 font-medium text-lg mb-4 animate-fadeIn">
            Thanks! Your message has been sent.
          </p>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full bg-gradient-to-tr from-sky-900 to-black/80 max-w-lg p-6 rounded-2xl shadow-lg space-y-4"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              {...register("name", { required: true })}
              className="w-full p-3 rounded-lg border border-white/50 focus:border-white/90 text-white outline-none"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">Name is required</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              {...register("email", { required: true })}
              className="w-full p-3 rounded-lg border border-white/50 focus:border-white/90 text-white outline-none"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">Email is required</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              rows="5"
              {...register("message", { required: true })}
              className="w-full p-3 rounded-lg border border-white/50 focus:border-white/90 text-white outline-none"
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">Message is required</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 cursor-pointer bg-white/5 backdrop-blur-lg border border-white/7 shadow-lg rounded-lg font-medium text-white hover:bg-white/20 transition-all duration-300"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mt-10 max-sm:mb-8  text-sm text-center">
          <p className="text-white font-semibold">Or reach out directly:</p>
          <p className="text-gray-300">Email: creatibl.solutions@gmail.com</p>
          <p className="text-gray-300">Phone: +91 7827847768</p>
        </div>
      </Animatescroll>
    </>
  );
};

export default Contact;
