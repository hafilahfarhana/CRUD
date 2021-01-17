import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import firebase from '../../config';


function form({ route }) {
    const { id, data } = route.params;
    const [nama, setNama] = React.useState('');
    const [alamat, setAlamat] = React.useState('');
    const [nohp, setNohp] = React.useState('');
    const [tgldaftar, setTgldaftar] = React.useState('');
    const [bahan, setBahan] = React.useState('');
    const [sebelah, setSebelah] = React.useState('');
    const [ukuran, setUkuran] = React.useState('');
    const [jumlah, setJumlah] = React.useState('');

    useEffect(() => {
        setNama(data.nama);
        setAlamat(data.alamat);
        setNohp(data.nohp);
        setTgldaftar(data.tgldaftar);
        setBahan(data.bahan);
        setSebelah(data.sebelah);
        setUkuran(data.ukuran);
        setJumlah(data.jumlah);
    }, [])

    const _simpan = async () => {
        firebase.database().ref('list/' + id)
        .update({
            nama: nama,
            alamat: alamat,
            nohp: nohp,
            tgldaftar: tgldaftar,
            bahan: bahan,
            sebelah: sebelah,
            ukuran: ukuran,
            jumlah: jumlah
        })
            .then(() => console.log('Data berhasil diubah'))
            .catch((err) => console.log(err));

        setNama('');
        setAlamat('');
        setNohp('');
        setTgldaftar('');
        setBahan('');
        setSebelah('');
        setUkuran('');
        setJumlah('');
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setNama(text)}
                value={nama}
                placeholder='Masukkan Nama'
                style={styles.input}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setAlamat(text)}
                value={alamat}
                placeholder='Masukkan Alamat'
                style={styles.input}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setNohp(text)}
                value={nohp}
                placeholder='Masukkan Nomor Hp'
                style={styles.input}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setTgldaftar(text)}
                value={tgldaftar}
                placeholder='Masukkan Tanggal Daftar'
                style={styles.input}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setBahan(text)}
                value={bahan}
                placeholder='Masukkan Bahan'
                style={styles.input}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setSebelah(text)}
                value={sebelah}
                placeholder='Masukkan Kaki Sebelah Mana'
                style={styles.input}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setUkuran(text)}
                value={ukuran}
                placeholder='Masukkan Ukuran Kaki'
                style={styles.input}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setJumlah(text)}
                value={jumlah}
                placeholder='Masukkan Berapa Jumlah Kaki'
                style={styles.input}
            />
            <TouchableOpacity
                onPress={() => _simpan()}
                style={styles.btn}
            >
                <Text style={{ fontWeight: 'bold' }}>Simpan</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    input: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        padding: 5
    },
    btn: {
        marginTop: 10,
        width: "80%",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'salmon'
    }
})

export default form;
