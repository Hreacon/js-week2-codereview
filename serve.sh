
echo "Opening directory in atom"
atom .

if [ ! -d "./node_modules" ]; then
  npm install
fi

if [ ! -d "bower_componenets" ]; then
  bower install
fi

if [ ! -d "build" ]; then
  gulp build
fi

while true
do
  gulp serve
done
