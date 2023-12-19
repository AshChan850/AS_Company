import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_qIQUL6HNg",
    ClientId:"3tv8rcq8j29rmkhchsrf2ucg79"
}
export default new CognitoUserPool(poolData);