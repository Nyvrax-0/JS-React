function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Tailwind работает!
        </h1>
        <p 
          className="bg-[rgba(0, 0, 0, 1)] text-white">
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
          Кайф!
        </button>
      </div>
    </div>
  )
}

export default App