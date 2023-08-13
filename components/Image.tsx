import React, { useRef } from 'react';

interface ImageProp {
    src: string;
    alt?: string;
}

import 'styles/components/Image.scss';

export function Image({ src, alt = 'Image' }: ImageProp): JSX.Element {
    const imageRef = useRef<HTMLImageElement>(null);

    return <img className="image" ref={imageRef} src={src} alt={alt} />;
}
