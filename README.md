<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>heartbeat-retry</h1>
  <a href="https://npmjs.com/package/heartbeat-retry">
    <img alt="NPM" src="https://img.shields.io/npm/v/heartbeat-retry.svg">
  </a>
  <a href="https://github.com/bconnorwhite/heartbeat-retry">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/heartbeat-retry.svg">
  </a>
</div>

<br />

<blockquote align="center">Retry a promise with a heartbeat.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/heartbeat-retry">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/heartbeat-retry?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

<details open>
  <summary>
    <a href="https://www.npmjs.com/package/heartbeat-retry">
      <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="NPM" />
    </a>
  </summary>

```sh
npm install heartbeat-retry
```

</details>

<details open>
  <summary>
    <a href="https://yarnpkg.com/package/heartbeat-retry">
      <img src="https://img.shields.io/badge/yarn-2C8EBB?logo=yarn&logoColor=white" alt="Yarn" />
    </a>
  </summary>

```sh
yarn add heartbeat-retry
```

</details>

<details open>
  <summary>
    <img src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white" alt="PNPM" />
  </summary>

```sh
pnpm add heartbeat-retry
```

</details>

<details open>
  <summary>
    <img src="https://img.shields.io/badge/bun-EE81C3?logo=bun&logoColor=white" alt="Bun" />
  </summary>

```sh
bun add heartbeat-retry
```

</details>

## Usage

heartbeat-retry is built on [p-retry](https://www.npmjs.com/package/p-retry), so it exposes the same options, in addition to `heartbeat` and `onHeartbeat`:

```ts
import retry from "heartbeat-retry";

retry(promise, {
  heartbeat: 10_000, // 10 seconds
  onHeartbeat: (elapsed: number) => {
    console.log("Heartbeat")
  },
  retries: 5,
  onFailedAttempt: (error) => {
    console.log("Failed attempt", error);
  }
});
```

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/heartbeat-retry?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/heartbeat-retry.svg"></a></h2>

- [p-retry](https://www.npmjs.com/package/p-retry): Retry a promise-returning or async function

<br />

<h3>Dev Dependencies</h3>

- [@autossey/eslint-config](https://www.npmjs.com/package/@autossey/eslint-config): A base for projects that use ESLint.
- [@autossey/tsconfig](https://www.npmjs.com/package/@autossey/tsconfig): A base TSConfig for various project types.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/heartbeat-retry.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
