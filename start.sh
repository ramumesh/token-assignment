echo "************************ Application Building Started *************************"
echo ""
echo "************************ UI Building Started **********************************"
cd frontend && yarn install --no-lockfile
echo "...Building frontend"
yarn build
echo "************************ UI Building Completed ********************************"
echo ""
echo "*********************** Backend Building Started ******************************"
cd ../validator && yarn install --no-lockfile
echo "*********************** Backend Building Completed *****************************"
echo ""
echo "*********************** Application Building Completed **************************"
echo ""
echo ""
echo "*********************** Staring Application *************************************"
export PORT=8080 && node ./bin/www