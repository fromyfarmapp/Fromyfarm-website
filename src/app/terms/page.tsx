"use client";

export default function TermsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-semibold mb-6">Terms of Use & Privacy Policy</h1>
      <iframe
        src="/terms.pdf"
        className="w-full max-w-4xl h-[80vh] border border-gray-300 rounded-lg shadow-md"
        title="Terms of Use and Privacy Policy"
      ></iframe>
    </div>
  )
}
