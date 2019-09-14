import React, { Component } from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Header, Left, Body, Right, Title, Form, Item, Input, Label } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class UpdateForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			radioBtn: false
		};
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<Header style={{ backgroundColor: '#fff', elevation: 0 }}>
					<StatusBar barStyle="dark-content" backgroundColor="#fff" />

					<Left style={{ flex: 0.1, marginLeft: '5%' }}>
						<TouchableOpacity>
							<Image
								style={{
									width: 22,
									height: 14
								}}
								source={require('../../../assets/back.png')}
							/>
						</TouchableOpacity>
					</Left>

					<Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
							Update your profile
						</Title>
					</Body>
					<Right style={{ flex: 0.1 }} />
				</Header>

				<KeyboardAwareScrollView>
					<View>
						<Form style={{ marginHorizontal: '5%' }}>
							<Item floatingLabel>
								<Label
									style={{
										color: '#77869e',
										fontFamily: 'Nunito',
										fontSize: 16,
										fontWeight: '400'
									}}
								>
									Firstname
								</Label>
								<Input />
							</Item>
							<Item floatingLabel>
								<Label
									style={{
										color: '#77869e',
										fontFamily: 'Nunito',
										fontSize: 16,
										fontWeight: '400'
									}}
								>
									Lastname
								</Label>
								<Input />
							</Item>

							<Item floatingLabel>
								<Label
									style={{
										color: '#77869e',
										fontFamily: 'Nunito',
										fontSize: 16,
										fontWeight: '400'
									}}
								>
									Cell phone #
								</Label>
								<Input />
							</Item>

							<Item floatingLabel>
								<Label
									style={{
										color: '#77869e',
										fontFamily: 'Nunito',
										fontSize: 16,
										fontWeight: '400'
									}}
								>
									Address
								</Label>
								<Input />
							</Item>

							<Item floatingLabel>
								<Label
									style={{
										color: '#77869e',
										fontFamily: 'Nunito',
										fontSize: 16,
										fontWeight: '400'
									}}
								>
									Apt/Unit/Suite #
								</Label>
								<Input />
							</Item>

							<Item floatingLabel>
								<Label
									style={{
										color: '#77869e',
										fontFamily: 'Nunito',
										fontSize: 16,
										fontWeight: '400'
									}}
								>
									City
								</Label>
								<Input />
							</Item>

							<Item floatingLabel>
								<Label
									style={{
										color: '#77869e',
										fontFamily: 'Nunito',
										fontSize: 16,
										fontWeight: '400'
									}}
								>
									State
								</Label>
								<Input />
							</Item>

							<Item floatingLabel last>
								<Label
									style={{
										color: '#77869e',
										fontFamily: 'Nunito',
										fontSize: 16,
										fontWeight: '400'
									}}
								>
									Zipcode
								</Label>
								<Input />
							</Item>
						</Form>

						<View style={{ flex: 1, flexDirection: 'row', marginTop: hp('3%'), marginHorizontal: '5%' }}>
							<TouchableOpacity
								onPress={() => this.setState({ radioBtn: !this.state.radioBtn })}
								style={{ flex: 1.5, flexDirection: 'row' }}
							>
								<View
									style={{
										width: 20,
										height: 20,
										borderRadius: 50,
										justifyContent: 'center',
										alignItems: 'center',
										borderColor: '#77869e',
										borderStyle: 'solid',
										borderWidth: 1
									}}
								>
									{this.state.radioBtn ? (
										<View
											style={{
												width: 10,
												height: 10,
												borderRadius: 50,
												backgroundColor: '#0eafe6'
											}}
										/>
									) : null}
								</View>
								<Text
									style={{
										color: '#77869e',
										fontFamily: 'Nunito',
										fontSize: 13,
										fontWeight: '400',
										paddingLeft: 8
									}}
								>
									Billing Address
								</Text>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={() => this.props.navigation.navigate('Profile')}
								style={{ flex: 1, flexDirection: 'row' }}
							>
								<View
									style={{
										width: 20,
										height: 20,
										borderRadius: 50,
										borderColor: '#296bc8',
										borderStyle: 'solid',
										borderWidth: 2,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text
										style={{
											alignSelf: 'center',
											color: '#0eafe6',
											fontWeight: 'bold'
										}}
									>
										+
									</Text>
								</View>
								<Text
									style={{
										color: '#77869e',
										fontFamily: 'Nunito',
										fontSize: 13,
										fontWeight: '400',
										letterSpacing: 0.27,
										paddingLeft: 8
									}}
								>
									Add Profile Photo
								</Text>
							</TouchableOpacity>
						</View>

						<TouchableOpacity
							style={{
								height: 48,
								borderRadius: 6,
								backgroundColor: '#296bc8',
								marginHorizontal: '5%',
								justifyContent: 'center',
								alignItems: 'center',
								marginVertical: hp('3%')
							}}
						>
							<Text
								style={{
									color: '#ffffff',
									fontFamily: 'Nunito',
									fontSize: 16,
									fontWeight: '400',
									letterSpacing: 0.4
								}}
							>
								Update
							</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAwareScrollView>
			</View>
		);
	}
}

export default UpdateForm;
