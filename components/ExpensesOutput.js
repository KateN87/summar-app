import { View } from 'react-native';

import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
export default ExpensesOutput = ({ expenses, periodText }) => {
    return (
        <View>
            <ExpensesSummary periodText={periodText} expenses={expenses} />
            <ExpensesList expenses={expenses} />
        </View>
    );
};
