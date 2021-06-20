---
pageTitle: Using the useEffect hook with useState
---

## useEffect

In my previous blog post, I talked about how to use the `useState` hook with different data types. Knowing that is a pre-requisite because the `useEffect` hook tends to be used with the `useState` hook. The basic idea behind the `useEffect` hook is that it runs code whenever the component it belongs to completes rendering. Note that a component re-renders whenever its state is mutated by the `setState` updater function from the `useState` hook. 

Suppose we have the following:

```jsx
const [counter, setCounter] = useState(1)
const [power, setPower] = useState(false)

const increment = () => setCounter((counter) => counter + 1)
const togglePower = () => setPower((power) => !power)

useEffect(() => {
	console.log(`The power is ${power}`)
})
```

In the example above, whenever either the `increment` or `togglePower` functions are executed, the value of `power` will be logged to the console. This is because both functions cause state mutations, and therefore cause the component to re-render. As previously said, any state mutations that cause component to render will trigger the function inside of `useEffect`. This also applies for the initial render of the component. We will see `The power is false` on  the console when the component loads. 

We can adjust this behaviour so that `useEffect` only runs on specified state mutations. Here's an example of a paginated blog that renders articles based on the page number.

```jsx
const [page, setPage] = useState(0);
const [articles, setArticles] = useState([])

useEffect(() => {
		const getArticles = async(pageNumber) => {
			const articles = await fetchArticles(pageNumber) // a GET function
			setArticles(articles)
		}
		getArticles(page)
}, [page])
```

The `useEffect` hook runs only when mutations to the `page` state occur. In other words, when the user presses a page number that causes `page` to mutate and the component to re-render, it will get the list of articles given the page number. However, since we only restrict this behaviour to renders from `page` mutations, renders from the `setArticles(article)` will not cause an infinite number of `useEffect` functions to run. We essentially avoid the problem of infinite loops.