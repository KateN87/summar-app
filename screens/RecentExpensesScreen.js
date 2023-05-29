import { Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';

export default RecentExpensesScreen = () => {
    return <ExpensesOutput expenses={[]} periodText='Last 7 days' />;
};
