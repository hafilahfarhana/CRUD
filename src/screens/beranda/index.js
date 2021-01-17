import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import Item from '../../components/item'
import firebase from '../../config'

export default class Beranda extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {},
            loading: false

        }
    }

    componentDidMount() {
        this._getData();
    }

    _getData = async () => {
        firebase.database().ref('list/').on('value', (snapshot) => {
            const tasks = [];
            snapshot.forEach((shot) => {
                tasks.push({ ...shot.val(), key: shot.key });
            });
            console.log(tasks);
            this.setState({
                data: tasks,
                loading: true,
            });
        });
    }

    renderItem = ({ item }) => (
        <Item
            nama={item.nama}
            alamat={item.alamat}
            nohp={item.nohp}
            tgldaftar={item.tgldaftar}
            bahan={item.bahan}
            sebelah={item.sebelah}
            ukuran={item.ukuran}
            jumlah={item.jumlah}
            id={item.key}
            nav={this.props.navigation}
        />
    );

    render() {
        const { data, loading } = this.state;
        let taskList = "";
        if (loading === false) {
            taskList = (
                <View style={styles.pageKosong}>
                    <Text style={styles.titleKosong}>Memuat...</Text>
                </View>
            );
        } else if (data.length) {
            taskList = (
                <>
                    <FlatList
                        data={data}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.key}
                    />
                </>
            );
        } else {
            taskList = (
                <View style={styles.pageKosong}>
                    <Text style={styles.kosong}>Data Kosong..!!</Text>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <View style={styles.header} >
                    <Text style={{ fontWeight: 'bold', fontSize: 50 }}>  </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 40 }}> ~ Cipta Prothese ~ </Text>
                </View>
                <SafeAreaView style={styles.body}>
                    {taskList}
                </SafeAreaView>
            </View>
        )
    }
}
    

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        list: {
            width: 60,
            height: 20,
            backgroundColor: 'salmon',
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12
        }
    })
