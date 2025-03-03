import { useState, useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = { timeZone: "Asia/Manila", hour12: true };
  const formattedTime = time.toLocaleTimeString("en-US", options);
  const formattedDate = time.toLocaleDateString("en-US", { 
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const dayOfWeek = time.toLocaleDateString("en-US", { weekday: "long", timeZone: "Asia/Manila" });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-pink-500">
      <h2 className="text-lg font-light mb-2">{dayOfWeek}</h2>
      <p className="text-7xl font-bold neon-glow">{formattedTime}</p>
      <p className="text-md mt-2">{formattedDate}</p>

      <style jsx>{`
        .neon-glow {
          text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
        }
      `}</style>
    </div>
  );
};

export default LiveClock;