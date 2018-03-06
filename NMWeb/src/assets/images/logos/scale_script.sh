
base_size=35;
echo "export const logosScaleFactors = {"
for f in *.svg
do
width=`convert $f -print "%w" /dev/null`; 
height=`convert $f -print "%h" /dev/null`;
scaleFactor=`bc <<< "scale=2; $width/$height"`
width=`bc <<< "scale=2; $base_size"`
height=`bc <<< "scale=2; $base_size*$scaleFactor"`
echo "\"$f\":{";
echo -n "\"width\":"; echo -n $width; echo "," 
echo -n "\"height\":"; echo $height; 
echo "},"
done
echo }
