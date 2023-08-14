import React from 'react';

export interface ResultProp {}

export default function Result({}: ResultProp): JSX.Element {
    return (
        <div className="result">
            <table></table>
        </div>
    );
}
