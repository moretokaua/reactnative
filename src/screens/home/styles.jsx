import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#ff0000',
        paddingTop: 50
    },

    header : {
        backgroundColor: '#000',
        height: 190
    },

    photo : {
        height: 85,
        borderRadius: 70,
        width: 85,
        marginTop: 55,
        marginBottom: 45,
        marginLeft: 20
    },

    input: {
        height: 39,
        backgroundColor: '#ffffff', 
        borderRadius: 45,
        color: '#000000', 
        padding: 12,
        fontSize: 16,
        marginTop: -100,
        marginRight: 77,
        marginLeft: 120,
        fontSize: 15
    },

    btn: {
        width: 39,
        height: 39,
        borderRadius: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0000', 
        marginLeft: 360,
        marginTop: -38,

    }
})
