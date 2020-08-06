import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './style'

function Favorites() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys Favoritos"/>
        </View>
    )
}

export default Favorites;