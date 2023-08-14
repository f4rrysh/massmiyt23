import React, { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createClient } from '@supabase/supabase-js';

// App
import App from 'app/App';

const Image = lazy(() => import('layouts/Image'));

// Styling
import 'styles/pages/Gallery.scss';

function Gallery(): JSX.Element {
    return (
        <App title="Gallery">
            <div className="gallery">
                <div className="container"></div>
            </div>
        </App>
    );
}

createRoot(document.body).render(<Gallery />);
