import React from "react"
import {View, Text} from 'react-native'

export default function Contacts({navigation}) {
    return(
        <View>
            <View>
                <Text>Nome: Paulo Campos</Text>
                <Text>Telefone: (18) 99752-9771</Text>
                <Text
                onPress={() => navigation.navigate('Information',
                {
                    nome: 'Paulo Campos',
                    telefone: '(18)99752-9771',
                    endereco: 'Nelson Semeghini',
                })}
                >Information...</Text>
            </View>
            <View>
                <Text>Nome: Vivi Silva</Text>
                <Text>Telefone: (18) 99729-6681</Text>
                <Text
                onPress={() => navigation.navigate('Information',
                {
                    nome: 'Vivi Silva',
                    telefone: '(18)99729-6681',
                    endereco: 'Rua da Penha',
                })}
                >Information...</Text>
            </View>
        </View>
    )
}