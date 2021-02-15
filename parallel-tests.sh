#!/bin/bash
# rm -rf coverage
# rm -rf coverage-all

# for dir in projects/*; do
# echo "$dir"
#   if [["$dir" != *-e2e]]
#   then
    # prefix="projects/";
    # prefix=""
    # project=${dir#$prefix}; #Remove prefix
    # echo "$project"
    # echo "$dir"
    # ng test --watch=false  --project=$project &
#   fi
# done

ng test --watch false --project=administration --browsers ChromeHeadless & ng test --watch false --project=gatling --browsers ChromeHeadless & ng test --watch false --project=tools --browsers ChromeHeadless & ng test --watch false --project=vendors --browsers ChromeHeadless
# ng test --watch false --project=administration & ng test --watch false --project=gatling & ng test --watch false --project=tools & ng test --watch false --project=vendors

wait  # Wait for all tasks to complete

# ./node_modules/istanbul/lib/cli.js report --dir ./coverage-all/ html

# google-chrome ./coverage-all/index.html &