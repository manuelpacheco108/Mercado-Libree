
import React from 'react';
import { Button, Linking } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

const ButtonCustomTabs = ({ onPay }) => {
    const openUrl = async (url) => {
        if (await InAppBrowser.isAvailable()) {
            InAppBrowser.open(url, {
                showTitle: true,
                toolbarColor: '#6200EE',
                enableUrlBarHiding: true,
                enableDefaultShare: true,
                forceCloseOnRedirection: false,
                animations: {
                    startEnter: 'slide_in_right',
                    startExit: 'slide_out_left',
                    endEnter: 'slide_in_left',
                    endExit: 'slide_out_right',
                },
            });
        } else {
            Linking.openURL(url);
        }
    };

    return <Button title="Pagar" onPress={onPay} />;
};

export default ButtonCustomTabs;
