import { useEvent } from 'hooks/event';
import React from 'react';
import Table from 'react-bootstrap/Table';

export interface RankProp {}

interface Rank {
    school: string;
    gold: number;
    silver: number;
    bronze: number;
}

import 'styles/layouts/Rank.scss';

export default function Rank({}: RankProp): JSX.Element {
    const { data, error } = useEvent();
    console.log(data);

    return (
        <div className="rank">
            <Table responsive>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>School</th>
                        <th>Gold</th>
                        <th>Silver</th>
                        <th>Bronze</th>
                    </tr>
                </thead>
            </Table>
        </div>
    );
}
