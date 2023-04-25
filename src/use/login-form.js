import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";

export function useLoginForm() {
    const {handleSubmit, isSubmitting, submitCount} = useForm();

    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Пожалуйста введите email')
            .email('Необходимо ввести корректный email')
    );

    const PASSWORD_MIN_LENGTH = 6;

    const num = computed(() => password.value ? password.value.length : 0);

    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Пожалуйста введите пароль')
            .min(PASSWORD_MIN_LENGTH,
                `Пароль не может быть меньше ${PASSWORD_MIN_LENGTH} символов, вы ввели: `)
    );

    const isTooManyAttempts = computed(() => submitCount.value >= 3);

    watch(isTooManyAttempts, val => {
        if (val) {
            setTimeout(() => submitCount.value = 0, 1500);
        }
    })

    const onSubmit = handleSubmit((values) => {
        console.log('Form', values);
        console.log(password.value.length);
    });

    return {
        email,
        password,
        eError,
        pError,
        eBlur,
        pBlur,
        onSubmit,
        isSubmitting,
        isTooManyAttempts,
        num,
    }
}