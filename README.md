# Bankless NFT Platform Website

Bootstrapped with [NextJS](https://nextjs.org/), [Web3React](https://github.com/NoahZinsmeister/web3-react), [Web3 Modal](https://www.npmjs.com/package/web3modal), and [Ethers](https://www.npmjs.com/package/ethers) and configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)


# Local Development

install dependencies: `yarn`
run local development server: `yarn dev`


# Notes

This project was originally cloned from the bankless-dao-website repo and has since been stripped back in preperation of a complete design overhaul.

@yves has provided incredible [designs](https://www.figma.com/file/1wkJ4ZmF8lM12m72WS6GSB/LTL_-NFT-marketplace?node-id=1555%3A114851) produced in figma

please view the github projects page for this repo to get a sense of how you might be able to help.


Before committing yarn.lock, verify that the entry for `ethereumjs-abi` reads

```
"ethereumjs-abi@git+https://github.com/ethereumjs/ethereumjs-abi.git":
  version "0.6.8"
  resolved "https://github.com/ethereumjs/ethereumjs-abi#1a27c59c15ab1e95ee8e5c4ed6ad814c49cc439e"
  dependencies:
    bn.js "^4.11.8"
    ethereumjs-util "^6.0.0"
```

This is a temporary fix to allow Netlify to build with walletconnect