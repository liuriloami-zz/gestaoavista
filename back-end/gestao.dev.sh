#!/bin/bash
echo "Starting Redis"
redis-server
wait 5
echo "Gestao: Starting pm2 cluster"
export NODE_ENV=development
wait 5
pm2 start app.js -n "Gestao" -i 0
wait 5
pm2 reload all
wait 5
pm2 scale Gestao 2
wait 5
pm2 link omsfqznzpmm0w6o f54bwyp4p3k0m03 app.js
wait 5
echo "Gestao: pm2 started successful"
