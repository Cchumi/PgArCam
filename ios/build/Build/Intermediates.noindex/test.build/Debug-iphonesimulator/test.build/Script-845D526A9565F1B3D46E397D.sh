#!/bin/sh
DEST=$CONFIGURATION_BUILD_DIR/$UNLOCALIZED_RESOURCES_FOLDER_PATH
endpointfile="ngrokendpoint.txt"
if [[ -e "$SRCROOT/$endpointfile" ]]; then
echo "Ngrok endpoint file found, copying over..."
cp "$SRCROOT/$endpointfile" "$DEST/$endpointfile"
break;
fi
