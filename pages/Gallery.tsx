import React, { useState, lazy } from 'react';
import { render } from 'utils/render';

// App
import App from 'app/App';

// Layout(s)
const Image = lazy(() => import('layouts/Image'));

// Styling
import 'styles/pages/Gallery.scss';

function Gallery(): JSX.Element {
    const [selectedImage, setSelectedImage] = useState('');

    return (
        <App title="Gallery">
            <div className="gallery">
                <Image setSelectedImage={setSelectedImage} />
            </div>
        </App>
    );
}

render(<Gallery />);
