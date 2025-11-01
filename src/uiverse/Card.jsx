import React from 'react';

const Card = () => {
  return (
    <div className="weather-widget group relative max-w-sm w-full mx-auto bg-gradient-to-br from-gray-900 via-teal-950 to-black rounded-2xl p-6 shadow-xl shadow-teal-600/40 border border-teal-800/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-teal-600/60 hover:scale-105">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full blur-md transition-all duration-500 group-hover:scale-150" style={{left: '15%', top: '20%'}} />
        <div className="absolute w-4 h-4 bg-teal-300 rounded-full blur-lg transition-all duration-500 group-hover:scale-125" style={{right: '25%', bottom: '15%'}} />
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full blur transition-all duration-500 group-hover:scale-175" style={{left: '40%', top: '10%'}} />
      </div>
      <div className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-500 group-hover:border-teal-500/40">
        <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent transition-all duration-500 group-hover:w-full" />
      </div>
      <div className="text-center mb-4 relative z-10">
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 transition-all duration-500 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
          New York
        </p>
        <p className="text-sm text-gray-400">October 24, 2024</p>
      </div>
      <div className="flex items-center justify-between mb-6 relative z-10">
        <svg className="w-16 h-16 text-yellow-400 transition-all duration-500 group-hover:text-yellow-500 group-hover:scale-110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx={32} cy={32} r={10} fill="currentColor" className="drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] transition-all duration-500 group-hover:r-11" />
          <g className="transition-transform duration-500 group-hover:opacity-0">
            <line x1={32} y1={16} x2={32} y2={8} stroke="currentColor" strokeWidth={2} />
            <line x1={32} y1={56} x2={32} y2={48} stroke="currentColor" strokeWidth={2} />
            <line x1={16} y1={32} x2={8} y2={32} stroke="currentColor" strokeWidth={2} />
            <line x1={56} y1={32} x2={48} y2={32} stroke="currentColor" strokeWidth={2} />
            <line x1="20.93" y1="20.93" x2="15.51" y2="15.51" stroke="currentColor" strokeWidth={2} />
            <line x1="48.49" y1="48.49" x2="43.07" y2="43.07" stroke="currentColor" strokeWidth={2} />
            <line x1="20.93" y1="43.07" x2="15.51" y2="48.49" stroke="currentColor" strokeWidth={2} />
            <line x1="48.49" y1="15.51" x2="43.07" y2="20.93" stroke="currentColor" strokeWidth={2} />
          </g>
          <path d="M20 40a8 8 0 0 1 8-8h8a10 10 0 0 1 0 20H28a8 8 0 0 1-8-8z" fill="rgba(255,255,255,0.2)" className="transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-60" />
        </svg>
        <div className="text-right">
          <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-600 group-hover:text-5xl group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]">
            27°C
          </p>
          <p className="text-sm text-gray-300">Partly Sunny</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 bg-teal-900/20 rounded-lg p-4 backdrop-blur-sm border border-teal-700/40 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-0 transition-all duration-500 group-hover:opacity-50 rounded-lg" />
        <div className="flex flex-col items-start relative z-10">
          <p className="text-sm text-white">
            <span className="font-bold">High:</span>
            <span className="text-gray-300 transition-all duration-500 group-hover:text-teal-300">36°C</span>
          </p>
          <p className="text-sm text-white">
            <span className="font-bold">Low:</span>
            <span className="text-gray-300 transition-all duration-500 group-hover:text-teal-300">21°C</span>
          </p>
        </div>
        <div className="flex flex-col items-start relative z-10">
          <p className="text-sm text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-300 transition-all duration-500 group-hover:text-teal-400 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 0 1 1.789 2.894l-3.5 7A2 2 0 0 1 15.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 0 0-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 0 1-.608 2.006L7 10m7-7V3m-7 7h10" />
            </svg>
            <span className="font-bold">Wind:</span>
            <span className="text-gray-300 transition-all duration-500 group-hover:text-teal-300">3 km/h</span>
          </p>
          <p className="text-sm text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-300 transition-all duration-500 group-hover:text-teal-400 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v10m-4-4h8" />
            </svg>
            <span className="font-bold">Humidity:</span>
            <span className="text-gray-300 transition-all duration-500 group-hover:text-teal-300">52%</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
