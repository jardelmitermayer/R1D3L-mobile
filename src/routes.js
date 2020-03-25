import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Inicio from './pages/Inicio';
import Sala from './pages/Sala';
import inserirPIN from './pages/inserirPIN';

const Routes = createAppContainer(
    createStackNavigator({
        Inicio:{
            screen: Inicio,
            navigationOptions:{
                title:'Seja bem-vindo'
            },
        },
        Sala:{
            screen: Sala,
            navigationOptions:{
                title:'Crie sua Sala'
            },
        },
        inserirPIN:{
            screen: inserirPIN,
            navigationOptions:{
                title:'PIN'
            },
        },
    },{
        defaultNavigationOptions: {
            headerStyle:{
                backgroundColor: '#ACDF87'
            },
        }
    })

);

export default Routes;