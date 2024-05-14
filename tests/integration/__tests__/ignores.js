describe("ignores", () => {
  it("should ignore files listed in package.json > prettier.ignores", () => {
    runCli("cli/ignores/package-json", ["*.js", "-l"]).test({
      stderr: "",
      stdout: "not-ignored.js",
      status: 1,
    });
  });

  it("should ignore files listed in .prettierrc", () => {
    runCli("cli/ignores/prettierrc", ["*.js", "-l"]).test({
      stderr: "",
      stdout: "not-ignored.js",
      status: 1,
    });
  });
});
