import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  userAttributes: {
    preferredUsername: {
      mutable: true,
      required: true,
    },
  },

  groups: [
    'admin',
    'adm-qualita-codess',
    'qualita-codess',
    'adm-qualita-infanzia',
    'qualita-infanzia',
    'gruppo-test',
  ],
  loginWith: {
    email: true,
  },
});
