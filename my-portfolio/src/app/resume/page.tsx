export default function ResumePage() {
    return (
      <section className="min-h-screen bg-[#0f172a] text-white px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
            My Resume
          </h1>
          <p className="text-gray-400 mb-6">
            Here’s a quick look at my experience and skills. You can view it below or download it.
          </p>
  
          {/* Viewable Embed */}
          <div className="aspect-w-8 aspect-h-11 mb-6">
            <iframe
              src="/Sharma_Sudipti.pdf"
              title="Manu Sharma Resume"
              className="w-full h-[80vh] rounded-lg border border-gray-600 shadow-lg"
            />
          </div>
  
          {/* Download Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-4 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-500 transition"
          >
            Download Resume
          </a>
        </div>
      </section>
    )
  }
  