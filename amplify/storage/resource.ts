import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'testintranet1',
  isDefault: true,
  access: (allow) => ({
    'qualita/*': [
      allow.groups(['admin']).to(['read', 'write', 'delete']),
      allow.groups(['adm-qualita-codess']).to(['read', 'write', 'delete']),
      allow.groups(['qualita-codess']).to(['read']),
    ],
    'qualita infanzia/*': [
      allow.groups(['admin']).to(['read', 'write', 'delete']),
      allow.groups(['adm-qualita-infanzia']).to(['read', 'write', 'delete']),
      allow.groups(['qualita-infanzia']).to(['read']),
    ],
    'test-impostazioni/*': [
      allow.groups(['admin']).to(['read', 'write', 'delete']),
      allow.groups(['gruppo-test']).to(['read', 'write', 'delete']),
    ],
  }),
});
