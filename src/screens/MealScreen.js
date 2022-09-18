import React from 'react';
import { Text, Layout } from 'react-native-rapi-ui';
import { ProgressBar } from 'react-native-paper';

const MealScreen = () => (
    <Layout>
        <Text>Soy la Screen de Meals</Text>
        <ProgressBar progress={0.3} color='blue' />
    </Layout>
)
export default MealScreen;