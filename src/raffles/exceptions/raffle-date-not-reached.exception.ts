import { RaffleException } from './raffle.exception';
import { RafflesErrorCodes } from '../constants/raffle-error.constan';
export class RaffleDateNotReachedException extends RaffleException {
  constructor() {
    super(
      RafflesErrorCodes.RaffleDateNotReached.code,
      RafflesErrorCodes.RaffleDateNotReached.code,
    );
  }
}
