"use client";
import MatchTemplate from "@/components/templates/Match/Match.Template";
import { Match } from "@/types/firestore";
import React, { use, useEffect, useState } from "react";

interface MatchPageProps {
  params: {
    matchId: string;
  };
}

export default function MatchPage({ params }: MatchPageProps) {
  const { matchId } = use(params);
  const [matchData, setMatchData] = useState<Match | null>(null);

  return (
    <MatchTemplate match={matchData}>
      <div>
        <p>Match ID: {matchId}</p>
        <p className="text-lg">This is the main content area of the match.</p>
      </div>
    </MatchTemplate>
  );
}
