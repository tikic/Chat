import React, {useCallback, useReducer, useState, useEffect} from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducer';
import { signUp } from '../utils/actions/authAction';
import { Alert, ActivityIndicator } from 'react-native';
import colors from '../constants/colors';
import { useDispatch } from 'react-redux';


const initialState = {
    inputValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    },
    inputValidities: {
        firstName: false, 
        lastName: false,
        email: false,
        password: false,
    },
    formIsValid: false
}

const SignUpForm = props => {

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

    const singUpHandler = useCallback(async() => {
        try {
            setIsLoading(true)

            const action = signUp(
                formState.inputValues.firstName,
                formState.inputValues.lastName,
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
                    id='firstName'
                    label="First name"
                    icon="user-o"
                    onInputChange={inputChangeHandler}
                    errorText={formState.inputValidities['firstName']}
                    iconPack={FontAwesome} />

                <Input
                    id='lastName'
                    label="Last name"
                    icon="user-o"
                    onInputChange={inputChangeHandler}
                    errorText={formState.inputValidities['lastName']}
                    iconPack={FontAwesome} />

                <Input
                    id='email'
                    autoCapitalize='none'
                    label="Email"
                    icon="mail"
                    errorText={formState.inputValidities['email']}
                    keyboardType='email-address'
                    onInputChange={inputChangeHandler}
                    iconPack={Feather} />

                <Input
                    id='password'
                    label="Password"
                    secureTextEntry
                    autoCapitalize='none'
                    icon="lock"
                    errorText={formState.inputValidities['password']}
                    onInputChange={inputChangeHandler}
                    iconPack={Feather} />
                
                {
                    isLoading ? <ActivityIndicator size='small' color={colors.primary} style={{marginTop: 10}}/> :
                    <SubmitButton
                    title="Sign up"
                    disabled={!formState.formIsValid}
                    onPress={singUpHandler}
                    style={{ marginTop: 20 }}/>
                }
      
            </>
    )
};

export default SignUpForm;