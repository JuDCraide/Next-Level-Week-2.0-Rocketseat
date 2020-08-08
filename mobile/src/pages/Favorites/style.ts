import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7',
    },
    teacherList: {
        flex: 1,
        marginTop: -40,
    },
    notFind: {
        flexGrow:1,
        top: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notFindText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        lineHeight: 24,
        color: '#6A6180',
    },
});

export default styles;