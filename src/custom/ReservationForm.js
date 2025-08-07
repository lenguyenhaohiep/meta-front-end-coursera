import {
    Box,
    Button,
    Field,
    Heading,
    Input,
    Textarea,
    VStack,
    NativeSelect,
    Fieldset,
    Stack,
    SimpleGrid,
    Flex
} from "@chakra-ui/react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"

import { Formik, useFormikContext } from "formik";

import * as Yup from 'yup';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSubmit from "@/hooks/useSubmit";


function ReservationForm() {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comments: '',
        date: new Date(),
        time: '',
        numberOfGuests: ''
    }

    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

    const navigate = useNavigate();

    const { response, submit } = useSubmit();

    const AfterSubmitEffect = () => {
        const { setSubmitting } = useFormikContext(); // ✅ safe here

        useEffect(() => {
            if (response) {
                if (response.type === 'success') {
                    navigate('/confirmation');
                } else {
                    setSubmitting(false);
                }
            }
        }, [response]);
    };

    return (
        <VStack>
            <Heading size="4xl">
                Reserve a table
            </Heading>
            <Box>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object({
                        firstName: Yup.string().required('Required'),
                        lastName: Yup.string().required('Required'),
                        email: Yup.string().email('Invalid email address').required('Required'),
                        phone: Yup.string().matches(/^[0-9]\d{1,14}$/, 'Invalid phone number').required('Required'),
                        comments: Yup.string().nullable(),
                        date: Yup.date().required('Required'),
                        time: Yup.string().required('Required'),
                        numberOfGuests: Yup.number().required('Required')
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true);
                        submit(values);
                    }}
                >

                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        getFieldProps,
                        getFieldHelpers
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}   gapX={8}  // horizontal space
  gapY={6}>
                                <AfterSubmitEffect />

                                <Fieldset.Root size="lg" maxW="md">
                                    <Stack>
                                        <Fieldset.Legend>Reservation</Fieldset.Legend>
                                    </Stack>

                                    <Fieldset.Content>
                                        <Field.Root invalid={errors.date && touched.date}>
                                            <Field.Label>Date</Field.Label>
                                            <DatePicker
                                                selected={values.date}
                                                onChange={(val) => getFieldHelpers('date').setValue(val)}
                                                onBlur={() => getFieldHelpers('date').setTouched(true)}
                                                customInput={<Input />}
                                            />
                                            <Field.ErrorText>{errors.date}</Field.ErrorText>
                                        </Field.Root>

                                        <Field.Root invalid={errors.time && touched.time}>
                                            <Field.Label>Time</Field.Label>
                                            <NativeSelect.Root size="sm">
                                                <NativeSelect.Field placeholder="Select option" {...getFieldProps('time')}>
                                                    <option value="17:00">17:00</option>
                                                    <option value="17:30">17:30</option>
                                                    <option value="18:00">18:00</option>
                                                    <option value="18:30">18:30</option>
                                                    <option value="19:00">19:00</option>
                                                    <option value="19:30">19:30</option>
                                                    <option value="20:00">20:00</option>
                                                    <option value="20:30">20:30</option>
                                                </NativeSelect.Field>
                                                <NativeSelect.Indicator />
                                            </NativeSelect.Root>
                                            <Field.ErrorText>{errors.time}</Field.ErrorText>
                                        </Field.Root>

                                        <Field.Root invalid={errors.numberOfGuests && touched.numberOfGuests}>
                                            <Field.Label>Number of Guests</Field.Label>
                                            <NativeSelect.Root size="sm">
                                                <NativeSelect.Field placeholder="Select option" {...getFieldProps('numberOfGuests')}>
                                                    {numbers.map((num) => (
                                                        <option key={`time-${num}`} value={num}>{num}</option>
                                                    ))}
                                                </NativeSelect.Field>
                                                <NativeSelect.Indicator />
                                            </NativeSelect.Root>
                                            <Field.ErrorText>{errors.numberOfGuests}</Field.ErrorText>
                                        </Field.Root>
                                    </Fieldset.Content>
                                </Fieldset.Root>

                                <Fieldset.Root size="lg" maxW="md">
                                    <Stack>
                                        <Fieldset.Legend>Contact details</Fieldset.Legend>
                                    </Stack>

                                    <Fieldset.Content>

                                        <Field.Root invalid={errors.firstName && touched.firstName}>
                                            <Field.Label>Firstname</Field.Label>
                                            <Input placeholder="John" {...getFieldProps('firstName')} />
                                            <Field.ErrorText>{errors.firstName}</Field.ErrorText>
                                        </Field.Root>

                                        <Field.Root invalid={errors.lastName && touched.lastName}>
                                            <Field.Label>Lastname</Field.Label>
                                            <Input placeholder="Smith" {...getFieldProps('lastName')} />
                                            <Field.ErrorText>{errors.lastName}</Field.ErrorText>
                                        </Field.Root>

                                        <Field.Root invalid={errors.email && touched.email}>
                                            <Field.Label>Email</Field.Label>
                                            <Input placeholder="me@example.com" {...getFieldProps('email')} />
                                            <Field.ErrorText>{errors.email}</Field.ErrorText>
                                        </Field.Root>

                                        <Field.Root invalid={errors.phone && touched.phone}>
                                            <Field.Label>Phone Number</Field.Label>
                                            <Input placeholder="0123456789" {...getFieldProps('phone')} />
                                            <Field.ErrorText>{errors.phone}</Field.ErrorText>
                                        </Field.Root>

                                        <Field.Root invalid={errors.comments && touched.comments}>
                                            <Field.Label>Comments</Field.Label>
                                            <Textarea placeholder="Put your comments" {...getFieldProps('comments')} />
                                            <Field.ErrorText>{errors.comments}</Field.ErrorText>
                                        </Field.Root>


                                    </Fieldset.Content>
                                </Fieldset.Root>
                            </SimpleGrid>
                            <Flex justify="center" mt={8}>

                                <Button type="submit" loading={isSubmitting} loadingText="Please wait ..." spinnerPlacement="start">Reserve</Button>
                                {
                                    response &&
                                    <Field.Root invalid={response.type === 'error'}>
                                        <Field.ErrorText>{response.message}</Field.ErrorText>
                                    </Field.Root>
                                }
                            </Flex>


                        </form>
                    )}
                </Formik>
            </Box>
        </VStack>
    );
}

export default ReservationForm;