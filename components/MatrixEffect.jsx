import { useEffect, useRef } from "react";

const MatrixEffect = () => {
   const canvasRef = useRef(null);

   useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const katakana = "アカサタナハマヤラワン";
      const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const nums = "0123456789";

      const alphabet = katakana + latin + nums;

      // Fonction pour générer une taille de police aléatoire entre 10 et 16
      const getRandomFontSize = () => Math.floor(Math.random() * (16 - 10 + 1)) + 10;

      const columns = canvas.width / 16; // Utiliser une taille de base pour les colonnes

      // Initialiser les positions, les vitesses et les tailles de police aléatoires des gouttes
      const rainDrops = Array.from({ length: columns }).map(() => ({
         y: Math.random() * canvas.height,
         speed: Math.random() + 0.5,
         fontSize: getRandomFontSize(), 
      }));

      const draw = () => {
         ctx.fillStyle = "rgba(3, 7, 18, 0.05)";
         ctx.fillRect(0, 0, canvas.width, canvas.height);

         ctx.fillStyle = "#0F0"; // Couleur des gouttes

         rainDrops.forEach((drop, index) => {
            const text = alphabet.charAt(
               Math.floor(Math.random() * alphabet.length)
            );
            const x = index * 16; 
            ctx.font = `${drop.fontSize}px monospace`;
            ctx.fillText(text, x, drop.y);

            drop.y += drop.speed * drop.fontSize;

            if (drop.y > canvas.height && Math.random() > 0.975) {
               drop.y = 0;
               drop.fontSize = getRandomFontSize(); // Changer la taille de police lors de la réinitialisation
               if (!drop.hasRandomized) {
                  drop.speed = (Math.random() - 0.5) * 2;
                  drop.hasRandomized = true;
               }
            } else if (drop.y < 0 && Math.random() > 0.975) {
               drop.y = canvas.height;
               drop.fontSize = getRandomFontSize(); 
               if (!drop.hasRandomized) {
                  drop.speed = (Math.random() - 0.5) * 2;
                  drop.hasRandomized = true;
               }
            }
         });
      };

      const intervalId = setInterval(draw, 25);

      // Nettoyer l'intervalle lors du démontage du composant
      return () => clearInterval(intervalId);
   }, []);

   return (
      <canvas
         ref={canvasRef}
         className="absolute top-0 left-0 w-full h-full z-0 blur-custom"
         style={{ background: 'transparent' }}
      />
   );
};

export default MatrixEffect;
