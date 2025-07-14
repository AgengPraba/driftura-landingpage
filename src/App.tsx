import CanvasWrapper from './components/CanvasWrapper'

export default function App() {
  return (
    <div className="relative w-full h-screen">
      {/* Hero text */}
      <div className="absolute z-10 top-10 left-10 text-neutral-content">
        <h1 className="text-4xl font-bold">🚀 3D Product Landing</h1>
        <p className="text-lg mt-2 max-w-sm">
          Powered by <span className="badge badge-primary">Three.js</span> and <span className="badge badge-secondary">React</span>
        </p>

        <button className="btn btn-primary mt-4">Get Started</button>
      </div>

      {/* 3D Scene */}
      <CanvasWrapper />
    </div>
  )
}
