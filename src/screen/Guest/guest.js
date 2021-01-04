import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
const Guest = () => {
    const [adult, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)

    return (
        <View>
            <View style=
                {{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey'
                }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Adults</Text>
                    <Text style={{ fontSize: 25 }}>age 13 or above</Text>
                </View>
                <View style={{ flexDirection: "row" }}  >
                    <Pressable
                        style={styles.button}
                        onPress={() => { setAdults(adult + 1) }}
                    >
                        <Text style={{ fontSize: 30, alignSelf: 'center' }}>+</Text>
                    </Pressable>
                    <Text style={{ marginHorizontal: 20, fontSize: 30 }}>{adult}</Text>
                    <Pressable
                        onPress={() => { setAdults(Math.max(0, adult - 1)) }}
                        style={styles.button}
                    >
                        <Text style={{ fontSize: 30, alignSelf: 'center' }}>-</Text>
                    </Pressable>
                </View>

            </View>
            <View style=
                {{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey',
                }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }}>children</Text>
                    <Text style={{ fontSize: 25 }}>age between 2 - 12 years</Text>
                </View>
                <View style={{ flexDirection: "row" }}  >
                    <Pressable
                        style={styles.button}
                        onPress={() => { setChildren(children + 1) }}
                    >
                        <Text style={{ fontSize: 30, alignSelf: 'center' }}>+</Text>
                    </Pressable>
                    <Text style={{ marginHorizontal: 20, fontSize: 30 }}>{children}</Text>
                    <Pressable
                        onPress={() => { setChildren(Math.max(0, children - 1)) }}
                        style={styles.button}
                    >
                        <Text style={{ fontSize: 30, alignSelf: 'center' }}>-</Text>
                    </Pressable>
                </View>

            </View>
            <View style=
                {{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey'
                }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }}>infants</Text>
                    <Text style={{ fontSize: 25 }}>age below 2 years</Text>
                </View>
                <View style={{ flexDirection: "row" }}  >
                    <Pressable
                        style={styles.button}
                        onPress={() => { setInfants(infants + 1) }}
                    >
                        <Text style={{ fontSize: 30, alignSelf: 'center' }}>+</Text>
                    </Pressable>
                    <Text style={{ marginHorizontal: 20, fontSize: 30 }}>{infants}</Text>
                    <Pressable
                        onPress={() => { setInfants(Math.max(0, infants - 1)) }}
                        style={styles.button}
                    >
                        <Text style={{ fontSize: 30, alignSelf: 'center' }}>-</Text>
                    </Pressable>
                </View>

            </View>
        
        </View>
    )
}
export default Guest;