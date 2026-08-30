import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const CanvasContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  background: transparent;
`;

const TechCanvas3D = ({ darkMode = true }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for 3D parallax
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // High-visibility palette for both dark and white backgrounds
    const colorPalette = darkMode
      ? ["#ff5733", "#ff8e53", "#6366f1", "#a855f7", "#38bdf8"]
      : ["#ea580c", "#d97706", "#4f46e5", "#7c3aed", "#0284c7"];

    const cubeColors = darkMode
      ? [
          "rgba(255, 87, 51, 0.35)",
          "rgba(99, 102, 241, 0.3)",
          "rgba(255, 142, 83, 0.3)",
          "rgba(168, 85, 247, 0.3)",
        ]
      : [
          "rgba(234, 88, 12, 0.5)",
          "rgba(79, 70, 229, 0.45)",
          "rgba(217, 119, 6, 0.45)",
          "rgba(124, 58, 237, 0.45)",
        ];

    // Create 3D Nodes
    const nodeCount = Math.min(75, Math.floor((width * height) / 16000));
    const nodes = [];
    const symbols = ["< />", "{ }", "01", "=>", "&&", "[ ]", "++", "/* */", "#!", "React", "Node"];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 + 50,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        vz: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.8 + 1.8,
        color: colorPalette[i % colorPalette.length],
        symbol: i % 4 === 0 ? symbols[Math.floor(Math.random() * symbols.length)] : null,
      });
    }

    // 3D Wireframe Floating Cubes
    const cubes = [
      { x: -width * 0.35, y: -height * 0.2, z: 400, size: 75, rx: 0, ry: 0, rz: 0, drx: 0.008, dry: 0.01, color: cubeColors[0] },
      { x: width * 0.38, y: height * 0.15, z: 300, size: 95, rx: 0, ry: 0, rz: 0, drx: 0.006, dry: 0.008, color: cubeColors[1] },
      { x: -width * 0.25, y: height * 0.35, z: 500, size: 65, rx: 0, ry: 0, rz: 0, drx: 0.01, dry: 0.005, color: cubeColors[2] },
      { x: width * 0.3, y: -height * 0.3, z: 450, size: 85, rx: 0, ry: 0, rz: 0, drx: 0.007, dry: 0.012, color: cubeColors[3] },
    ];

    const fov = 450; // Field of view distance

    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const offsetX = (mouse.x - width / 2) * 0.15;
      const offsetY = (mouse.y - height / 2) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // Render 3D Wireframe Cubes
      cubes.forEach((cube) => {
        cube.rx += cube.drx;
        cube.ry += cube.dry;

        const vertices = [
          [-1, -1, -1],
          [1, -1, -1],
          [1, 1, -1],
          [-1, 1, -1],
          [-1, -1, 1],
          [1, -1, 1],
          [1, 1, 1],
          [-1, 1, 1],
        ].map(([vx, vy, vz]) => {
          // Rotate X
          let y1 = vy * Math.cos(cube.rx) - vz * Math.sin(cube.rx);
          let z1 = vy * Math.sin(cube.rx) + vz * Math.cos(cube.rx);

          // Rotate Y
          let x2 = vx * Math.cos(cube.ry) + z1 * Math.sin(cube.ry);
          let z2 = -vx * Math.sin(cube.ry) + z1 * Math.cos(cube.ry);

          const scale = cube.size;
          const worldX = cube.x + x2 * scale - offsetX * 0.5;
          const worldY = cube.y + y1 * scale - offsetY * 0.5;
          const worldZ = cube.z + z2 * scale;

          const projScale = fov / (fov + worldZ);
          return {
            x: worldX * projScale + width / 2,
            y: worldY * projScale + height / 2,
            scale: projScale,
          };
        });

        const edges = [
          [0, 1], [1, 2], [2, 3], [3, 0], // Back face
          [4, 5], [5, 6], [6, 7], [7, 4], // Front face
          [0, 4], [1, 5], [2, 6], [3, 7], // Connecting edges
        ];

        ctx.strokeStyle = cube.color;
        ctx.lineWidth = darkMode ? 1.3 : 1.6;
        edges.forEach(([i, j]) => {
          ctx.beginPath();
          ctx.moveTo(vertices[i].x, vertices[i].y);
          ctx.lineTo(vertices[j].x, vertices[j].y);
          ctx.stroke();
        });
      });

      // Update & project 3D Nodes
      const projectedNodes = [];

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        // Boundary wrapping in 3D
        if (node.x < -width * 0.8) node.x = width * 0.8;
        if (node.x > width * 0.8) node.x = -width * 0.8;
        if (node.y < -height * 0.8) node.y = height * 0.8;
        if (node.y > height * 0.8) node.y = -height * 0.8;
        if (node.z < 50) node.z = 850;
        if (node.z > 850) node.z = 50;

        const effectiveX = node.x - offsetX;
        const effectiveY = node.y - offsetY;
        const scale = fov / (fov + node.z);

        const projX = effectiveX * scale + width / 2;
        const projY = effectiveY * scale + height / 2;
        const baseAlpha = (1 - node.z / 900);
        const alpha = Math.min(1, Math.max(darkMode ? 0.15 : 0.4, baseAlpha * (darkMode ? 0.9 : 1.0)));

        projectedNodes.push({
          x: projX,
          y: projY,
          scale,
          alpha,
          color: node.color,
          radius: node.radius * scale,
          symbol: node.symbol,
        });

        // Draw particle node
        ctx.fillStyle = node.color;
        ctx.globalAlpha = alpha;

        if (node.symbol) {
          ctx.font = `bold ${Math.max(11, Math.floor(15 * scale))}px 'JetBrains Mono', monospace`;
          ctx.fillText(node.symbol, projX, projY);
        } else {
          ctx.beginPath();
          ctx.arc(projX, projY, Math.max(1.5, node.radius * scale), 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw 3D Connective Mesh Lines
      const maxDistance = 145;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i];
          const p2 = projectedNodes[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < maxDistance) {
            const lineFactor = (1 - dist / maxDistance);
            const lineAlpha = lineFactor * Math.min(p1.alpha, p2.alpha) * (darkMode ? 0.45 : 0.4);
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = (darkMode ? 0.9 : 1.2) * p1.scale;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [darkMode]);

  return (
    <CanvasContainer>
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </CanvasContainer>
  );
};

export default TechCanvas3D;
