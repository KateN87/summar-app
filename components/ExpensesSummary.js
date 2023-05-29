import { Text, View, StyleSheet } from 'react-native';

import CustomColors from '../constants/colors';

export default ExpensesSummary = ({ expenses, periodText }) => {
    const sum = expenses.reduce((prev, current) => current.amount + prev, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodText}</Text>
            <Text style={styles.sum}>{sum.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: CustomColors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        /* alignItems: 'center', */
    },
    period: {
        fontSize: 16,
        color: CustomColors.primary400,
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: CustomColors.primary500,
    },
});
