import { UPDATE_DATETIME } from './actions'

export function updateDateTime(datetime) {
  return { type: UPDATE_DATETIME, datetime }
}