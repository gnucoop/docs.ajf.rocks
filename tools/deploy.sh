#!/bin/bash

set -eu -o pipefail

declare -A PROJECT_ID

# Firebase project ids
PROJECT_ID["stable", "dev"]="ajf-docs-dev"
PROJECT_ID["stable", "prod"]="docs-ajf-rocks"
PROJECT_ID["stable", "beta"]="beta-docs-ajf-rocks"

PROJECT_ID["v10", "prod"]="v10-docs-ajf-rocks"

PROJECT_ID["next", "prod"]="beta-docs-ajf-rocks"

version=${1:-stable}
mode=${2:-dev}
projectId=${PROJECT_ID[$version, $mode]}

echo ""
echo "NOTE: Make sure to refresh the docs-content to match the new version of docs."
echo "      You can pull the docs-content for the new version by updating the"
echo "      \"@ajf/ajf-examples\" in the 'package.json' file."
echo ""

read -rp "Press <ENTER> to continue.."

yarn prod-build
yarn firebase use $projectId
yarn firebase deploy
