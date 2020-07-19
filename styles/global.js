import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#81D3F8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    footer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    footerButton: {
        width: '50%',
        alignSelf: 'center',
        height: 70,
        color: '#fff',
        backgroundColor: '#81D3F8',
        borderColor: '#797979',
        borderWidth: 3,
        borderRightWidth: 1.5,
        borderLeftWidth: 1.5,
        justifyContent: "center",
    },
    titleText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'montserrat-bold',
    },
    button: {
        width: 330,
        alignSelf: 'center',
        height: 70,
        padding: 15,
        color: '#fff',
        backgroundColor: '#81D3F8',
        borderColor: '#797979',
        borderWidth: 3,
        borderRadius: 100 / 5,
        justifyContent: 'center'
    },
    meanuButton: {
        width: '110%',
        alignSelf: 'center',
        height: 70,
        color: '#fff',
        backgroundColor: '#81D3F8',
        borderColor: '#797979',
        borderWidth: 3,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    textBoxText: {
        width: 300,
        height: 35,
        alignSelf: "flex-start",
        borderBottomColor: '#81D3F8',
        borderBottomWidth: 2,
        paddingTop: 10,
    },
    textText: {
        fontFamily: 'montserrat-regular',
        fontSize: 18,
    },
    paragraph: {
        marginVertical: 8,
    },
    helpScreen: {
        flex: 1,
    },
    smallerHelpScreen: {
        flex: 1,
        marginBottom: 130
    },
    helpScreenTextBox: {
        width: '90%',
        alignSelf: 'center',
        //height: 70,
        padding: 5,
        borderColor: '#797979',
        borderWidth: 2,
        marginBottom: 20
    },
    helpScreenTextBoxText: {
        fontFamily: 'montserrat-regular',
        fontSize: 12,
    },
    helpScreenTitleBox: {
        width: 200,
        marginRight: 30,
        height: 30,
        borderColor: '#81D3F8',
        borderWidth: 3,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center'
    },
    helpScreenTitleText: {
        fontFamily: 'montserrat-regular',
        fontSize: 18,
    },
    helpScreenTitleRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 22,
    },
    helpScreenTitleRowNoIcon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 22,
        //justifyContent: 'space-around',
    }
})