# Lampa Test
https://lampa-test.surge.sh

## Description
React + Typescript e-commerce-like application

## Technical Requirements
- The app is developed using [React18](https://react.dev/blog/2022/03/29/react-v18) and [Redux/Redux-Toolkit](https://redux-toolkit.js.org/)
- Typescript is used to type components
- For the form components [react-hook-form](https://react-hook-form.com/) is used
- To validate the fields of the form - [yup](https://www.npmjs.com/package/yup)
- https://dummyjson.com is used as API
- Filter products by categories using query/queries
- Availability of authorization (login)

## Technical Details
[Feature Sliced Design architecture](https://feature-sliced.design/docs) is used in the project.
<br />
There are 3 main artifacts: layers, slices/modules, and segments. Each layer includes isolated `slices/modules`(besides `shared`). Each slice/module includes `segments`.
Code organized by such layers as:
- `app`
- `pages`
- `widgets`
- `features`
- `entities`
- `shared`
  <br />

## Authorization
As https://dummyjson.com is used as API, you should use credentials provided by it for login
- username: `kminchelle`
- password: `0lelplR`

## Installation
1. Clone the repository: `git clone https://github.com/Maksym1910/lampa-test`
2. Install the dependencies: `yarn`
3. Use `yarn run start` for local development

## Deployment
- [Surge](https://surge.sh/) used as a deployment service.
- You can access my site using this link https://lampa-test.surge.sh

## License
This project is licensed under the [MIT License](https://github.com/Maksym1910/lampa-test/blob/master/LICENSE).
