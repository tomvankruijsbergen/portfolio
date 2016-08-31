#!/usr/bin/env bash

# This command is used to manage docker containers.

# http://unix.stackexchange.com/questions/106776/how-can-i-print-only-certain-commands-from-a-bash-script-as-they-are-run
run() {
    echo "==== $@"
    eval "$@"
}

name="tomportfolio"
imageName="tomportfolio"

# Todo: read this from the same config.yaml file.
port="3000"

direction=$1

if [[ $direction != "up" ]] && [[ $direction != "down" ]]
  then
    echo "ERROR: Run this command with either 'up' or 'down' as an argument."
    exit 1
fi

if [ $direction == "up" ]
    then
        run docker run -d --name $name -p $port:$port $imageName
fi

if [ $direction == "down" ]
    then
        run docker stop $name
        run docker rm $(docker ps -q -f status=exited)
fi
