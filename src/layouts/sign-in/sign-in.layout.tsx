import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons';
import { PageLayout, Input, Button, Separator } from 'components';
import { AuthContext } from 'contexts/auth/auth-context';
import { signInValidationSchema } from 'validations';

import * as s from './sign-in.layout.styles';

type FormCredentialsProps = {
  email: string;
  password: string;
};

const SignInLayout = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormCredentialsProps>({
    resolver: yupResolver(signInValidationSchema),
  });

  const { signIn, userCredentials } = useContext(AuthContext);

  const handleSignIn = async (credentials: FormCredentialsProps) => {
    if (
      credentials.email !== userCredentials.email ||
      credentials.password !== userCredentials.password
    ) {
      setError('password', {
        type: 'custom',
        message: 'Email or Password invalid!',
      });
    }
    await signIn(credentials);
  };

  return (
    <PageLayout title="SignIn — Bankme Tech" showHeader hideNavigation>
      <s.Wrapper>
        <s.Section>
          <s.Title>
            <s.Strong css={{ color: '$primary-12' }}>BANK</s.Strong>
            <s.Strong css={{ color: '$primary-11' }}>ME</s.Strong> Design System
          </s.Title>
          <s.Description>
            Made with NextJS, TypeScript, Stitches and Radix.
          </s.Description>
        </s.Section>

        <s.Form onSubmit={handleSubmit(handleSignIn)}>
          <Input.InputText
            name="email"
            label="Email"
            type="email"
            icon={<EnvelopeClosedIcon />}
            placeholder="you@bankme.tech"
            tooltipContent="email: diego.silva@bankme.tech"
            register={register}
          />
          <s.ErrorMessageWrapper>
            {errors.email && (
              <s.ErrorMessage>{errors.email.message}</s.ErrorMessage>
            )}
          </s.ErrorMessageWrapper>

          <Input.InputText
            name="password"
            label="Password"
            type="password"
            placeholder="password"
            icon={<LockClosedIcon />}
            tooltipContent="password: Bankme2022"
            register={register}
          />
          <s.ErrorMessageWrapper>
            {errors.password && (
              <s.ErrorMessage>{errors.password.message}</s.ErrorMessage>
            )}
          </s.ErrorMessageWrapper>

          <Separator margin="$space-05" />

          <Button type="submit" isFullWidth>
            Sign In
          </Button>
        </s.Form>
      </s.Wrapper>
    </PageLayout>
  );
};

export { SignInLayout };
