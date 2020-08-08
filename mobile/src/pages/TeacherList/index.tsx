import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './style'
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {

    const [isFilterVisible, setIsFilterVisible] = useState(true);

    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [favoritesIds, setFavoritesIds] = useState<number[]>([]);

    const [subject, setSubject] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers() {
        loadFavorites();

        const res = await api.get('classes', {
            params: {
                subject,
                week_day: weekDay,
                time
            }
        })

        setIsFilterVisible(false);
        setTeachers(res.data);
    }

    function handleToggleFiltersVisible() {
        setIsFilterVisible(!isFilterVisible)
    }

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(res => {
            if (res) {
                const favorites = JSON.parse(res);
                const favTeachersId = favorites.map((teacher: Teacher) => teacher.id);
                setFavoritesIds(favTeachersId);
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
            <PageHeader
                title="Proffys Disponíveis"
                headerRigth={(
                    <BorderlessButton onPress={handleToggleFiltersVisible} >
                        <Feather name='filter' size={24} color='#FFF' />
                    </BorderlessButton>
                )}
            >
                {isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual a matéria?"
                            placeholderTextColor="#C1BCCC"
                            value={subject}
                            onChangeText={text => setSubject(text)}
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlockDia}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#C1BCCC"
                                    value={weekDay}
                                    onChangeText={text => setWeekDay(text)}
                                />
                            </View>
                            <View style={styles.inputBlockHorario}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual a hora?"
                                    placeholderTextColor="#C1BCCC"
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                />
                            </View>
                        </View>

                        <RectButton style={styles.submitButton} onPress={searchTeachers}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>

                    </View>
                )}
            </PageHeader>

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
                            favorited={favoritesIds.includes(teacher.id)}
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

export default TeacherList;