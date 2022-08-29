/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://main.d1h66vrvs37kht.amplifyapp.com/';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'eu-west-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '5spn0a4ot6l5ea3tl2dp2jqkib',
  USER_POOL_ID: 'eu-west-1_g1vN3bMjA',
  IDENTITY_POOL_ID: 'eu-west-1:a763b632-8534-4eb8-970f-b81d75e3bd54',
  GRAPHQL_ENDPOINT: '"https://j5tbi5lxzvgq5ggo6qaya5d5gm.appsync-api.eu-west-1.amazonaws.com/graphql',
};

export default configDevelopment;
