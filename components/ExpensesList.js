import { FlatList, View, Text } from 'react-native';

export default ExpensesList = ({ expenses }) => {
    const renderExpenseItem = ({ item }) => {
        return (
            <View>
                <Text>{item.description}</Text>
                <Text>{item.amount}</Text>
            </View>
        );
    };
    return (
        <FlatList
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id}
        />
    );
};
