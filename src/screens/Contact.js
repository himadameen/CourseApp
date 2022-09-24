import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Contact = () => {

    const [check, setCheck] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [text, setText] = useState('');
    const [err, setErr] = useState(name, email, mobile);
    const [showErr, setShowErr] = useState(false);

    const navigation = useNavigation();

    const submit = () => {

        if (name !== "" && email !== "" && mobile !== "") {
            Alert.alert(`${name}`);
            navigation.navigate('Home', { MyName: name });
            setName(""), setEmail(''), setMobile(''), setText('');
        } else {
            setErr(validate(name, email, mobile));
            setShowErr(true);
        }
    }

    useEffect(() => {
        if (Object.keys(err).length === 0 && showErr);
    }, [err])


    const validate = (name, email, mobile) => {
        const errors = {};
        const re = /^\S*$/;
        const er = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!name) {
            errors.name = "Please Enter Your Name";
        } else if (!re.test(name)) {
            errors.name = "Please Enter Valid"
        }
        else if (name.length >= 10) {
            errors.name = "Your Name is too long";
        } else if (name.length <= 3) {
            errors.name = "Your Name is too short";
        } else;
        if (!email) {
            errors.email = "Please Enter Email";
        } else if (!er.test(email)) {
            errors.email = "Please Enter Valid Email"
        }
        if (!mobile) {
            errors.mobile = "Please Enter Mobile Number";
        }


        return errors;
    }

    return (
        <>
            <View style={styles.body}>
                <Text style={styles.head}>Level Up Your<Text style={{ color: "green" }}>&nbsp;Knowledge</Text></Text>
                <Text style={styles.txt}>You Can reach us at anytime via <br /> contact@redfoxeducation.com !!! </Text>
                <View style={styles.form}>
                    <Text style={styles.label}>Enter Your Name</Text>
                    <TextInput style={styles.input} value={name} autoCapitalize='none' autoCorrect={false}
                        placeholder={"Enter your name"} placeholderTextColor={'#99A799'} onChangeText={(actualData) => {
                            setName(actualData);
                        }}>
                    </TextInput>
                    <Text style={styles.errs}>{err.name}</Text>
                    <Text style={styles.label}>Enter Your Email</Text>
                    <TextInput style={styles.input} value={email} autoCapitalize='none' autoCorrect={false}
                        placeholder={"Enter your email"} placeholderTextColor={'#99A799'} onChangeText={(actualData) => {
                            setEmail(actualData);
                        }}>
                    </TextInput>
                    <Text style={styles.errs}>{err.email}</Text>
                    <Text style={styles.label}>Enter Your mobile </Text>
                    <TextInput style={styles.input} value={mobile} autoCapitalize='none' autoCorrect={false}
                        placeholder={"Enter your mobile"} placeholderTextColor={'#99A799'} onChangeText={(actualData) => {
                            setMobile(actualData);
                        }}>
                    </TextInput>
                    <Text style={styles.errs}>{err.mobile}</Text>
                    <Text style={styles.label}>How can we help you ?</Text>
                    <TextInput style={styles.input_2} value={text} autoCapitalize='none' autoCorrect={false}
                        placeholder={"Any Query !!"} placeholderTextColor={'#99A799'}
                        numberOfLines={4} multiline={true} onChangeText={(actualData) => {
                            setText(actualData);
                        }}>
                    </TextInput>
                    <View style={styles.wra}>
                        <Checkbox
                            value={check}
                            onValueChange={() => {
                                setCheck(!check)
                            }}
                            color={check ? "#4630EB" : undefined}
                        />
                        <Text style={styles.txt1}><Text style={{ color: "red" }}>*</Text>&nbsp;I have agreed the terms and Conditions</Text>
                    </View>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: check ? "#354259" : "grey" }]}
                        disabled={!check} onPress={() => {
                            submit();
                        }}>
                        <Text style={styles.btn_txt}>LogIn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Contact

const styles = StyleSheet.create({
    body: {
        height: "100%",
    },
    head: {
        marginTop: 50,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "capitalize",
        letterSpacing: 10,
    },
    txt: {
        marginTop: 14,
        fontSize: 10,
        textAlign: "center",
        fontWeight: "bold",
        color: "#CDC2AE",
        textTransform: "lowercase",
        letterSpacing: 2
    },
    form: {
        width: "80%",
        marginHorizontal: "auto",
        marginTop: 30,
        paddingBottom: 20,
        // backgroundColor: "tan",
    },
    label: {
        marginVertical: 12,
        marginLeft: 12,
        fontSize: 15,
        fontWeight: 500,
        fontStyle: "italic",
    },
    input: {
        borderWidth: 1,
        borderColor: "#354259",
        padding: 5.5,
        marginHorizontal: 10,
        borderRadius: 5,
        fontSize: 13,
        fontWeight: "normal",
    },
    input_2: {
        borderWidth: 1,
        borderColor: "#354259",
        height: "15vh",
        padding: 5.5,
        marginHorizontal: 10,
        borderRadius: 5,
        lineHeight: 20,
        fontSize: 15,
        fontWeight: "normal",
    },
    errs: {
        fontSize: 13,
        color: "red",
        marginVertical: 8,
        marginLeft: 8,
        fontStyle: 'italic',
    },
    wra: {
        flexDirection: "row",
        margin: 15,
    },
    txt1: {
        color: "#354259",
        marginLeft: 5,
        fontWeight: 500
    },
    btn: {
        padding: 10,
        width: "50%",
        marginTop: 10,
        margin: "auto",
        borderRadius: 10,
    },
    btn_txt: {
        width: "100%",
        height: "100%",
        textAlign: "center",
        fontSize: 15,
        letterSpacing: 5,
        fontWeight: 600,
        color: "white",
    },
})