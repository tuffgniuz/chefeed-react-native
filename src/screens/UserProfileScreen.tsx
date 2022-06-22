import { FC, useState } from 'react';
import Container from '../components/UI/Container';
import UserProfileHeader from '../components/UserProfileHeader';
import SignUpScreen from './SignUpScreen';

const UserProfileScreen: FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    if (!isAuthenticated) {
        return <SignUpScreen />
    }

    return (
        <Container>
            <UserProfileHeader />
            {/* Recipe list owned by authenticated user */}
        </Container>
    )
}

export default UserProfileScreen;
