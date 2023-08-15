import React, { StrictMode, Suspense } from 'react';
import { Helmet } from 'react-helmet';

interface AppProp {
    children: JSX.Element;
    title: string;
}

// Main layout(s)
import NavBar from './NavBar';
import Fallback from './Fallback';
import Footer from './Footer';

// Load the style(s)
import 'styles/modules.scss';
import 'styles/fonts.scss';

// NOTE: Must be load the very last
import 'styles/main.scss';

export default function App({ children, title }: AppProp): JSX.Element {
    return (
        <StrictMode>
            <Helmet>
                <title>{`MASSMIYT23 | ${title}`}</title>
            </Helmet>

            <header className="container">
                <NavBar />
            </header>

            <div className="container">
                <div className="body">
                    <Suspense fallback={<Fallback />}>{children}</Suspense>
                </div>
            </div>

            <footer className="container">
                <Footer />
            </footer>
        </StrictMode>
    );
}
