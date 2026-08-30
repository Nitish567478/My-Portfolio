import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SphereWrapper = styled.div`
  width: 100%;
  height: 480px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1200px;
  overflow: hidden;
  user-select: none;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const CanvasWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 540px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
`;

const TechSphereTag = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme, $color }) => $color ? `${$color}66` : theme.borderHighlight};
  border-radius: 999px;
  backdrop-filter: blur(14px);
  color: ${({ theme }) => theme.text};
  font-size: 0.92rem;
  font-weight: 700;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4), 0 0 15px ${({ $color }) => $color ? `${$color}33` : "transparent"};
  cursor: pointer;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
  white-space: nowrap;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  &:hover {
    border-color: ${({ $color, theme }) => $color || theme.accent};
    box-shadow: 0 0 25px ${({ $color, theme }) => $color || theme.accent};
    z-index: 1000 !important;
  }
`;

const TechSphere3D = ({ skills, onSelectSkill }) => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ rx: 0.002, ry: 0.003 });
  const [angles, setAngles] = useState({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const radius = 170; // 3D sphere radius

  // Calculate Fibonacci sphere points
  const points = React.useMemo(() => {
    const pts = [];
    const count = skills.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      pts.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        skill: skills[i],
      });
    }
    return pts;
  }, [skills, radius]);

  useEffect(() => {
    let animId;
    const animate = () => {
      if (!isDraggingRef.current) {
        setAngles((prev) => ({
          x: prev.x + rotation.rx,
          y: prev.y + rotation.ry,
        }));
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [rotation]);

  // Handle Drag / Pointer interaction
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    lastMousePosRef.current = { x: clientX, y: clientY };
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

    const dx = clientX - lastMousePosRef.current.x;
    const dy = clientY - lastMousePosRef.current.y;

    setAngles((prev) => ({
      x: prev.x - dy * 0.005,
      y: prev.y + dx * 0.005,
    }));

    setRotation({
      rx: -dy * 0.0005,
      ry: dx * 0.0005,
    });

    lastMousePosRef.current = { x: clientX, y: clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  // 3D rotation projection
  const cosX = Math.cos(angles.x);
  const sinX = Math.sin(angles.x);
  const cosY = Math.cos(angles.y);
  const sinY = Math.sin(angles.y);

  return (
    <SphereWrapper
      ref={containerRef}
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    >
      <CanvasWrapper>
        {points.map((pt, idx) => {
          // Rotate around Y axis
          const x1 = pt.x * cosY + pt.z * sinY;
          const z1 = -pt.x * sinY + pt.z * cosY;

          // Rotate around X axis
          const y2 = pt.y * cosX - z1 * sinX;
          const z2 = pt.y * sinX + z1 * cosX;

          // Perspective depth calculation
          const fov = 400;
          const scale = fov / (fov + z2);
          const opacity = Math.max(0.2, (z2 + radius) / (2 * radius));
          const zIndex = Math.round(z2 + radius);

          return (
            <TechSphereTag
              key={idx}
              $color={pt.skill.color}
              style={{
                transform: `translate3d(${x1}px, ${y2}px, 0) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
              }}
              onClick={() => onSelectSkill(pt.skill)}
            >
              <img src={pt.skill.img} alt={pt.skill.name} />
              <span>{pt.skill.name}</span>
            </TechSphereTag>
          );
        })}
      </CanvasWrapper>
    </SphereWrapper>
  );
};

export default TechSphere3D;
