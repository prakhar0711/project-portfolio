import contact from "./contact.jpg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0s7aihr", "template_cbvo94d", form.current, {
        publicKey: "hlgLkanXTSw7DV88X",
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="w-full py-12 md:py-24 flex flex-wrap justify-center items-center">
      <div className="container px-4 flex flex-col gap-16 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col gap-16 md:w-1/2">
          <header className="text-center">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tight">Connect With Me</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Fill out the form below to get in touch with me.
              </p>
            </div>
          </header>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-1">
                    <input
                      id="name"
                      type="text"
                      name="user_name"
                      placeholder="Name"
                      required
                      className="input input-ghost w-full max-w-xs"
                    />
                  </div>
                  <div className="grid gap-1">
                    <input
                      type="email"
                      name="user_email"
                      id="email"
                      placeholder="Email"
                      required
                      className="input input-ghost w-full max-w-xs"
                    />
                  </div>
                </div>
                <div className="grid gap-1">
                  <textarea
                    className="min-h-[10rem] resize-none textarea textarea-primary textarea-ghost"
                    id="message"
                    placeholder="Your message"
                    required
                    name="message"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <button type="submit" value="Send" className="btn btn-primary">
                  Submit
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
        <div className="md:w-1/2">
          <img
            src={contact}
            alt="Contact"
            className="w-full h-auto rounded-badge"
          />
        </div>
      </div>
    </section>
  );
}
