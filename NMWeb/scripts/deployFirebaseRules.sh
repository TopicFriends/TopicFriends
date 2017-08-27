

set -x

scriptDir="`dirname $0`"
$scriptDir/compileFirebaseRules.sh

firebase deploy --only database

