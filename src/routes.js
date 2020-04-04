import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Inicio from './pages/Inicio';
import Home from './pages/Home';
import inserirPIN from './pages/InserirPIN';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CriarSala from './pages/CriarSala';
import Questionario from './pages/Questionario';
import Relatorios from './pages/Relatorios';

const Routes = createAppContainer(
    createStackNavigator({
        Inicio:{
            screen: Inicio,
            navigationOptions:{
                title:'Seja bem-vindo'
            },
        },
        Home:{
            screen: Home,
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
        CriarSala:{
            screen: CriarSala,
            navigationOptions:{
                title:'Criar Sala'
            },
        },
        Relatorios:{
            screen: Relatorios,
            navigationOptions:{
                title:'Relatorios'
            },
        },
        Questionario:{
            screen: Questionario,
            navigationOptions:{
                title:'Questionario'
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