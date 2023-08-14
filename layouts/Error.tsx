import React from 'react';

export interface ErrorProp {
    name: string;
    message: string;
}

import 'styles/layouts/Error.scss';

export default function Error({ name, message }: ErrorProp): JSX.Element {
    return (
        <div className="error">
            <div className="container">
                <p>{name}</p>
                <p>{message}</p>
            </div>
        </div>
    );
}
