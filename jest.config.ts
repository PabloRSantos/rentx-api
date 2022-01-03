/* eslint-disable import/no-extraneous-dependencies */
import { pathsToModuleNameMapper } from "ts-jest";

export default {
    bail: true,
    clearMocks: true,
    coverageProvider: "v8",
    preset: "ts-jest",
    testMatch: ["**/*.spec.ts"],
    moduleNameMapper: pathsToModuleNameMapper(
        {
            "@/*": ["*"],
        },
        {
            prefix: "<rootDir>/src/",
        }
    ),
};
