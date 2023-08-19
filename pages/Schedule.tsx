import React, { lazy } from 'react';
import { render } from 'utils/render';

// App
import App from 'app/App';

function Schedule(): JSX.Element {
    return (
        <App title="Schedule">
            <div className="schedule">
                <h3>Schedule</h3>
                <p>Get an insight of the next match</p>
            </div>
        </App>
    );
}

render(<Schedule />);
