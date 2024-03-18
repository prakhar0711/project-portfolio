export default function Contact() {
  return (
    <section className="w-full py-12 md:py-24 flex flex-wrap justify-center items-center">
      <div className="container px-4 flex flex-col gap-16 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col gap-16 md:w-1/2">
          <header className="text-center">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tight">Contact Me</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Fill out the form below to get in touch with me.
              </p>
            </div>
          </header>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    required
                    className="input input-ghost w-full max-w-xs"
                  />
                </div>
                <div className="grid gap-1">
                  <input
                    type="email"
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
                />
              </div>
            </div>
            <div className="grid gap-2">
              <button className="btn btn-primary">Submit</button>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                We&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="./contact.jpg"
            alt="Contact"
            className="w-full h-auto rounded-badge"
          />
        </div>
      </div>
    </section>
  );
}
