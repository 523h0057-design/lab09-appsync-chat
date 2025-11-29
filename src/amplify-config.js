// src/amplify-config.js
import { Amplify } from "aws-amplify";

Amplify.configure({
  aws_appsync_graphqlEndpoint: import.meta.env.VITE_APPSYNC_ENDPOINT,
  aws_appsync_region: import.meta.env.VITE_APPSYNC_REGION,
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: import.meta.env.VITE_APPSYNC_APIKEY
});

// console.log("CONFIG LOADED!!!");

// Amplify.configure({
//   aws_project_region: "ap-southeast-1",
//   aws_appsync_graphqlEndpoint:
//     "https://6t5ycaholve2fdtzwehaw5onau.appsync-api.ap-southeast-1.amazonaws.com/graphql",
//   aws_appsync_region: "ap-southeast-1",
//   aws_appsync_authenticationType: "API_KEY",
//   aws_appsync_apiKey: "da2-brs7jchdfbc3jticdgzr6kdia",
// });

// import { Amplify } from "aws-amplify";

// Amplify.configure({
//   API: {
//     GraphQL: {
//       endpoint:
//         "https://6t5ycaholve2fdtzwehaw5onau.appsync-api.ap-southeast-1.amazonaws.com/graphql",
//       region: "ap-southeast-1",
//       defaultAuthMode: "apiKey",
//       apiKey: "da2-brs7jchdfbc3jticdgzr6kdia",

//       additionalHeaders: {
//         "x-api-key": "da2-brs7jchdfbc3jticdgzr6kdia",
//       },
//     },
//   },
// });

// import { Amplify } from "aws-amplify";

// Amplify.configure({
//   API: {
//     GraphQL: {
//       endpoint:
//         "https://6t5ycaholve2fdtzwehaw5onau.appsync-api.ap-southeast-1.amazonaws.com/graphql",
//       region: "ap-southeast-1",
//       defaultAuthMode: "apiKey",
//       apiKey: "da2-brs7jchdfbc3jticdgzr6kdia",
//     },
//   },
// });

// import { Amplify } from "aws-amplify";

// const amplifyConfig = {
//   API: {
//     GraphQL: {
//       endpoint: "https://6t5ycaholve2fdtzwehaw5onau.appsync-api.ap-southeast-1.amazonaws.com/graphql",
//       region: "ap-southeast-1",
//       defaultAuthMode: "apiKey",
//       apiKey: "da2-brs7jchdfbc3jticdgzr6kdia",
//     },
//   },
// };

// Amplify.configure(amplifyConfig);

// export default amplifyConfig;
