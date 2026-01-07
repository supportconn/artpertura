
import React, { useRef, useEffect, useState } from 'react';
import { ToolConfig } from '../types';

interface DrawingCanvasProps {
  onScan: (image: string) => void;
  onCancel: () => void;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ onScan, onCancel }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#6366f1');
  const [lineWidth, setLineWidth] = useState(5);

  const colors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#ef4444', '#0f172a'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const parent = canvas.parentElement;
    if (!parent) return;
    
    const rect = parent.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const context = canvas.getContext('2d');
    if (context) {
      context.scale(dpr, dpr);
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.strokeStyle = color;
      context.lineWidth = lineWidth;
      contextRef.current = context;
      
      context.fillStyle = 'white';
      context.fillRect(0, 0, rect.width, rect.height);
    }
  }, []);

  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = color;
      contextRef.current.lineWidth = lineWidth;
    }
  }, [color, lineWidth]);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const coords = getCoordinates(e);
    contextRef.current?.beginPath();
    contextRef.current?.moveTo(coords.x, coords.y);
    setIsDrawing(true);
    
    if (e.cancelable) {
      e.preventDefault();
    }
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const coords = getCoordinates(e);
    contextRef.current?.lineTo(coords.x, coords.y);
    contextRef.current?.stroke();
    
    if (e.cancelable) {
      e.preventDefault();
    }
  };

  const stopDrawing = () => {
    contextRef.current?.closePath();
    setIsDrawing(false);
  };

  const getCoordinates = (e: any) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    
    // Handle touch events
    if (e.touches && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    
    // Handle changed touches for end events
    if (e.changedTouches && e.changedTouches.length > 0) {
      return {
        x: e.changedTouches[0].clientX - rect.left,
        y: e.changedTouches[0].clientY - rect.top,
      };
    }

    // Handle mouse events using offsetX/Y if available
    if (e.nativeEvent && e.nativeEvent.offsetX !== undefined) {
      return {
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
      };
    }

    // Fallback coordinate calculation
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleClear = () => {
    if (contextRef.current && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      contextRef.current.fillStyle = 'white';
      contextRef.current.fillRect(0, 0, rect.width, rect.height);
    }
  };

  const handleScan = () => {
    const dataUrl = canvasRef.current?.toDataURL('image/png');
    if (dataUrl) onScan(dataUrl);
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto gap-6 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Your Canvas</h2>
          <p className="text-slate-500 font-medium">Draw something that reflects your current state of mind.</p>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 p-2 bg-white rounded-2xl shadow-sm border border-slate-100">
              {colors.map(c => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-8 h-8 rounded-full transition-transform ${color === c ? 'scale-125 shadow-lg border-2 border-slate-900' : 'hover:scale-110'}`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <input 
              type="range" 
              min="2" max="20" 
              value={lineWidth} 
              onChange={(e) => setLineWidth(Number(e.target.value))}
              className="accent-indigo-600 w-32"
            />
          </div>
        </div>
        <button
          onClick={onCancel}
          className="text-xs font-black text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors"
        >
          Cancel Demo
        </button>
      </div>

      <div className="relative aspect-[4/3] bg-white rounded-[2.5rem] shadow-2xl border-8 border-white overflow-hidden cursor-crosshair group">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          style={{ touchAction: 'none' }}
          className="w-full h-full block"
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
           <button onClick={handleClear} className="px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase rounded-xl shadow-lg">Clear All</button>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <button
          onClick={handleScan}
          className="px-16 py-6 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-2xl rounded-3xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4 uppercase tracking-tighter"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Analyze Artwork
        </button>
      </div>
    </div>
  );
};

export default DrawingCanvas;
