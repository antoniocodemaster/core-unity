import logo from '../assets/images/lorem-logo.png';
import Title from '../components/typography/Title';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  loginFormSchema,
  LoginFormSchema,
} from '../lib/schemas/auth-forms-schemas';
import Button from '../components/UI/Button';
import { Link, useNavigate } from 'react-router-dom';
import InputText from '../components/UI/InputText';
import { toast } from 'react-hot-toast';
import Text from '../components/typography/Text';
import useAuthState from '../lib/states/AuthState';
import Nav from '../components/Nav';

const LogInPage = () => {
  const { loginWithCredentials } = useAuthState();

  const navigate = useNavigate();
  const loginForm = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormSchema) => {
    const userLoggedIn = await loginWithCredentials(data.email, data.password);
    console.log('User logged in response', userLoggedIn);
    toast.success('User logged in successfully');
    navigate('/admin-dashboard');
  };

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center min-h-screen bg-gray-500">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Logo" className="h-12" />
          </div>

          <Title
            title="Inicia sesión en tu cuenta"
            style="SectionTitle"
          />

          <form onSubmit={loginForm.handleSubmit(onSubmit)}>
            <InputText
              name="email"
              label="Email address"
              type="text"
              placeholder="Enter your email address"
              register={loginForm.register}
              error={loginForm.formState.errors.email?.message}
            />

            <InputText
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              register={loginForm.register}
              error={loginForm.formState.errors.password?.message}
            />

            <Button type="submit" variant="success">
              Acceder
            </Button>
          </form>
          <Text className="mt-4">
            No tienes una cuenta?{' '}
            <Link to="/register" className="text-success">
              Regístrate
            </Link>
          </Text>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
