import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

const Profile = ({ navigation }) => {
  const githubUsername = navigation.getParam('github_username');

  return (
    <WebView style={styles.devView} source={{ uri: `https://github.com/${githubUsername}` }} />
  );
}

const styles = StyleSheet.create({
  devView: {
    flex: 1,
  }
});

export default Profile;