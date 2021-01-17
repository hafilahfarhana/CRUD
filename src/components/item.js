import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import firebase from '../config';

const Item = ({ nama, alamat, nohp, tgldaftar, bahan, sebelah, ukuran, jumlah, id, nav }) => (
    <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.title}>{nama}</Text>
            <Text style={styles.title}>{alamat}</Text>
            <Text style={styles.title}>{nohp}</Text>
            <Text style={styles.title}>{tgldaftar}</Text>
            <Text style={styles.title}>{bahan}</Text>
            <Text style={styles.title}>{sebelah}</Text>
            <Text style={styles.title}>{ukuran}</Text>
            <Text style={styles.title}>{jumlah}</Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => _update({ id, nama, alamat, nohp, tgldaftar, bahan, sebelah, ukuran, jumlah, nav })}>
                <Ionicons name="md-create" size={36} color="orange" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => _remove({ id })}>
                <Ionicons name="md-trash" size={36} color="#dc143c" />
            </TouchableOpacity>
        </View>
    </View>
);

const _remove = async ({ id }) => {
    firebase.database().ref('list/' + id)
        .remove().then(() => console.log('Berhasil Hapus!'));
}

const _update = async ({ id, nama, alamat, nohp, tgldaftar, bahan, sebelah, ukuran, jumlah, nav }) => {

    var data = {
        nama: nama,
        alamat: alamat,
        nohp: nohp,
        tgldaftar: tgldaftar,
        bahan: bahan,
        sebelah: sebelah,
        ukuran: ukuran,
        jumlah: jumlah
    }

    nav.navigate('Edit', {
        id: id,
        data: data
    })
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#a0d5f6',
    },
    item: {
    },
    title: {
        fontSize: 32,
    },
    isi: {
        fontSize: 22,
    },
})

export default Item