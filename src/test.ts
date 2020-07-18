/*

Combine all the data for each day

Then for each day we want thi

*/

export interface Day {
  data: {
    dailyMetricEntries: [];
  };
}

export interface State {
  daysById: {
    [K: string]: Day | undefined;
  };
  days: string[];
  dailyMetricEntriesById: {
    [K: string]: {};
  };
}
