import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

const FormatTime = ({time}) => {
  const minutes = Math.floor(time / 60);
  const secondsLeft = time % 60;
  
  return <div className="flex flex-col items-center text-sm p-10">
    <span>
      SIGUIENTE PALABRA
    </span>
    <span className="font-bold">
      {
        `${minutes < 10 ? '0' : ''}${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`
      }
    </span>
  </div>
}

export default function Timer ({date}) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const now = new Date();
    const diff = date - now;
    const seconds = Math.floor(diff / 1000);
    setSeconds(seconds);
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <div >
      <FormatTime time={seconds}/>
    </div>
  )
}

Timer.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

FormatTime.propTypes = {
  time: PropTypes.number.isRequired,
};

