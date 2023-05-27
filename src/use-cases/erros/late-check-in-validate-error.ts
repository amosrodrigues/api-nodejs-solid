export class LateCheckInValidateError extends Error {
  constructor() {
    super('The check-in can only be vlidated until 20 minutes of its creation.')
  }
}
