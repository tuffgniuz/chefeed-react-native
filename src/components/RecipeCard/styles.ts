import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        minHeight: 300,
        overflow: 'hidden'
    },
    description: {
        position: 'absolute',
        top: 180,
        left: 25,
        right: 25,
        maxHeight: 100,
        borderRadius: 10,
        paddingVertical: 15, 
        paddingHorizontal: 15,
        backgroundColor: '#fafafa',
        opacity: .8
    },
    title:  {
        fontSize: 16,
        textAlign: 'right',
    },
    cookingTimeBox: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    subtitle: {
        fontSize: 12,
        textAlign: 'right',
        marginLeft: 10,
    }
})
