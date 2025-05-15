import formCss from '../../styles/form.ts';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Contact = () => {
    const { ContactContainer, FormContainer, Label, Input, Area, ButtonWrapper } = formCss;
    const [isSent, setIsSent] = useState<boolean>(false);

    interface IFormInput {
        Name: string;
        Email: string;
        Message: string;
    }

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm<IFormInput>({ mode: 'onChange' });

    const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
            });

                const result = await response.json();

                console.log('Server response: ', result);
                console.log('Data received from server: ', result.data);

                alert(result.message);
                reset();
                setIsSent(true);
            } catch (error) {
                console.error('Error while submitting: ', error);
                alert('Error while submitting!');
            }
        };

    return (
        <ContactContainer>
            {isSent ? (
                <h1>Message generated on the server.</h1>
            ) : (
                <>
                    <h1>Only CTA on the page</h1>
                    <FormContainer onSubmit={handleSubmit(onSubmit)}>
                        <Label>Name*</Label>
                        <Input
                            type="text"
                            placeholder="Name"
                            {...register('Name', {
                                required: true,
                                minLength: {
                                    value: 3,
                                    message: 'Minimum 3 characters',
                                },
                            })}
                        />
                        <div style={{ color: 'red', paddingTop: '10px', fontSize: '18px' }}>
                            {errors?.Name && <p>{errors?.Name.message || 'Error!'}</p>}
                        </div>

                        <Label style={{ marginTop: '40px' }}>Email*</Label>
                        <Input
                            type="text"
                            placeholder="Email"
                            {...register('Email', {
                                required: true,
                                minLength: {
                                    value: 6,
                                    message: 'Minimum 6 characters',
                                },
                            })}
                        />
                        <div style={{ color: 'red', paddingTop: '10px', fontSize: '18px' }}>
                            {errors?.Email && <p>{errors?.Email.message || 'Error!'}</p>}
                        </div>

                        <Label style={{ marginTop: '40px' }}>Message*</Label>
                        <Area
                            required
                            placeholder="Message"
                            {...register('Message', {
                                required: true,
                                minLength: {
                                    value: 5,
                                    message: 'Minimum 5 characters',
                                },
                            })}
                        />
                        <div style={{ color: 'red', paddingTop: '10px', fontSize: '18px' }}>
                            {errors?.Message && <p>{errors?.Message.message || 'Error!'}</p>}
                        </div>

                        <ButtonWrapper>
                            <Stack spacing={2} direction="row">
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '100%',
                                        height: '40px',
                                        fontSize: '16px',
                                    }}
                                    type="submit"
                                    disabled={!isValid}
                                >
                                    MUI SUBMIT
                                </Button>
                            </Stack>
                        </ButtonWrapper>
                    </FormContainer>
                </>
            )}
        </ContactContainer>
    );
};

export default Contact;
