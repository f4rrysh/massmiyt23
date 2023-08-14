import React from 'react';

export interface RankProp {}

import 'styles/layouts/Rank.scss';

export default function Rank({}: RankProp): JSX.Element {
    return (
        <div className="rank">
            <table></table>
        </div>
    );
}
