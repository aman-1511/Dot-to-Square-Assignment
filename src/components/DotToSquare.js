import React, { useState, useEffect, useRef } from 'react';
import './DotToSquare.css';

function DotToSquare() {
  const [dots, setDots] = useState([]);
  const [completedSquares, setCompletedSquares] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);
  const [pageHeight, setPageHeight] = useState('100vh');
  const linesContainerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      updateContainerSize();
    };

    const updateContainerSize = () => {
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      setPageHeight(`${docHeight}px`);
    };

    updateContainerSize();
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', updateContainerSize);
    
    const resizeInterval = setInterval(updateContainerSize, 1000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', updateContainerSize);
      clearInterval(resizeInterval);
    };
  }, []);

  useEffect(() => {
    const handleWindowClick = (e) => {
      if (e.target.closest('.controls-panel') || e.target.closest('.completion-message')) {
        return;
      }

      if (dots.length < 4) {
        setDots([...dots, { 
          x: e.clientX + window.scrollX, 
          y: e.clientY + window.scrollY 
        }]);
      }
    };

    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [dots]);

  const resetDrawing = () => {
    setDots([]);
    setCompletedSquares([]);
    setShowCompletionMessage(false);
  };

  const startNewSquare = () => {
    if (dots.length === 4) {
      const newCompletedSquare = {
        dots: [...dots],
        id: Date.now()
      };
      
      setCompletedSquares([...completedSquares, newCompletedSquare]);
      setDots([]);
      setShowCompletionMessage(false);
    }
  };

  useEffect(() => {
    if (dots.length === 4) {
      setShowCompletionMessage(true);
    } else {
      setShowCompletionMessage(false);
    }
  }, [dots]);

  const renderLines = () => {
    const lines = [];
    for (let i = 0; i < dots.length - 1; i++) {
      lines.push(
        <line
          key={`line-${i}`}
          x1={dots[i].x}
          y1={dots[i].y}
          x2={dots[i + 1].x}
          y2={dots[i + 1].y}
          className="line"
        />
      );
    }

    if (dots.length === 4) {
      lines.push(
        <line
          key="line-3"
          x1={dots[3].x}
          y1={dots[3].y}
          x2={dots[0].x}
          y2={dots[0].y}
          className="line"
        />
      );
    }

    return lines;
  };

  const renderCompletedSquares = () => {
    return completedSquares.map((square) => {
      const squareLines = [];
      for (let i = 0; i < 4; i++) {
        const nextIndex = (i + 1) % 4;
        squareLines.push(
          <line
            key={`square-${square.id}-line-${i}`}
            x1={square.dots[i].x}
            y1={square.dots[i].y}
            x2={square.dots[nextIndex].x}
            y2={square.dots[nextIndex].y}
            className="line completed-line"
          />
        );
      }
      
      return (
        <g key={`square-${square.id}`} className="completed-square">
          {squareLines}
          {square.dots.map((dot, index) => (
            <circle
              key={`square-${square.id}-dot-${index}`}
              cx={dot.x}
              cy={dot.y}
              r={6}
              className="svg-dot"
            />
          ))}
        </g>
      );
    });
  };
  
  return (
    <div className="dot-to-square-container" ref={containerRef} style={{ height: pageHeight, minHeight: '100vh' }}>
      {dots.map((dot, index) => (
        <div
          key={`dot-${index}`}
          className="dot"
          style={{ left: `${dot.x}px`, top: `${dot.y}px` }}
        />
      ))}

      <svg ref={linesContainerRef} className="lines-container" style={{ height: pageHeight }}>
        {renderCompletedSquares()}
        {renderLines()}
      </svg>

      <div className={`controls-panel ${isMobile ? 'mobile' : ''}`}>
        <div className="dots-counter">
          Dots: {dots.length}/4 {completedSquares.length > 0 && `| Squares: ${completedSquares.length}`}
        </div>
        
        <button
          className="reset-button"
          onClick={dots.length === 4 ? startNewSquare : resetDrawing}
          disabled={dots.length === 0 && completedSquares.length === 0}
        >
          {dots.length === 4 ? "Draw Another" : "Reset Drawing"}
        </button>
        
        <div className="instructions">
          {dots.length === 0
            ? "Click anywhere to start drawing a square"
            : dots.length < 4
            ? `Click to add dot ${dots.length + 1}/4`
            : "Square complete! You can draw another or reset."}
        </div>
      </div>

      {showCompletionMessage && (
        <div className="completion-message">
          <p>Square Complete!</p>
          <div className="buttons">
            <button className="btn" onClick={startNewSquare}>
              Draw Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DotToSquare; 