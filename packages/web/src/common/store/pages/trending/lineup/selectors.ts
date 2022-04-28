import { LineupStateTrack } from 'common/models/Lineup'
import TimeRange from 'common/models/TimeRange'
import { AppState } from 'store/types'

export const getTrendingEntries = (timeRange: TimeRange) => (
  state: AppState
): LineupStateTrack<{ id: number }>[] => {
  if (timeRange === TimeRange.WEEK) {
    return state.pages.trending.trendingWeek.entries
  } else if (timeRange === TimeRange.MONTH) {
    return state.pages.trending.trendingMonth.entries
  } else {
    return state.pages.trending.trendingAllTime.entries
  }
}
