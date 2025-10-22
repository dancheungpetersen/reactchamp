import React from 'react';
import { Match } from '@/types/firestore';

interface MatchTemplateProps {
  matchId: string;
  match: Match | null;
  children: React.ReactNode;
}

const MatchTemplate: React.FC<MatchTemplateProps> = ({ matchId, match, children }) => {
    return (
        <div className="container mx-auto p-4">
            <header className="mb-4">
                <h1 className="text-2xl font-bold">Match: <span className="font-mono bg-gray-200 p-1 rounded">{matchId}</span></h1>
            </header>
            <main className="flex justify-center items-center">
                <div className="flex justify-center items-center text-4xl font-bold" 
                style={{ 
                    backgroundImage: "url('/img/field.jpg')", 
                    backgroundPosition: 'center', 
                    backgroundSize: 'contain', 
                    backgroundRepeat: 'no-repeat',
                    minHeight: '300px',
                    minWidth: '300px',
                    padding: '0 5%'
                }}>
                    <div className="goals-team-away" style={{ width: '50%', textAlign: 'center' }}>
                        {match?.awayGoals ?? 0}
                    </div>
                    <div className="goals-team-home" style={{ width: '50%', textAlign: 'center' }}>
                        {match?.homeGoals ?? 0}
                    </div>
                </div>
                <div className="text-lg">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default MatchTemplate;