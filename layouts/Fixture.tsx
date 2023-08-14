import React from 'react';

export interface FixtureProp {}

import 'styles/layouts/Fixture.scss';

export default function Fixture({}: FixtureProp): JSX.Element {
    return (
        <div className="fixture">
            <table></table>
        </div>
    );
}
