import { useEffect, useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { getSupabase } from 'data/supabase';

export function useEvent() {
    const [error, setError] = useState<PostgrestError | null>(null);
    const [data, setData] = useState<Record<string, unknown | null>[] | null>(
        null
    );

    const getData = async () => {
        const supabase = getSupabase();

        const event = await supabase.from('event').select('*');
        setError(event.error);
        setData(event.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return { error, data };
}
