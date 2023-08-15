import { Router } from 'x:oak';
import { getSupabase } from '../database/supabase.ts';

export default new Router({ prefix: '/api' })
    .get('/image', async (context) => {
        const supabase = getSupabase();

        const { data, error } = await supabase
            .from('image')
            .select('*')
            .order('timestamp', {
                ascending: false
            });

        if (error || !data) {
            context.response.headers.set('Content-Type', 'application/json');
            context.response.status = 500;
            context.response.body = JSON.stringify(
                error || {
                    name: 'Error',
                    message: "'data' is not available"
                }
            );
        } else {
            context.response.headers.set('Content-Type', 'application/json');
            context.response.body = JSON.stringify({ image: data });
        }
    })
    .get('/event', async (context) => {
        const supabase = getSupabase();

        const { data, error } = await supabase
            .from('event')
            .select('*')
            .order('sport')
            .order('match');

        if (error || !data) {
            context.response.headers.set('Content-Type', 'application/json');
            context.response.status = 500;
            context.response.body = JSON.stringify(
                error || {
                    name: 'Error',
                    message: "'data' is not available"
                }
            );
        } else {
            context.response.headers.set('Content-Type', 'application/json');
            context.response.body = JSON.stringify(data);
        }
    });
