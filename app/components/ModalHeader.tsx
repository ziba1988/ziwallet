import * as React from 'react';
import { Pressable, View } from 'react-native';
import { useTypedNavigation } from '../utils/useTypedNavigation';
import { Ionicons } from '@expo/vector-icons';
import { useAppConfig } from '../utils/AppConfigContext';

export function ModalHeader() {
    const { Theme } = useAppConfig();
    const navigation = useTypedNavigation();
    return (
        <View style={{ height: 64, alignSelf: 'stretch', marginHorizontal: 8, alignItems: 'center', flexDirection: 'row' }}>
            <Pressable style={{ height: 40, width: 40, backgroundColor: Theme.textSecondary, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-down-outline" size={26} color="white" />
            </Pressable>
        </View>
    )
}