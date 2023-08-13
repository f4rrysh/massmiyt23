import React, { StrictMode, Suspense } from 'react';
import { Helmet } from 'react-helmet';

interface AppProp {
    children: JSX.Element;
    title: string;
}

// TODO: Finish the Fallback component
function Fallback(): null {
    return null;
}

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

            <div id="header"></div>

            <div id="body">
                <Suspense fallback={<Fallback />}>{children}</Suspense>
            </div>

            <div id="footer"></div>
        </StrictMode>
    );
}
