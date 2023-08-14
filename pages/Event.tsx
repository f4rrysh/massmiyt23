import React, { lazy } from 'react';
import { render } from 'utils/render';

// App
import App from 'app/App';

// Styling
import 'styles/pages/Event.scss';

function Event(): JSX.Element {
    return (
        <App>
            <div className="event"></div>
        </App>
    );
}

render(<Event />);