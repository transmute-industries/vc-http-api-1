let { suiteConfig } = global;

const httpClient = require("../services/httpClient");
const utilities = require("../services/utilities");

if (suiteConfig.deriveCredentialConfiguration) {
  let verifiableCredentials =
    utilities.filterVerifiableCredentialsForVendorConfig(
      suiteConfig.verifiableCredentials,
      suiteConfig.deriveCredentialConfiguration
    );

  describe("Derive Credential API", () => {
    let accessToken;
    const { deriveCredentialConfiguration, authentication } = suiteConfig;
    const { endpoint } = deriveCredentialConfiguration;

    beforeAll(async () => {
      const res = await httpClient.postJson(
        authentication.endpoint,
        authentication.request,
        {}
      );
      accessToken = res.body.access_token;
    });

    verifiableCredentials.forEach((item) => {
      const vc = item.data;
      describe(`File: ${item.fileName}`, () => {
        it("1. the derive credential should pass", async () => {
          const frame = suiteConfig.frames.find(
            (f) => f.fileName === item.fileName
          ).data;
          const body = {
            verifiableCredential: vc,
            frame,
            options: {},
          };
          const res = await httpClient.postJson(endpoint, body, {
            type: "oauth2-bearer-token",
            accessToken,
          });
          expect(res.status).toBe(201);
          expect(res.body.type.includes("VerifiableCredential")).toBe(true);
          expect(res.body.proof.type).toBe("BbsBlsSignatureProof2020");
        });
      });
    });
  });
}
