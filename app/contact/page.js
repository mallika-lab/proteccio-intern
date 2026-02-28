export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Contact Us
        </h1>

        <p className="text-gray-600 mb-8">
          Have questions or want to reach out? Fill the form below.
        </p>

        <form className="bg-white rounded-lg shadow p-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border p-3 rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}