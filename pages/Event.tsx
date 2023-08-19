import React, { lazy } from 'react';
import { render } from 'utils/render';

// App
import App from 'app/App';

function Event(): JSX.Element {
    return (
        <App title="Event">
            <div className="event"></div>
        </App>
    );
}

render(<Event />);
