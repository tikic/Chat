import React, { useCallback, useReducer, useEffect, useState} from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { Feather } from "@expo/vector-icons";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";
import { Alert, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";
import { signIn } from '../utils/actions/authAction';
import colors from "../constants/colors";

const initialState = {
  inputValidities: {
      email: false,
      password: false,
  },
  formIsValid: false
}


const SignInForm = (props) => {
  const dispatch = useDispatch();


  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangeHandler = useCallback((inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({validationResult : result, inputId: inputId, inputValue})
  }, [dispatchFormState])

  useEffect(() => {
    if(error){
        Alert.alert("An error occured", error)
    }
}, [error])

  const singInHandler = useCallback(async() => {
    try {
        setIsLoading(true)

        const action = signIn(
            formState.inputValues.email,
            formState.inputValues.password,
        )
        setError(null)
        await dispatch(action)
    } catch (error) {
        setIsLoading(false)
        setError(error.message);
    } 

}, [dispatch, formState])


  return (
    <>
      <Input 
      id='email'
      label="Email" 
      icon="mail" 
      onInputChange={inputChangeHandler}
      autoCapitalize='none'
      errorText={formState.inputValidities['email']}
      iconPack={Feather} />

      <Input 
      id='password'
      label="Password" 
      icon="lock" 
      secureTextEntry
      onInputChange={inputChangeHandler}
      autoCapitalize='none'
      errorText={formState.inputValidities['password']}
      iconPack={Feather} />


{
                    isLoading ? <ActivityIndicator size='small' color={colors.primary} style={{marginTop: 10}}/> :
                    <SubmitButton
                    title="Sign in"
                    disabled={!formState.formIsValid}
                    onPress={singInHandler}
                    style={{ marginTop: 20 }}/>
                }

    </>
  );
};

export default SignInForm;
