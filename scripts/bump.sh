#!/usr/bin/env bash
set -e
# usage: ./scripts/bump.sh 1.7.2

# The following line ensure we run from the project root
PROJECT_ROOT=`git rev-parse --show-toplevel`
cd ${PROJECT_ROOT}

if [ $# -lt 1 ]; then
  echo "help: ./scripts/bump.sh <VERSION>" && exit 1
fi

FROM=`grep "\"version\"" ./package.json | egrep -o "([0-9\.]+)"`
TO=${1}

echo $FROM

package_json_list=$(find . -name "package.json" -not -path "./node_modules/*")
echo "bump version from ${FROM} to ${TO}..."
for package_json in $package_json_list
do
    if [ "$(uname)" == "Darwin" ];then  # Mac
        sed -i "" "s/$FROM/$TO/g" ${package_json}
    else
         sed -i "s/$FROM/$TO/g" ${package_json} # Linux
    fi
done

