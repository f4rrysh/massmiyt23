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

    return (
        <div className="rank">
            <Table responsive>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>School</th>
                        <th>Point</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        ?.sort((a, b) => b.point - a.point)
                        .map((rank: any, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{rank.school}</td>
                                <td>{rank.point}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    );
}

// kami tidak diberi hak sebagai pekerja
// kami akan membuat pemberontakan
// kami mahu gaji sebanyak rm200 seorang
// ini adalah penderaan tempat kerja
