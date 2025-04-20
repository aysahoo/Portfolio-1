import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const now = new Date();

    const formattedDate = now.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    setDate(formattedDate);

    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata',
    };
    const formattedTime = now.toLocaleTimeString('en-IN', options);
    setTime(formattedTime);
  }, []);

  return (
    <footer className="mt-10 text-[8px] flex justify-start text-black/30">
      <p>Bhubaneswar, {time}</p>
    </footer>
  );
};

export default Footer;
