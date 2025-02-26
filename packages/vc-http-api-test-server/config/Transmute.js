module.exports = {
  name: 'Transmute',
  issueCredentialConfiguration: [
    {
      id: 'did:key:z6Mknv9euBSQrKXBCsTrr7sYdqMiGbeKgUCWvM5SMxQWgn7w',
      endpoint:
        'https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/credentials/issue?role=https://staging.platform.transmute.industries/organizations/eaff306f-2591-4d02-a08c-410574e9c861/admin',
      proofType: 'Ed25519Signature2018',
      options: {
        assertionMethod:
          'did:key:z6Mknv9euBSQrKXBCsTrr7sYdqMiGbeKgUCWvM5SMxQWgn7w#z6Mknv9euBSQrKXBCsTrr7sYdqMiGbeKgUCWvM5SMxQWgn7w',
      },
    },
  ],
  verifyCredentialConfiguration: {
    // endpoint: "https://vc.transmute.world/next/credentials/verify",
    // endpoint:
    // "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/credentials/verify",
    endpoint:
      "https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/credentials/verify",
    didMethodsSupported: ["did:key:"],
    linkedDataProofSuitesSupported: [
      "Ed25519Signature2018",
      "BbsBlsSignature2020",
      "BbsBlsSignatureProof2020",
    ],
  },
  verifyPresentationConfiguration: {
    // endpoint: "https://vc.transmute.world/next/presentations/verify",
    // endpoint:
    // "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/presentations/verify",
    endpoint:
      "https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/presentations/verify",
    didMethodsSupported: ["did:key:"],
    linkedDataProofSuitesSupported: [
      "Ed25519Signature2018",
      "BbsBlsSignature2020",
      "BbsBlsSignatureProof2020",
    ],
  },
  notifyPresentationConfiguration: {
    endpoint:
      "https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/presentations/available",
    // endpoint:
    // "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/presentations/available",
  },
  submitPresentationConfiguration: {
    endpoint:
      "https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/presentations/submissions",
    // endpoint:
    // "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/presentations/submissions",
  },
  provePresentationConfiguration: {
    endpoint:
      "https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/presentations/prove?role=https://staging.platform.transmute.industries/organizations/eaff306f-2591-4d02-a08c-410574e9c861/admin",
    // endpoint:
    // "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/presentations/prove?role=http://localhost:8080/organizations/52628a04-cc54-4570-9940-36133d606ab6/admin",
  },
  deriveCredentialConfiguration: {
    endpoint:
      "https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/credentials/derive?role=https://staging.platform.transmute.industries/organizations/eaff306f-2591-4d02-a08c-410574e9c861/admin",
    // endpoint:
    // "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/credentials/derive?role=http://localhost:8080/organizations/52628a04-cc54-4570-9940-36133d606ab6/admin",
    linkedDataProofSuitesSupported: ["BbsBlsSignature2020"],
    didMethodsSupported: ["did:key:"],
  },
  authentication: {
    endpoint: `https://${process.env.TRANSMUTE_DOMAIN}/oauth/token`,
    request: {
      client_id: process.env.TRANSMUTE_CLIENT_ID,
      client_secret: process.env.TRANSMUTE_CLIENT_SECRET,
      audience: process.env.TRANSMUTE_AUDIENCE,
      grant_type: "client_credentials",
    },
  },
  credentials: require("../__fixtures__/credentials"),
  verifiableCredentials: require("../__fixtures__/verifiableCredentials"),
  verifiablePresentations: require("../__fixtures__/verifiablePresentations"),
  frames: require("../__fixtures__/frames"),
};
