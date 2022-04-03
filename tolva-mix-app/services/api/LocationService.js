import BaseService from '@/services/BaseService'

export default class LocationService extends BaseService {
  constructor({ DB }) {
    super(DB.locations);
  }
}
