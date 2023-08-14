import React from 'react';
import { render } from 'utils/render';

// App
import App from 'app/App';

// Styling
import 'styles/pages/Home.scss';

function Home(): JSX.Element {
    return (
        <App title="Home">
            <div className="home">
                <div className="thumbnail">
                    <img src="" />
                </div>

                <div className="result"></div>

                <div className="table"></div>
            </div>
        </App>
    );
}

render(<Home />);
