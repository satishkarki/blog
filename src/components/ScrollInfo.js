
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "../style/HomeIntro.css"

function ScrollInfo() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["...Motivated &", "...Caffienated"], 
      startDelay: 3000,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
      smartBackspace:true,
      showCursor:false,
      loop: false
      
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="Tag-line">
      <h1>Hi there! I am...</h1>
      {/* Element to display typing strings */}
      <span  className="typed-word" ref={el}></span>
    </div>
  );
}
export default ScrollInfo;
