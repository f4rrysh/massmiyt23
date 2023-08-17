import React, { useState } from 'react';
import { render } from 'utils/render';

// App
import App from 'app/App';

// Styling
import 'styles/pages/Gallery.scss';

function Gallery(): JSX.Element {
    const [isSelected, setSelected] = useState(false);

    return (
        <App title="Gallery">
            <div className="gallery"></div>
        </App>
    );
}

render(<Gallery />);
