import { Timestamp } from "firebase/firestore";

export interface ScoringRules {
  pointsForCorrectGoalsScoredByOneTeam: number;
  pointsForCorrectGoalDifference: number;
  pointsForCorrectWinner: number;
  bonusForExactScore: number;
}

/**
 * All fields are editable by pool owners, except id
 */
export interface PoolSettings {
  name: string; 
  description: string;
  logo?: string; 
  timezone: string;
  betLockTime: Timestamp;
  scoringRules: ScoringRules;
  ownerIds: string[]; // Array of Firebase Auth UIDs
}

/**
 * Represents a document in the 'Participants' subcollection under a 'Pool' document.
 */
export interface Participant {
  UserId: string; // Corresponds to Firebase Auth UID, not editable
  displayName: string; // editable by user with UserId
  isAdmin: boolean; // editable by owners
  hasPaid: boolean; // editable by owners
  timezone: string; // editable by user with UserId
  totalPoints?: number; // not editable, calculated field
}

/**
 * Represents a document in the 'Teams' subcollection under a 'Pool' document.
 * only editable by pool owners  
*/
export interface Team {
  id: string; 
  name: string;
  iconUrl: string;
}

/**
 * Represents a document in the 'Groups' subcollection under a 'Pool' document.
 * only editable by pool owners 
*/
export interface Group {
  id: string;
  name: string; // e.g., "Group A"
  teamIds: string[]; 
}

export type MatchStatus = "scheduled" | "in-progress" | "finished" | "scored";

/**
 * Represents a document in the 'Matches' subcollection under a 'Pool' document.
 * Only editable by pool owners
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
 * Fields cannot be updated after betLockedTime
 */
export interface Bet {
  participantId: string; // set when bet is created, not editable
  matchId: string; // set when bet is created, not editable
  homeGoalsBet: number; 
  awayGoalsBet: number;
  betLockedTime: Timestamp; // set when bet is created, not editable
  pointsAwarded?: number; // calculated after match is finished
}