
## general idea
- apply SOLID design patterns on the redux project
- redux contains all logic and UI is just a plug-in
- the flow in Redux is constructed as a stream of events. Events are created by dispatching actions. Each action will be processed by one or more middlewares. 
- UI componests are also re-usable and replaceble. This is achieved by using HOC, custom hooks and Provider/Consumer patterns. 

## redux
- middlewares are mostly handled by redux-observable and rxjs.
- API calls can be canceled or chained together. For example city search will take only the latest charaters and cancel previous requests. 
- redux-observable provides logic separation. And making code easy to debug, replace.

## ui 
- I could've used either Hooks, HOC, or Provider/Consumer patterns. But I like to use all 3 for different purposes.
- container is responsible for API calls and which component should be dispayed.
- component ideally should only take props and render JSX. But sometimes actions are dispatched from there as well. 
- useSpinner - responsible for loading and error JSX
- withCitySeach - i made search as HOC in case it should be displayed on different page or multiple pages. 

## search server 

- I've added a route that returns UA cities with a random delay to test request cancelation or redirect
- Link to to server: 
