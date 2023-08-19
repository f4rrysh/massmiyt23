import React, { lazy } from 'react';
import { render } from 'utils/render';

// App
import App from 'app/App';

function Schedule(): JSX.Element {
    return (
        <App title="Schedule">
            <div className="schedule"></div>
        </App>
    );
}

render(<Schedule />);
