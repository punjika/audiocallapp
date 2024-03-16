import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';

interface VoiceCallPageProps {
    navigation: any; // Adjust the type of navigation according to your navigation setup
}

const VoiceCallPage: React.FC<VoiceCallPageProps> = (props) => {
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={1663266166}
                appSign={"ea93135e6eaaf8a9a904cd181dbf5438cf321d7165da6372ef6af1cd98caf2a3"}
                userID={121212} // userID can be something like a phone number or the user id on your own user system. 
                userName={"user_12345"}
                callID={"group123"} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => {
                        // props.navigation.navigate('HomePage') 
                    },
                    onHangUp: () => { 
                        // props.navigation.navigate('HomePage') 
                    },
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});

export default VoiceCallPage;
