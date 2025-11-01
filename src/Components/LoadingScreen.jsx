import { useEffect, useState } from 'react'
import Loader from '../uiverse/Loader'

const LoadingScreen = ({ onComplete }) => {

    const [text, setText] = useState("")
    const [fadeOut, setFadeOut] = useState(false)
    const fullText = "< Hello, It's Chinmay />";
    
    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            
            if (index > fullText.length) {
                clearInterval(interval)

                setTimeout(() => {
                    setFadeOut(true)
                    setTimeout(() => {
                        onComplete()
                    }, 400);
                }, 600);
            }
        }, 80);

        return () => clearInterval(interval)
    }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-gray-100 hardware-accelerated transition-opacity duration-400 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ willChange: fadeOut ? 'opacity' : 'auto' }}
    >
      <div className='w-full max-w-2xl mb-8 animate-fade-in'>
        <Loader />
      </div>
      
      <div className='mb-4 text-4xl font-mono font-bold hardware-accelerated'>
        {text} <span className='animate-blink ml-1'> | </span>
      </div>

      <div className='w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden hardware-accelerated'>
        <div className='w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar'></div>
      </div>
    </div>
  )
}

export default LoadingScreen
