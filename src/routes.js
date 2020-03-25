import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Inicio from './pages/Inicio';
import Sala from './pages/Sala';
import inserirPIN from './pages/InserirPIN';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

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
        Login:{
            screen: Login,
            navigationOptions:{
                title:'Login'
            },
        },
        Cadastro:{
            screen: Cadastro,
            navigationOptions:{
                title:'Cadastro'
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