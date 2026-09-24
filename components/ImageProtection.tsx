'use client';

import { useEffect } from 'react';

/**
 * ImageProtection Component
 * Prevents right-click context menu and drag-and-drop actions on images across the website.
 */
export default function ImageProtection() {
  useEffect(() => {
    // Prevent right-click context menu on images and image wrappers
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isImage =
        target.tagName === 'IMG' ||
        target.closest('img') !== null ||
        target.closest('[data-protect-image]') !== null ||
        (target instanceof HTMLImageElement);

      if (isImage) {
        e.preventDefault();
      }
    };

    // Prevent dragging images to desktop or new tabs
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.tagName === 'IMG' || target.closest('img') !== null) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return null;
}
