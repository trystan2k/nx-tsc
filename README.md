# nx-tsc

[![GitHub version](https://badge.fury.io/gh/trystan2k%2Fnx-tsx.svg)](https://badge.fury.io/gh/trystan2k%2Fnx-tsx)

![Build](https://github.com/trystan2k/nx-tsx/workflows/CI-workflow/badge.svg)

Nx executor to type-check project source files using tsc --noEmit

## Installation

```bash
npm install -D @trystan2k/nx-tsc
```

## Configuration

Add a `tsc` target to each `project.json`:

```json
{
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/my-lib/src",
  "targets": {
    "tsc": {
      "executor": "@trystan2k/nx-tsc:tsc",
      "options": {
        "tsConfig": ["tsconfig.json"]
      }
    }
  }
}
```

## Run type-checker

This enables the `tsc` target in the Nx workspace:

```bash
nx tsc my-lib
```
