const enableDebugLog = false

export function logDebug(...args) {
  if ( enableDebugLog ) {
    console.log(' - Debug: ', ...args)
  }
}
