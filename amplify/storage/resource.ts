import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'myStorageBucket',
  isDefault: true,
  access: (allow) => ({
    'qualita/*': [
      allow.authenticated.to(['read', 'write', 'delete']),
      allow.groups(['admin']).to(['read', 'write', 'delete']),
    ],
    'admin/*': [
      allow.groups(['admin']).to(['read', 'write', 'delete']),
      allow.authenticated.to(['list']),
    ],
    'qualita-codess/*': [
      allow.groups(['qualita-codess']).to(['read', 'write', 'delete']),
      allow.authenticated.to(['list']),
    ],
  }),
});
