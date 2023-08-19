import React, { useEffect, useState, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { useStorage } from 'hooks/storage';

export interface ImageProp {}

import 'styles/layouts/Image.scss';

export default function Image({}: ImageProp): JSX.Element {
    const { images, error } = useStorage('image');
    const [image, setImage] = useState('');

    const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
        if (event.currentTarget.classList.contains('backdrop')) {
            setImage('');
        }
    };

    // TODO: Handle error
    if (error) {
    }

    return (
        <div className="image">
            {images.map((image, index) => {
                return (
                    <motion.div
                        layout
                        whileHover={{ opacity: 1 }}
                        className="container"
                        key={index}
                        onClick={() => setImage(image)}
                    >
                        <motion.img
                            src={image}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        />
                    </motion.div>
                );
            })}
            {image && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="backdrop"
                    onClick={handleOnClick}
                >
                    <motion.img
                        initial={{ y: '-100vh' }}
                        animate={{ y: 0 }}
                        src={image}
                        style={{ backgroundColor: '#fff' }}
                    />
                </motion.div>
            )}
        </div>
    );
}
