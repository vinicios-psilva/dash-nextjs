'use client';

import { useEffect, useRef} from 'react';

const DataBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if(!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        // Configuração
        const particleCount = 60;
        const connectionDistance = 150;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.heigth = window.innerHeigth;
        };

        class Paricle {
            X: NUMBER;
            Y: NUMBER;
            X: 
        }
    })
}