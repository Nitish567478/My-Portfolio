import React, { useEffect, useRef, useState } from "react";

const interactiveSelector = [
  "a",
  "button",
  "[role='button']",
  "input",
  "textarea",
  "select",
  "summary",
  "label[for]"
].join(", ");

const AnimatedCursor = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const cursorRef = useRef(null);
  const outerRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updatePointerMode = () => {
      setIsPointerDevice(mediaQuery.matches);
      setIsVisible(mediaQuery.matches);
    };

    updatePointerMode();
    mediaQuery.addEventListener("change", updatePointerMode);

    return () => {
      mediaQuery.removeEventListener("change", updatePointerMode);
    };
  }, []);

  useEffect(() => {
    if (!isPointerDevice) {
      setIsVisible(false);
      return undefined;
    }

    const animateCursor = () => {
      outerRef.current.x += (position.x - outerRef.current.x) * 0.18;
      outerRef.current.y += (position.y - outerRef.current.y) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${outerRef.current.x}px, ${outerRef.current.y}px, 0)`;
      }

      frameRef.current = window.requestAnimationFrame(animateCursor);
    };

    frameRef.current = window.requestAnimationFrame(animateCursor);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isPointerDevice, position]);

  useEffect(() => {
    if (!isPointerDevice) {
      return undefined;
    }

    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
      setIsInteractive(Boolean(event.target.closest(interactiveSelector)));
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isPointerDevice]);

  if (!isPointerDevice) {
    return null;
  }

  const cursorClassName = [
    "animated-cursor",
    isVisible ? "is-visible" : "",
    isInteractive ? "is-interactive" : "",
    isPressed ? "is-pressed" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={cursorRef}
      className={cursorClassName}
      aria-hidden="true"
    >
      <span className="cursor-core" />
      <span className="cursor-ring" />
    </div>
  );
};

export default AnimatedCursor;
