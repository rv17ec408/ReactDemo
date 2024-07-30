import React from "react";

export const UseEffectMistakes = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1); //this won't re-render when count changes. so use callback whenver accessing prevState value
    // setCount((count) => count + 1);
  }
  useEffect(() => {
    const interval = setInterval(increment, 1000);
    return {
      function() {
        clearInterval(interval);
      },
    };
  }, []);

  return <div> {count}</div>;
};
