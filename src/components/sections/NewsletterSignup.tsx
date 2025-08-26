import { FormEvent, useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.includes("@")) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="bg-yellow-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-800 mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-6">
          Stay up to date with our events, artist calls, and regenerative art news!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-medium"
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-yellow-700 font-medium">
            Thanks for subscribing!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 font-medium">
            Please enter a valid email.
          </p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
