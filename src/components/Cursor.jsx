import { useState, useEffect } from "react";

function Cursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if ("ontouchstart" in window) {
      setIsDesktop(false);
    }
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      let target = e.target;

      if (target.closest("a") || target.closest("button")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);
    window.addEventListener("mouseout", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mouseout", handleHover);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-yellow-400 rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate(${cursor.x}px, ${cursor.y}px)`
        }}
      />

      <div
        className={`fixed top-0 left-0 rounded-full border-2 border-yellow-400 pointer-events-none z-[9998]
        transition-all duration-300 ease-out ${
          hovering ? "w-16 h-16" : "w-8 h-8"
        }`}
        style={{
          transform: `translate(${cursor.x - 16}px, ${cursor.y - 16}px)`
        }}
      />
    </>
  );
}

export default Cursor;