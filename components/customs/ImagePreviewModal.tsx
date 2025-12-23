"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ZoomOut, RotateCw, ChevronLeft, ChevronRight, Move } from 'lucide-react';

interface ImagePreviewModalProps {
    isOpen: boolean;
    imageSrc: string;
    imageAlt: string;
    onClose: () => void;
    allImages?: string[];
    currentIndex?: number;
    onImageChange?: (index: number) => void;
}

export default function ImagePreviewModal({
    isOpen,
    imageSrc,
    imageAlt,
    onClose,
    allImages = [],
    onImageChange
}: ImagePreviewModalProps) {
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const currentImageIndex = allImages.indexOf(imageSrc);
    const hasMultipleImages = allImages.length > 1;

    const handleNext = () => {
        if (hasMultipleImages) {
            const nextIndex = (currentImageIndex + 1) % allImages.length;
            onImageChange?.(nextIndex);
            handleReset();
        }
    };

    const handlePrevious = () => {
        if (hasMultipleImages) {
            const prevIndex = currentImageIndex === 0 ? allImages.length - 1 : currentImageIndex - 1;
            onImageChange?.(prevIndex);
            handleReset();
        }
    };

    const handleZoomIn = () => {
        setScale(prev => {
            const newScale = Math.min(prev + 0.25, 3);
            // Reset position when zooming in from 1x
            if (prev === 1) {
                setPosition({ x: 0, y: 0 });
            }
            return newScale;
        });
    };

    const handleZoomOut = () => {
        setScale(prev => {
            const newScale = Math.max(prev - 0.25, 0.5);
            // Reset position when zooming out to 1x
            if (newScale === 1) {
                setPosition({ x: 0, y: 0 });
            }
            return newScale;
        });
    };

    const handleRotate = () => {
        setRotation(prev => prev + 90);
    };

    const handleReset = () => {
        setScale(1);
        setRotation(0);
        setPosition({ x: 0, y: 0 });
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (scale > 1) {
            e.preventDefault();
            setIsDragging(true);
            setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y
            });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && scale > 1) {
            e.preventDefault();
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowLeft' && hasMultipleImages) {
                handlePrevious();
            } else if (e.key === 'ArrowRight' && hasMultipleImages) {
                handleNext();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose, hasMultipleImages]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
            {/* Background overlay */}
            <div
                className="absolute inset-0 cursor-zoom-out"
                onClick={onClose}
            />

            {/* Navigation buttons */}
            {hasMultipleImages && (
                <>
                    <button
                        onClick={handlePrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                        title="Previous Image (←)"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                        title="Next Image (→)"
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}

            {/* Controls */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                <button
                    onClick={handleZoomOut}
                    className="p-2 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-colors"
                    title="Zoom Out"
                >
                    <ZoomOut size={20} />
                </button>
                <button
                    onClick={handleZoomIn}
                    className="p-2 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-colors"
                    title="Zoom In"
                >
                    <ZoomIn size={20} />
                </button>
                <button
                    onClick={handleRotate}
                    className="p-2 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-colors"
                    title="Rotate"
                >
                    <RotateCw size={20} />
                </button>
                <button
                    onClick={handleReset}
                    className="p-2 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-colors"
                    title="Reset View"
                >
                    <Move size={20} />
                </button>
                <button
                    onClick={onClose}
                    className="p-2 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-colors"
                    title="Close (ESC)"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Image counter */}
            {hasMultipleImages && (
                <div className="absolute top-4 left-4 z-10">
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md text-white rounded-lg text-sm">
                        {currentImageIndex + 1} / {allImages.length}
                    </div>
                </div>
            )}

            {/* Zoom indicator */}
            <div className="absolute bottom-4 left-4 z-10">
                <div className="px-3 py-1 bg-white/10 backdrop-blur-md text-white rounded-lg text-sm">
                    {Math.round(scale * 100)}%
                </div>
            </div>

            {/* Image container */}
            <div
                ref={containerRef}
                className="relative max-w-[90vw] max-h-[90vh] overflow-hidden"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className={`transition-transform duration-300 ease-out ${scale > 1 ? 'cursor-move' : 'cursor-zoom-out'}`}
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) rotate(${rotation}deg)`,
                    }}
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={1200}
                        height={800}
                        className="max-w-full max-h-[80vh] object-contain select-none"
                        draggable={false}
                    />
                </div>
            </div>

            {/* Instructions */}
            <div className="absolute bottom-4 right-4 z-10">
                <div className="px-3 py-1 bg-white/10 backdrop-blur-md text-white rounded-lg text-xs max-w-xs text-center">
                    {scale > 1 ? 'Drag to pan • ESC to close' :
                        hasMultipleImages ? 'Click image to zoom • Arrow keys to navigate • ESC to close' :
                            'Click image to zoom • ESC to close'}
                </div>
            </div>
        </div>
    );
}