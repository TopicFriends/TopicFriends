base_size=1
echo "export const logosScaleFactors = {"
for f in ./images/logos/*.svg
do
width=`convert $f -print "%w" /dev/null`; 
height=`convert $f -print "%h" /dev/null`;
if [ $width -gt $height ] 
 then
	scale_factor=`bc <<< "scale=2; $height/$width"`
	width=`bc <<< "scale=2; $base_size*$scale_factor"`
	height=`bc <<< "scale=2; $base_size"`
 else
	scale_factor=`bc <<< "scale=2; $width/$height"`
	width=`bc <<< "scale=2; $base_size"`
	height=`bc <<< "scale=2; $base_size*$scale_factor"`
fi
echo "\"$f\":{";
echo -n "\"width\":"; echo -n $width; echo "," 
echo -n "\"height\":"; echo $height; 
echo "},"
done
echo }
