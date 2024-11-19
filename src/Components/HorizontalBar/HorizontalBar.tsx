"use client";
import React, { useRef } from 'react';
import styles from './HorizontalBar.module.css'; // Ваш CSS для стилей

import SectionsData from "../../DataAssets/Sections.Data.json";

import surveyStore from "@/Store/SurveyStore";
import Link from "next/link";

const HorizontalBar: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        container.dataset.isDragging = 'true';
        container.dataset.startX = e.pageX.toString();
        container.dataset.scrollLeft = container.scrollLeft.toString();
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const container = scrollContainerRef.current;
        if (!container || container.dataset.isDragging !== 'true') return;

        const startX = parseFloat(container.dataset.startX || '0');
        const scrollLeft = parseFloat(container.dataset.scrollLeft || '0');
        const x = e.pageX - startX;
        container.scrollLeft = scrollLeft - x;
    };

    const handleMouseUpOrLeave = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        container.dataset.isDragging = 'false';
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        container.dataset.startX = e.touches[0].clientX.toString();
        container.dataset.scrollLeft = container.scrollLeft.toString();
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const startX = parseFloat(container.dataset.startX || '0');
        const scrollLeft = parseFloat(container.dataset.scrollLeft || '0');
        const x = e.touches[0].clientX - startX;
        container.scrollLeft = scrollLeft - x;
    };



    return (
        <div
            className={styles.scrollContainer}
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >

            {SectionsData.names.map(({text, pageNumber}) => (
                <div
                    onClick={() => surveyStore.setPage(pageNumber)}
                    key={text}
                    className={styles.scrollItem}>
                    {text}
                </div>
            ))}
        </div>
    );
};

export default HorizontalBar;
