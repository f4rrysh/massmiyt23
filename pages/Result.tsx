import React, { lazy } from 'react';
import { render } from 'utils/render';

// App
import App from 'app/App';

function Result(): JSX.Element {
    return (
        <App title="Result">
            <div className="result">
                <h3>Result</h3>
                <p>Get up-to-date result of the played matches</p>
            </div>
        </App>
    );
}

render(<Result />);
