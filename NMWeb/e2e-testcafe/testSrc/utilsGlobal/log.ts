const enableDebugLog = true

export function logDebug(...args) {
  if ( enableDebugLog ) {
    console.log(' - Debug: ', ...args)
  }
}
