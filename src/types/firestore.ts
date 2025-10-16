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
}

/**
 * Represents a document in the 'Teams' subcollection under a 'Pool' document.
 */
export interface Team {
  id: string;
  name: string;
  iconUrl: string;
}

export type MatchStatus = "scheduled" | "in-progress" | "finished" | "scored";

/**
 * Represents a document in the 'Matches' subcollection under a 'Pool' document.
 */
export interface Match {
  id: string;
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
  id: string; // Corresponds to the participant's UID
  homeGoalsBet: number;
  awayGoalsBet: number;
  pointsAwarded?: number;
}

/**
 * Represents a document in the 'Scoreboard' subcollection under a 'Pool' document.
 */
export interface ScoreboardEntry {
  id: string; // Corresponds to the participant's UID
  displayName: string;
  totalPoints: number;
}
