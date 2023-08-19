import React, { lazy } from 'react';
import { render } from 'utils/render';

// App
import App from 'app/App';

const EventCard = lazy(() => import('layouts/EventCard'));

function Event(): JSX.Element {
    return (
        <App title="Event">
            <div className="event">
                <EventCard />
            </div>
        </App>
    );
}

render(<Event />);
