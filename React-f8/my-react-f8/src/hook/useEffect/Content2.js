//ví dụ đếm ngược số

import { useState, useEffect } from "react";

const Content2 = () => {
  const [coutdown, setCountdown] = useState(10);

  useEffect(() => {
    let timeId = setTimeout(() => {
      if (coutdown > 0) {
        setCountdown((count) => count - 1);
        console.log('countdown...');
      }
    }, 1000);

    return () => clearTimeout(timeId);
  });

  return (
    <div>
      <h1>{coutdown}</h1>
    </div>
  );
};

export default Content2;
