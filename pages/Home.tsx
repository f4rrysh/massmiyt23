import React, { lazy } from 'react';
import { render } from 'utils/render';

// App
import App from 'app/App';

// Layout
const Fixture = lazy(() => import('layouts/Fixture'));
const Rank = lazy(() => import('layouts/Rank'));
const Result = lazy(() => import('layouts/Result'));

// Styling
import 'styles/pages/Home.scss';

function Home(): JSX.Element {
    return (
        <App title="Home">
            <div className="home">
                <div className="container">
                    <img className="thumbnail" src="" />
                </div>

                <div className="container">
                    <Fixture />
                </div>

                <div className="container">
                    <Rank />
                </div>

                <div className="container">
                    <Result />
                </div>
            </div>
        </App>
    );
}

render(<Home />);
