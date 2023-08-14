import React, { lazy } from 'react';
import { useFetch } from 'react-async';
import { render } from 'utils/render';

// App
import App from 'app/App';

// Layout(s)
const Error = lazy(() => import('layouts/Error'));
const Image = lazy(() => import('layouts/Image'));

// Styling
import 'styles/pages/Gallery.scss';

function Gallery(): JSX.Element {
    const url = new URL('/api/image', window.origin);
    const { data, error } = useFetch<{
        image: { href: string; alt: string }[];
    }>(url.href, {
        headers: { accept: 'application/json' }
    });

    if (error) {
        return (
            <App title="Gallery">
                <div className="gallery">
                    <Error name={error.name} message={error.message} />
                </div>
            </App>
        );
    }

    return (
        <App title="Gallery">
            <div className="gallery">
                <div className="container">
                    {data?.image.map((image) => (
                        <Image src={image.href} alt={image.alt} />
                    ))}
                </div>
            </div>
        </App>
    );
}

render(<Gallery />);
