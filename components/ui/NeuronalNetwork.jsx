// src/components/CircuitNetwork.jsx

import React from 'react';
import { motion } from 'framer-motion';

const CircuitNetwork = () => {
  // Number of nodes to generate
  const totalNodes = 50;

  // Random node generation with random radii
  const nodes = Array.from({ length: totalNodes }, (_, i) => {
    const angle = Math.random() * 2 * Math.PI; // Random angle between 0 and 2π
    const radius = Math.random() * 40; // Random radius between 0 and 40

    return {
      id: i + 1,
      x: 50 + radius * Math.cos(angle), // Centered at 50%
      y: 50 + radius * Math.sin(angle),
    };
  });

  // Dynamic connection generation based on distance
  const maxDistance = 15; // Adjust as needed
  const connections = [];

  nodes.forEach((nodeA, index) => {
    nodes.slice(index + 1).forEach(nodeB => {
      const dx = nodeA.x - nodeB.x;
      const dy = nodeA.y - nodeB.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance <= maxDistance) {
        connections.push({ from: nodeA.id, to: nodeB.id });
      }
    });
  });

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Render connections */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn, index) => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);

          return (
            <motion.line
              key={index}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="rgba(0, 255, 255, 0.7)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                delay: index * 0.02,
                repeat: Infinity,
                repeatDelay: connections.length * 0.02,
              }}
              className="glow-line"
            />
          );
        })}
      </svg>

      {/* Render nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute bg-green-300 rounded-full glow-node"
          style={{
            width: '6px',
            height: '6px',
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{
            duration: 0.5,
            delay: index * 0.02,
            repeat: Infinity,
            repeatDelay: nodes.length * 0.02,
          }}
        />
      ))}
    </div>
  );
};

export default CircuitNetwork;
