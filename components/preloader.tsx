"use client"

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="mb-8 flex justify-center text-6xl animate-spin">🔨</div>
        <h1 className="text-white text-3xl font-bold">Getting It Done...</h1>
        <div className="mt-8 w-64 h-1 rounded-full overflow-hidden" style={{ backgroundColor: "#2d3642" }}>
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
