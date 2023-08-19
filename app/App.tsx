import React, { StrictMode, Suspense } from 'react';

export interface AppProp {
    children: JSX.Element;
    title: string;
}

// Main layout(s)
import Head from './Head'
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
            <Head title={title} />
            <NavBar />

            <div className="body">
                <Suspense fallback={<Fallback />}>{children}</Suspense>
            </div>

            <Footer />
        </StrictMode>
    );
}
