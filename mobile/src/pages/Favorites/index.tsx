import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';


import styles from './style'


const t: Teacher = {
    id: 1,
    subject: 'Química',
    cost: 12,
    name: 'Diego Fernandes',
    avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4',
    whatsapp: '1236547890',
    bio: 'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
}

function Favorites() {

    const [teachers, setTeachers] = useState<Teacher[]>([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(res => {
            if (res) {
                const favorites = JSON.parse(res);
                setTeachers(favorites);
            }
        })
    }

    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
    )

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys Favoritos" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={[{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }, teachers.length === 0 && {
                    flex: 1,
                }]}
            >
                {teachers.length !== 0 ?
                    teachers.map((teacher: Teacher) =>
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={true}
                        />
                    ) :
                    <View style={styles.notFind}>
                        <Text style={styles.notFindText}>
                            Nenhum encontrado  <Feather name='frown' size={18} />
                        </Text>
                    </View>
                }
            </ScrollView>

        </View>
    )
}

export default Favorites;