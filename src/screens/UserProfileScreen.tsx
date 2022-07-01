import { FC, useContext, useEffect, useState } from 'react';
import Container from '../components/UI/Container';
import UserProfileHeader from '../components/UserProfileHeader';
import UserRecipes from '../components/UserRecipes';
import { UserContext } from '../store/UserContext';
import { api } from '../utils/api';
import SignUpScreen from './SignUpScreen';

const UserProfileScreen: FC = () => {
    // const { currentUser } = useContext(UserContext)
     
    return (
        <Container>
            <UserProfileHeader />
            {/* Recipe list owned by authenticated user */}
            {/* <UserRecipes userId={currentUser._id}/> */}
        </Container>
    )
}

export default UserProfileScreen;
