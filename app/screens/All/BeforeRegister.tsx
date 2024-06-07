// Importez les modules nécessaires
import React, { useState } from "react";
import { View, StatusBar, Text, TextInput, Button, ActivityIndicator, KeyboardAvoidingView, TouchableOpacity, ImageBackground, ScrollView, SafeAreaView, Image } from "react-native";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import stylesFirstPage from "../../styles/stylesFirstPage";
import stylesContainers from "../../styles/stylesContainers";
import styles from "../../styles/styles";
import { signInYoung } from "../../functions/functionsAuthentification";
import { SafeAreaProvider } from 'react-native-safe-area-context';



const BeforeRegister = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const Stack = createNativeStackNavigator();
  const [type, setType] = useState('');

  return (
    <SafeAreaView style={stylesContainers.safeViewContainer}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={stylesContainers.scrollContainer}>
        <SafeAreaProvider style={stylesContainers.safeProviderContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.Title}>Vous êtes...</Text>
            </View>

            <View style={stylesFirstPage.buttonContainer}>
                <TouchableOpacity
                    onPress={() => {
                        type === 'old';
                        setType(type);
                        navigation.navigate('Register', {type : type});
                    }}
                    style={stylesFirstPage.blueButton}
                >
                    <Text style={stylesFirstPage.textBlueButton}>Une mamie ou un papi</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        type === 'helper';
                        setType(type);
                        navigation.navigate('RegisterHelper', {type : type})
                    }}
                    style={stylesFirstPage.whiteButton}
                >
                    <Text style={stylesFirstPage.textWhiteButton}>Un.e proche aidant.e</Text>
                </TouchableOpacity>
            </View>



        </SafeAreaProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BeforeRegister;
