# Twenty quiz

#### Screencapture
![Screencapture](screencapture.gif)

#### Tools and technologies
- Expo-managed React Native workflow with TypeScript
- Apollo GraphQL with React Hooks
- React Navigation

#### Tradeoffs made
- The quiz does not keep track of which questions you got right and which you got wrong once you've completed it! Obviously this would have to be included in a final product. The reason a tradeoff was made was to focus on prototyping the experience of taking the quiz, rather than the experience of reviewing ones results.

- Mocked an Apollo Provider, rather than build a GraphQL API, to save time, but to also be able to nevertheless spec-out and build GraphQL queries.

- Interfaces for Quiz, Question, and Option are each handwritten. While this certainly works for the prototype, a production version could use a tool like Apollo Codegen to generate types based on the GraphQL API.

- I prefer not to directly add margins and padding around components. Instead, I prefer to have lightweight wrapper components that handle these spacing styles. However, for the sake of rapidly prototyping this project, I added margins and padding directly to certain components. It was a conscious tradeoff to save time.

- The prototype is in grayscale, so that the developer, designer, and the user being tested can focus on the interaction, rather than the branding, when discussing feedback.

- For the sake of simplification, I made each queried object's "id" coincide with its index within the array it is in. This wouldn't go into production, but was a simplification for prototyping.

- Loading and error states were intentionally not built, particularly with respect to the screens that use the useQuery hook, in order to save time and focus on the data-loaded state.

- Would have preferred to use absolute paths rather than relative paths when importing components, but did not configure to save on time.
