export default function LegalPage({
  title,
  lastUpdated,
  children,
}) {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-5">
      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">

          <div className="bg-blue-900 text-white p-8">
            <h1 className="text-4xl font-bold">
              {title}
            </h1>

            <p className="mt-3 text-blue-100">
              Yatra24-7
            </p>

            <p className="text-sm text-blue-200 mt-1">
              Last Updated: {lastUpdated}
            </p>
          </div>

          <div className="p-8 prose prose-gray max-w-none">
            {children}
          </div>

        </div>

        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} Yatra24-7. All Rights Reserved.
        </div>

      </div>
    </main>
  );
}
