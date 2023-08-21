import { useRank } from 'hooks/rank';
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
    const { data, error } = useRank();
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
                        <th>Point</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((rank: any, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{rank.school}</td>
                            <td>{rank.gold || 0}</td>
                            <td>{rank.silver || 0}</td>
                            <td>{rank.bronze || 0}</td>
                            <td>{rank.point || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
