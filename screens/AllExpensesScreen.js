import { Text, View, StyleSheet } from 'react-native';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-12-19'),
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2023-01-05'),
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2023-12-01'),
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2023-02-19'),
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2023-02-18'),
    },
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-12-19'),
    },
    {
        id: 'e7',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2023-01-05'),
    },
    {
        id: 'e8',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2023-05-16'),
    },
    {
        id: 'e9',
        description: 'A book',
        amount: 14.99,
        date: new Date('2023-05-12'),
    },
    {
        id: 'e10  ',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2023-02-18'),
    },
];

export default AllExpensesScreen = () => {
    return <ExpensesOutput expenses={DUMMY_EXPENSES} periodText='Total' />;
};
