#!/bin/bash
delimiter="----------------------------------------------------"
# find all .eslintignore and .eslintrc.json below target directory
files=$(find -P "$1" -maxdepth 20 -type f -regextype 'posix-extended' -regex '^.*\.eslint(ignore|rc\.json)$')
# list eslint files
echo -e "$delimiter\nThe following ESLint configurations were found in $1\n$delimiter\n$files\n$delimiter"
# confirm
echo -e 'Do you want to update the above configurations ? (Y/n)'
read -r confirm
# update
if [[ $confirm = 'Y' ]]; then
    # loop on files
    for f in $files; do
        # extract source file name
        fname=$(echo "$f" | sed -r 's/^.*\/(.*)$/\1/' -)
        # copy source to target
        cp -pfv "./$fname" "$f"
    done
    # done
    echo -e "$delimiter\nESLint configurations updated."
fi
# success
return 0