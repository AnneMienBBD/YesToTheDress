let poolData = {
    UserPoolId: 'eu-west-1_1jpVyOv3w',
    ClientId: '1k2gvapfh70ilq5jj10uvpdj1d'
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);