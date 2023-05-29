import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';

import CustomColors from './constants/colors.js';
import RecentExpensesScreen from './screens/RecentExpensesScreen.js';
import AllExpensesScreen from './screens/AllExpensesScreen.js';
import ManageExpenseScreen from './screens/ManageExpenseScreen.js';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ExpensesOverviewNavigator = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: CustomColors.primary500,
                },
                headerTintColor: CustomColors.primary50,
                tabBarStyle: {
                    backgroundColor: CustomColors.primary500,
                },
                /* tabBarActiveTintColor: CustomColors.primary500, */
            }}
        >
            <BottomTab.Screen
                name='RecentExpenses'
                component={RecentExpensesScreen}
                options={{
                    title: 'Recent Expenses',
                    tabBarLabel: 'Recent',
                    tabBarActiveTintColor: 'white',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5
                            name='hourglass'
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name='AllExpenses'
                component={AllExpensesScreen}
                options={{
                    title: 'All Expenses',
                    tabBarLabel: 'All',
                    tabBarActiveTintColor: 'white',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5
                            name='calendar-alt'
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='ExpensesOverview'
                        component={ExpensesOverviewNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='ManageExpense'
                        component={ManageExpenseScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
