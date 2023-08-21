import { useState, useEffect } from 'react';
import { getSupabase } from 'data/supabase';

export function useStorage(bucket: string) {
    const [images, setImages] = useState<string[]>([]);
    const [error, setError] = useState<Error | null>();

    const getImages = async () => {
        const supabase = getSupabase();

        const files = await supabase.storage.from(bucket).list();
        setImages(
            files.data
                ?.filter((file) => !file.name.startsWith('.'))
                .map(
                    (file) =>
                        `https://hlekjfeoplbhldjqzqvs.supabase.co/storage/v1/object/public/image/${file.name}`
                ) || []
        );
        setError(files.error);
    };

    useEffect(() => {
        getImages();
    }, []);

    return { images, error };
}
