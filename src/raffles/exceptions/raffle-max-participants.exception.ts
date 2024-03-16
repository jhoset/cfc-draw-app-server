import { RaffleException } from './raffle.exception';
import { RafflesErrorCodes } from '../constants/raffle-error.constan';

export class RaffleMaxParticipantsException extends RaffleException {
  constructor() {
    super(
      RafflesErrorCodes.RaffleMaxParticipants.code,
      RafflesErrorCodes.RaffleMaxParticipants.code,
    );
  }
}
