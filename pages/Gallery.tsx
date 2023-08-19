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
                <h3>Gallery</h3>
                <p>Some of the pictures taken during the 2023 MASSMIYT event</p>
                <Image />
            </div>
        </App>
    );
}

render(<Gallery />);
