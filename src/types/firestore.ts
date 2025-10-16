import { Timestamp } from "firebase/firestore";

export interface ScoringRules {
  pointsForCorrectGoalsScoredByOneTeam: number;
  pointsForCorrectGoalDifference: number;
  pointsForCorrectWinner: number;
  bonusForExactScore: number;
}

export interface Pool {
  id: string;
  name: string;
  description: string;
  logo?: string;
  timezone: string;
  betLockTime: Timestamp;
  scoringRules: ScoringRules;
}

/**
 * Represents a document in the 'Participants' subcollection under a 'Pool' document.
 */
export interface Participant {
  id: string; // Corresponds to Firebase Auth UID
  displayName: string;
  isAdmin: boolean;
  hasPaid: boolean;
  timezone: string;
  totalPoints?: number;
}

/**
 * Represents a document in the 'Teams' subcollection under a 'Pool' document.
 */
export interface Team {
  id: string;
  name: string;
  iconUrl: string;
}

/**
 * Represents a document in the 'Groups' subcollection under a 'Pool' document.
 */
export interface Group {
  id: string;
  name: string; // e.g., "Group A"
  teamIds: string[];
}

export type MatchStatus = "scheduled" | "in-progress" | "finished" | "scored";

/**
 * Represents a document in the 'Matches' subcollection under a 'Pool' document.
 */
export interface Match {
  id: string;
  groupId?: string; // Optional: for group stage matches
  homeTeamId: string;
  awayTeamId: string;
  matchStartTime: Timestamp;
  visibleTime: Timestamp;
  betLockTimeOverride?: Timestamp;
  homeGoals?: number;
  awayGoals?: number;
  status: MatchStatus;
}

/**
 * Represents a document in the 'Bets' subcollection under a 'Match' document.
 */
export interface Bet {
  participantId: string;
  matchId: string;
  homeGoalsBet: number;
  awayGoalsBet: number;
  pointsAwarded?: number;
}