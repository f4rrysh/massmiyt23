import React, { lazy } from 'react';
import { render } from 'utils/render';

// App
import App from 'app/App';

const Rank = lazy(() => import('layouts/Rank'));

function Result(): JSX.Element {
    return (
        <App title="Result">
            <div className="result">
                <h3>Result</h3>
                <p>Get up-to-date result of the played matches</p>
                <Rank />
            </div>
        </App>
    );
}

render(<Result />);
