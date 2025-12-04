"use client"

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="mb-6 sm:mb-8 flex justify-center animate-spin">
          <img
            src="/images/salinas.jpg"
            alt="SALINAS Logo"
            className="w-16 sm:w-24 h-16 sm:h-24 object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-2xl sm:text-3xl font-bold">Getting It Done...</h1>
        <div className="mt-6 sm:mt-8 w-48 sm:w-64 h-1 rounded-full overflow-hidden mx-auto" style={{ backgroundColor: "#2d3642" }}>
          <div
            className="h-full rounded-full animate-pulse"
            style={{
              backgroundColor: "#e8e8e8",
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
