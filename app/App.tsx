import React, { StrictMode, Suspense } from 'react';
import { Helmet } from 'react-helmet';

interface AppProp {
    children: JSX.Element;
    title: string;
}

// Main layout(s)
import Navbar from './Navbar';
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

            <header className="header">
                <Navbar />
            </header>

            <div id="body">
                <Suspense fallback={<Fallback />}>{children}</Suspense>
            </div>

            <footer className="footer">
                <Footer />
            </footer>
        </StrictMode>
    );
}
