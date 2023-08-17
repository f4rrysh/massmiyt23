import React from 'react';

export interface FallbackProp {}

export default function Fallback({}: FallbackProp): JSX.Element {
    return (
        <div className="fallback">
            <div className="loading"></div>
        </div>
    );
}
