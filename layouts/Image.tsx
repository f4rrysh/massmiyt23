import React, { useEffect, useRef, useState } from 'react';

interface ImageProp {
    src: string;
    alt?: string;
}

import 'styles/layouts/Image.scss';

export default function Image({ src, alt = 'Image' }: ImageProp): JSX.Element {
    const [isIntersecting, setIntersecting] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIntersecting(entry.isIntersecting);
                }
            },
            { rootMargin: '300px' }
        );

        if (!imageRef.current) {
            return;
        }

        observer.observe(imageRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!imageRef.current) {
            return;
        }

        if (isIntersecting) {
            const dataSrc = imageRef.current.getAttribute('data-src');
            if (dataSrc) {
                imageRef.current.src = dataSrc;
            }
        }
    }, [isIntersecting]);

    return (
        <img className="image" ref={imageRef} src={src + '?w=10'} alt={alt} />
    );
}
