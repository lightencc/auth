##Handling User Inputs
The TextInput component uses `setState` function with new text user inputs when
responding `onChangeText` callback, then component rerenders, the value of TextInput changes.

##Handling Authentication Events
Through the `onAuthStateChanged` callback of firebase, we can know whether the user has logged in, then we can change the state of the App component to control which component, LoginForm or LogOut button will render to the screen.

When state changes, we can define a render methed, if some condition return immediately with certain JSX objects, otherwise return other objects by default.