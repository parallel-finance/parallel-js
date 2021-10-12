for f in `ls packages`; do
  cp "packages/$f/package.json" "build/$f/package.json" 
done
