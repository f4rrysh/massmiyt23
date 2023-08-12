import React from 'react';
import { createRoot } from 'react-dom/client';

function Home(): JSX.Element {
    return <div>Hello, World!</div>;
}

createRoot(document.body).render(<Home />);
