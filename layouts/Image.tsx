import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getSupabase } from 'data/supabase';

export interface ImageProp {
    setSelectedImage: (selectedImage: string) => void;
}

export default function Image({ setSelectedImage }: ImageProp): JSX.Element {
    const [images, setImages] = useState<string[]>([]);

    const getImages = async () => {
        const supabase = getSupabase();

        setImages(
            (await supabase.storage.from('image').list()).data?.map((file) => {
                return `https://hlekjfeoplbhldjqzqvs.supabase.co/storage/v1/object/public/image/${file.name}`;
            }) || []
        );
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
        <div className="image">
            {images.map((image, index) => {
                return (
                    <motion.div
                        layout
                        whileHover={{ opacity: 1 }}
                        className="container"
                        key={index}
                        onClick={() => setSelectedImage(image)}
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
        </div>
    );
}
