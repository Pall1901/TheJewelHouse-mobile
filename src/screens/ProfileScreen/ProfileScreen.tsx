import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../theme/globalStyles';
import TabHeader from '../../components/TabHeader';
import { useUser } from '../../ayncStorage/UserContext';
import { styles } from './styles';
import AccountInfoCard from './Components/AccountInfoCard';
import AppString from '../../app-res/AppString';
import TouchableComponent from '../../components/TouchableComponent';
import AppSvgIcon from '../../app-res/AppSvgIcon';
import AppColor from '../../app-res/AppColor';
import AppDimension from '../../app-res/AppDimension';
import AppFontSize from '../../app-res/AppFontSize';

type ProfileProps = {
  navigation: any;
  route: any;
};


const ProfileScreen = (props: ProfileProps) => {

  const { user,logout } = useUser();
  console.log(user);

  const logoutUser = () => {
    logout()
    props.navigation.navigate('LoginScreen');
  }


  return (
    <View style={[globalStyles.mainContainer]}>
      <TabHeader name={'Profile'} />
      <View style={styles.infoView}>
        <AccountInfoCard
          title={AppString.profileScreen.fullName}
          value={user?.name}
          icon='userIcon'
          style={styles.cardMargin} />

        <AccountInfoCard
          title={AppString.profileScreen.email}
          value={user?.email}
          style={styles.cardMargin}
          icon='email' />

        <AccountInfoCard
          title={AppString.profileScreen.mobile}
          value={user?.mobile}
          style={styles.cardMargin}
          icon='mobile' />

        <View style={styles.logout}>
          <TouchableComponent
            button='logout'
            screen='profile'
            style={[styles.card1, styles.card]}
            onPress={() => { logoutUser() }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>

              {AppSvgIcon(
                'logout',
                AppColor.white,
                undefined,
                AppDimension.SPACING_X_20,
                AppDimension.SPACING_Y_20,
              )}
              <Text style={{ ...styles.headerLabel1, color: AppColor.white, fontSize: AppFontSize.FONT_SIZE_16, }}>Logout</Text>
            </View>
          </TouchableComponent>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen

