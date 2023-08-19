import React, { useState, lazy } from 'react';
import { render } from 'utils/render';

// App
import App from 'app/App';

// Layout(s)
const Image = lazy(() => import('layouts/Image'));

function Gallery(): JSX.Element {
    return (
        <App title="Gallery">
            <div className="gallery">
                <Image />
            </div>
        </App>
    );
}

render(<Gallery />);
