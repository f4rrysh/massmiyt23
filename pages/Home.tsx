import React, { lazy } from 'react';
import { render } from 'utils/render';

// App
import App from 'app/App';

// Layout
const Fixture = lazy(() => import('layouts/Fixture'));
const Rank = lazy(() => import('layouts/Rank'));

import Image from 'react-bootstrap/Image';

// import sekolah from 'images/sekolah.jpg';

function Home(): JSX.Element {
    return (
        <App title="Home">
            <div className="home">
                <Image src="sekolah.jpg" fluid />
                <Fixture />
                <br />

                <h3>Ranking</h3>
                <Rank />

                <h3>Recent Results</h3>
            </div>
        </App>
    );
}

render(<Home />);
