import jwtDecoder from 'jwt-decode';
export const CLIENT_ID = 'dsmovieflix';
export const CLIENT_SECRET = 'dsmovieflix123';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
}

export type Role = 'ROLE_MEMBER' | 'ROLE_VISITOR';

type AccessToken = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

export const saveSessionData = (loginResponse: LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));
}

export const getSessionData = () => {
    const sessionData = localStorage.getItem('authData') || '{}';
    const parsedSessionData = JSON.parse(sessionData);

    return parsedSessionData as LoginResponse;
}

export const getAccessTokenDecoded = () => {
    const sessionData = getSessionData();
    try{
        const tokenDecoded = jwtDecoder(sessionData.access_token);
        return tokenDecoded as AccessToken;
    }catch(error){
        return {} as AccessToken;
    }
}

export const tokenIsValid = () => {
    const {exp} = getAccessTokenDecoded();
    if(Date.now() <= exp * 1000){
        return true;
    }
    return false;
}

export const isAuthenticated = () => {
    const sessionData = getSessionData();
    return sessionData.access_token && tokenIsValid();
}

export const isAllowedByRole = (routeRoles: Role[] = []) => {
    if(routeRoles.length === 0){
        return true;
    }
    const {authorities} = getAccessTokenDecoded();
    return routeRoles.some(role => authorities?.includes(role));
}
