# Lenskart UI Clone in React Native

[View in Expo](https://expo.io/@shubham0804/Lenskart-Clone)

## Screens

**_1. Home Screen_**

<img src="https://storage.googleapis.com/lenskart-rn-ui/Screen%20Recordings/Home%20Screen%20GIF-3.gif" height="350">

---

**_2. Search Screen_**

<img src="https://storage.googleapis.com/lenskart-rn-ui/Screen%20Recordings/Search%20Screen%20Activity%20Indicator.gif" height="350">

-   Data is retrived from the Lenskart Api using useEffect Hook
-   Activity Indicator is displayed while the data is being retrieved from the api

---

**_3. Video Screen_**

<img src="https://storage.googleapis.com/lenskart-rn-ui/Screen%20Recordings/Video%20Screen%20GIF.gif" height="350">

-   Custom component with play/pause button
-   Play/Pause button disappears after 3 seconds of not pressing it
-   Play/Pause button re-appears after tapping anywhere on the screen
-   After video ends, navigates back to the Home Screen

---

**_4. Drawer_**

<img src="https://storage.googleapis.com/lenskart-rn-ui/Screen%20Recordings/Drawer%20GIF.gif" height="350">

-   Expandable List

---

### Navigation Utilized:

-   Drawer Navigation
-   Stack Navigation

### React Hooks Used:

-   useState
-   useEffect
-   useRef

### Primary React Native Components Used:

-   ScrollView
-   FlatList
-   Pressable
-   Image
-   ImageBackground
-   StyleSheet

### 3rd Party Components Used:

-   [React Native Material Ripple](https://www.npmjs.com/package/react-native-material-ripple, "React Native Material Ripple")<br>
    Used to achieve ripple effect on images
-   [Expo AV](https://docs.expo.io/versions/latest/sdk/av, "Expo AV")<br>
    Used in the Video Screen
-   [Expo Linking](https://docs.expo.io/guides/linking/, "Expo Linking")<br>
    Used for onPress external links to Whatsapp, Email, etc.
