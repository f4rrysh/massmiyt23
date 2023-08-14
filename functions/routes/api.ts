import { Router } from 'x:oak';
import { getSupabase } from '../database/supabase.ts';

export default new Router()
    .get('/api/image', async (context) => {
        const supabase = getSupabase();

        const { data, error } = await supabase
            .from('image')
            .select('href, alt')
            .order('timestamp', {
                ascending: false
            });

        if (error || !data) {
            context.response.headers.set('Content-Type', 'application/json');
            context.response.body = JSON.stringify(error);
        } else {
            context.response.headers.set('Content-Type', 'application/json');
            context.response.body = JSON.stringify({ image: data });
        }
    })
    .get('/api/result', async (context) => {
        const supabase = getSupabase();

        const {} = await supabase;
    });
