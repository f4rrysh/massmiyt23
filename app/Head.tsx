import React from 'react';
import { Helmet } from 'react-helmet';

export interface HeaderProp {
    title: string;
}

export default function Header({ title }: HeaderProp): JSX.Element {
    return (
        <Helmet>
            <title>{`MASSMIYT | ${title}`}</title>
        </Helmet>
    );
}
