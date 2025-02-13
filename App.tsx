import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MeetingOld from './app/screens/Other/MeetingOld';
import Dashboard from './app/screens/Old/Dashboard';
import Dashboard2 from './app/screens/Old/Dashboard2';
import Dashboard3 from './app/screens/Old/Dashboard3';
import Dashboard4 from './app/screens/Old/Dashboard4';
import Dashboard5 from './app/screens/Old/Dashboard5';
import Dashboard6 from './app/screens/Old/Dashboard6';
import DashboardYoung from './app/screens/Other/DashboardYoung';
import BeforeRegister from './app/screens/All/BeforeRegister';
import Register from "./app/screens/Old/Register"
import MeetingYoung from "./app/screens/Other/MeetingYoung"
import ListYoung from './app/screens/Other/ListYoung';
import ListOld from './app/screens/Other/ListOld';
import ListSelfYoung from './app/screens/Other/ListSelfYoung';
import ListSelfOld from './app/screens/Other/ListSelfOld';
import EditAnnonceYoung from './app/screens/Other/EditAnnonceYoung';
import EditAnnonceOld from './app/screens/Other/EditAnnonceOld';
import EMailSent from './app/screens/Other/EMailSent';
import ForgotPassword from './app/screens/Other/ForgotPassword';
import ChatPage from './app/screens/Old/ChatPage';
import Calendar from './app/screens/Other/Calendar';
import InitialLoading from './app/screens/All/InitialLoading';
import Login from './app/screens/All/Login';
import FirstPage from './app/screens/All/FirstPage';
import AccountCreated from './app/screens/Old/AccountCreated';
import AddInfos from './app/screens/Old/AddInfos';
import AddInfos2 from './app/screens/Old/AddInfos2';
import MyRequest from './app/screens/Old/MyRequest';
import PersonDetails from './app/screens/Old/PersonDetails';
import ProfileComplete from './app/screens/Old/ProfileComplete';
import MeetingDetails from './app/screens/Old/MeetingDetails';
import DeleteVisit from './app/screens/Old/DeleteVisit';
import RegisterHelper from './app/screens/Helper/Register';
import BeforeRegisterRelative from './app/screens/Helper/BeforeRegisterRelative';
import RegisterRelative from './app/screens/Helper/RegisterRelative';
import AddInfosRelative from './app/screens/Helper/AddInfosRelative';
import AddInfosRealtive2 from './app/screens/Helper/AddInfosRelative2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="InitialLoading" component={InitialLoading} options={{ headerShown: false }} />
        <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }} />
        <Stack.Screen name="AccountCreated" component={AccountCreated} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="BeforeRegister" component={BeforeRegister} options={{ title: '' }}/>
        <Stack.Screen name="BeforeRegisterRelative" component={BeforeRegisterRelative} options={{ title: '' }}/>
        <Stack.Screen name="Register" component={Register} options={{ title: 'Créer un nouveau compte', headerBackTitleVisible: false }} />
        <Stack.Screen name="RegisterHelper" component={RegisterHelper} options={{ title: 'Créer un nouveau compte' }} />
        <Stack.Screen name="RegisterRelative" component={RegisterRelative} options={{ title: 'Votre proche' }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
        <Stack.Screen name="MyRequest" component={MyRequest} options={{ title: 'Ma demande' , headerBackTitleVisible: false }}/>
        <Stack.Screen 
          name="Dashboard2" 
          component={Dashboard2} 
          options={{ 
            headerBackTitleVisible: false, 
            title: 'Quand souhaitez-vous prendre\nvotre première visite ?', 
            headerTitleStyle: {
              textAlign: 'center', // Alignement central
              flex: 1, // Pour s'assurer que le titre peut occuper toute la largeur de l'écran
              flexWrap: 'wrap' // Permettre le retour à la ligne
            }
          }}
        />       
        <Stack.Screen name="Dashboard3" component={Dashboard3}
          options={{ title: 'Quel type de demande\nsouhaitez-vous faire ?'
          , headerBackTitleVisible: false 
            }}/>
        <Stack.Screen name="Dashboard4" component={Dashboard4} options={{ title: 'À quel moment ?', headerBackTitleVisible: false }}/>
        <Stack.Screen name="Dashboard5" component={Dashboard5} options={{ title: 'Quelle durée ?', headerBackTitleVisible: false  }}/>
        <Stack.Screen name="Dashboard6" component={Dashboard6} options={{ title: '', headerBackTitleVisible: false  }}/>
        <Stack.Screen name="PersonDetails" component={PersonDetails} options={{ title: 'Détails de la personne' , headerBackTitleVisible: false }}/>
        <Stack.Screen name="MeetingDetails" component={MeetingDetails} options={{ title: 'Détails de la visite' , headerBackTitleVisible: false }}/>
        <Stack.Screen name="DeleteVisit" component={DeleteVisit} options={{ title: '' , headerBackTitleVisible: false }}/>
        <Stack.Screen name="AddInfos" component={AddInfos} options={{ title: 'Compléter mon profil' , headerBackTitleVisible: false }}/>
        <Stack.Screen name="AddInfos2" component={AddInfos2} options={{ title: 'Informations supplémentaires' , headerBackTitleVisible: false }}/>
        <Stack.Screen name="ProfileComplete" component={ProfileComplete} options={{ headerShown: false }}/>
        <Stack.Screen name="DashboardYoung" component={DashboardYoung} />
        <Stack.Screen name="MeetingOld" component={MeetingOld} />
        <Stack.Screen name="MeetingYoung" component={MeetingYoung} />
        <Stack.Screen name="ListOld" component={ListOld} />
        <Stack.Screen name="ListYoung" component={ListYoung} />
        <Stack.Screen name="ListSelfYoung" component={ListSelfYoung} />
        <Stack.Screen name="ListSelfOld" component={ListSelfOld} />
        <Stack.Screen name="EditAnnonceYoung" component={EditAnnonceYoung} />
        <Stack.Screen name="EditAnnonceOld" component={EditAnnonceOld} />
        <Stack.Screen name="EmailSent" component={EMailSent} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
          name="ChatPage"
          component={ChatPage}
          options={({ route }) => ({
            title: route.params?.recipientName ? route.params.recipientName : 'Chat',
            headerBackTitleVisible: false
          })}
        />
        <Stack.Screen name="Calendar" component={Calendar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
