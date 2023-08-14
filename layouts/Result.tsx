import React from 'react';

export interface ResultProp {}

// Styling
import 'styles/layouts/Result.scss';

export default function Result({}: ResultProp): JSX.Element {
    return (
        <div className="result">
            <table></table>
        </div>
    );
}
