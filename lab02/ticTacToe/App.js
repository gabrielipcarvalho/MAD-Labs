import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const theTicTacToe = () => { return (
	<SafeAreaView style = {styles.safeArea}>
		<View style = {styles.greyRec}>
			<View style = {styles.theBox}>
				<View style = {styles.greenBox}>
					<Text style = {styles.theText}>
						O
					</Text>
				</View>
				<View style = {styles.greenBox}>
					<Text style = {styles.theText}>
					</Text>
				</View>
				<View style = {[styles.greenBox, {borderRightWidth: 2}]}>
					<Text style = {styles.theText}>
						O
					</Text>
				</View>
				<View style = {styles.greenBox}>
					<Text style = {styles.theText}>
						X
					</Text>
				</View>
				<View style = {styles.greenBox}>
					<Text style = {styles.theText}>
						X
					</Text>
				</View>
				<View style = {[styles.greenBox, {borderRightWidth: 2}]}>
					<Text style = {styles.theText}>
						O
					</Text>
				</View>
				<View style = {[styles.greenBox, {borderBottomWidth: 2}]}>
					<Text style = {styles.theText}>
						X
					</Text>
				</View>
				<View style = {[styles.greenBox, {borderBottomWidth: 2}]}>
					<Text style = {styles.theText}>

					</Text>
				</View>
				<View style = {[styles.greenBox, {borderRightWidth: 2}, {borderBottomWidth: 2}]}>
					<Text style = {styles.theText}>
						O
					</Text>
				</View>
			</View>
		</View>
	</SafeAreaView>
)}


export default theTicTacToe;
const styles = StyleSheet.create({
	safeArea: {
		flex: 1
	},
	greyRec: {
		backgroundColor: 'lightgrey',
		flex: 1,
		margin: 20,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 30,
	},
	theBox: {
		width: 300,
		height: 300,
		backgroundColor: 'lightcoral',
		borderWidth: 3,
		borderRadius: 10,
		borderColor: 'black',
		padding: 20,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	greenBox: {
		backgroundColor:'green',
		borderTopWidth: 2,
		borderLeftWidth: 2,
		borderColor: 'black',
		width: ((300 - 40) / 3) - 2 ,
		height: ((300 - 40) / 3),
		justifyContent: 'center',
		alignItems: 'center'
	},
	theText: {
		fontSize: 60,
		fontWeight: 'bold',
		color: 'white'
	}
})