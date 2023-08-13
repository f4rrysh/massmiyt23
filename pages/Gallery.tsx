import React from 'react';
import { createRoot } from 'react-dom/client';

// App
import App from 'app/App';

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
