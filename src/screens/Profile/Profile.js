import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StatusBar, Dimensions, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Header, Left, Thumbnail, Body, Right, Title } from 'native-base';

const { width, height } = Dimensions.get('window');

class Profile extends Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<Header style={{ backgroundColor: '#fff', elevation: 0 }}>
					<StatusBar barStyle="dark-content" backgroundColor="#fff" />

					<Left style={{ flex: 1, marginLeft: '5%' }}>
						<TouchableOpacity onPress={()=> this.props.navigation.navigate('UpdateForm')}>
							<Image
								style={{
									width: 22,
									height: 14
								}}
								source={require('../../../assets/back.png')}
							/>
						</TouchableOpacity>
					</Left>

					<Body style={{ flex: 1, justifyContent: 'center', justifyContent: 'center' }}>
						<Title
							style={{
								alignSelf: 'center',
								fontSize: hp('2.5%'),
								color: '#296bc8',
								fontFamily: 'Nunito',
								fontWeight: '400',
								letterSpacing: 0.39,
								lineHeight: 28
							}}
						>
							My Profile
						</Title>
					</Body>

					<Right style={{ flex: 1, paddingRight: '5%' }}>
						<TouchableOpacity>
							<Image
								style={{
									width: 22,
									height: 22
								}}
								source={require('../../../assets/shape.png')}
							/>
						</TouchableOpacity>
					</Right>
				</Header>

				<View
					style={{
						flex: 1,
						borderTopLeftRadius: 30,
						borderTopRightRadius: 30,
						backgroundColor: '#296bc8',
						marginTop: hp('10%')
					}}
				>
					<Thumbnail
						source={require('../../../assets/image.png')}
						style={{
							height: 122,
							width: 122,
							borderRadius: 50,
							position: 'absolute',
							alignSelf: 'center',
							top: -70
						}}
					/>
					<View style={{ justifyContent: 'center', marginTop: hp('10%'), alignItems: 'center' }}>
						<Text
							style={{
								color: '#ffffff',
								fontFamily: 'Nunito',
								fontSize: hp('2.5%'),
								fontWeight: '400',
								letterSpacing: 0.47,
								marginVertical: 5
							}}
						>
							Moylon Francis
						</Text>

						<Text
							style={{
								color: '#ffffff',
								fontFamily: 'Nunito',
								fontSize: hp('2.3%'),
								fontWeight: '300',
								letterSpacing: 0.35,
								marginVertical: 2
							}}
						>
							moylon@gmail.com
						</Text>

						<Text
							style={{
								color: '#ffffff',
								fontFamily: 'Nunito',
								fontSize: hp('2.3%'),
								fontWeight: '300',
								letterSpacing: 0.35,
								marginVertical: 2
							}}
						>
							718-221-1216
						</Text>

						<Text
							style={{
								color: '#ffffff',
								fontFamily: 'Nunito',
								fontSize: hp('2.3%'),
								fontWeight: '300',
								letterSpacing: 0.35,
								marginVertical: 2
							}}
						>
							Standard Plan
						</Text>
					</View>
					<Text
						style={{
							color: '#ffffff',
							fontFamily: 'Nunito',
							fontSize: hp('2.5%'),
							fontWeight: '300',
							letterSpacing: 0.39,
							marginTop: hp('5%'),
							marginHorizontal: '5%'
						}}
					>
						201 50th Ave Suite 20J,
					</Text>
					<Text
						style={{
							color: '#ffffff',
							fontFamily: 'Nunito',
							fontSize: hp('2.5%'),
							fontWeight: '300',
							letterSpacing: 0.39,
							marginHorizontal: '5%'
						}}
					>
						Long Island City, NY,
					</Text>
					<Text
						style={{
							color: '#ffffff',
							fontFamily: 'Nunito',
							fontSize: hp('2.5%'),
							fontWeight: '300',
							letterSpacing: 0.39,
							marginHorizontal: '5%'
						}}
					>
						11101
					</Text>
				</View>
			</View>
		);
	}
}

export default Profile;
