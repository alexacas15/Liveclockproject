import { useState, useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(false);
  const [is24HourFormat, setIs24HourFormat] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startClock = () => setIsRunning(true);
  const stopClock = () => setIsRunning(false);
  const toggleFormat = () => setIs24HourFormat((prev) => !prev);

  const options = { hour12: !is24HourFormat, timeZone: "Asia/Manila" };
  const formattedTime = time.toLocaleTimeString("en-US", options);
  const dayOfWeek = time.toLocaleDateString("en-US", { weekday: "long", timeZone: "Asia/Manila" });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-pink-500">
      <h2 className="text-lg font-light mb-2">{dayOfWeek}</h2>
      <p className="text-7xl font-bold neon-glow">{formattedTime}</p>
      <div className="mt-4 space-x-4">
        <button 
          className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50" 
          onClick={startClock} 
          disabled={isRunning}
        >
          Start
        </button>
        <button 
          className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:opacity-50" 
          onClick={stopClock} 
          disabled={!isRunning}
        >
          Stop
        </button>
        <button 
          className="px-4 py-2 bg-gray-600 text-white rounded-lg" 
          onClick={toggleFormat}
        >
          {is24HourFormat ? "12-hour" : "24-hour"}
        </button>
      </div>

      <style jsx>{`
        .neon-glow {
          text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
        }
      `}</style>
    </div>
  );
};

export default LiveClock;
