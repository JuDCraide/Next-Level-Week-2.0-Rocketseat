import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7',
    },
    searchForm: {
        marginTop: -8,
        marginBottom: 16,
    },
    label: {
        color: '#D4C2FF',
        fontFamily: 'Poppins_400Regular'

    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputBlockDia: {
        width: '55%',
    },
    inputBlockHorario: {
        width: '42%',
    },
    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },
    submitButton: {
        backgroundColor: '#04D361',
        height: 54,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },
    teacherList: {
        marginTop: -40,
        flex: 1,
    },
    notFind: {
        flexGrow: 1,
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