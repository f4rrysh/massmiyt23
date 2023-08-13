import React from 'react';
import { createRoot } from 'react-dom/client';

// App
import App from 'app/App';

function Home(): JSX.Element {
    return (
        <App title="Home">
            <div>Hello, World!</div>
        </App>
    );
}

createRoot(document.body).render(<Home />);
