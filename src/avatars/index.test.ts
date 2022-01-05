const nock = require("nock");
const PixowApi = require("../../dist");
const avatars = require("./avatars.json");

describe("Avatar resource", () => {
  test("getAvatars returns a list of avatars", async () => {
    // Set up the mock request
    const scope = nock("https://api-dev.tooqing.com/")
      .get("/avatar/list?")
      .reply(200, avatars);

    // Make the request
    const api = new PixowApi();
    api.setTokenHeader(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWFmZDgxZWI4MmE4NmY2YTM0YTJlMiIsInJvbGUiOjAsImNyZWRlbnRpYWwiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNV83KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTYuMC40NjY0LjExMCBTYWZhcmkvNTM3LjM2IiwiaWF0IjoxNjQwMjQxODIzLCJleHAiOjE2NDI4NjgzODN9.oZ7jJjRgdpbm5ymDAG3O3VWqJe8casBhpFK6DLvAcXg"
    );
    const ret = await api.getAllAvatars();
    const { code, data } = ret;
    expect(code).toBe(200);
    const { total, list } = data;
    expect(total).not.toBeNull();
    expect(Array.isArray(list)).toBe(true);

    // Assert that the expected request was made.
    scope.done();
  });
});
