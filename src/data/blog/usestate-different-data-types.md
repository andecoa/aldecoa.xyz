---
pageTitle: Using the useState hook for different data types
---

## useState

The `useState` hook allows us to add state to our React components. We will see how to update the state when it is a single element, an array, or an object. First, we will look at how `useState` works. Suppose we have the following in a component:

```jsx
const [power, setPower] = useState(false)
```

### General Use

React re-renders our component whenever `power` is mutated using the `setPower` function. You can update the state in [two different ways](https://reactjs.org/docs/hooks-reference.html#usestate). The first way is by passing in a value directly in the `setPower` function. The value passed becomes the new value of `power` . On the other hand, you can pass in a function which uses the current value of `power` and uses that to compute a new value for it.

```jsx
// setting state with a value
const turnOn = () => setPower(true)
const turnOff = () => setPower(false)

// setting state while using the current value of the state
const togglePower = () => setPower(power => !power)
```

The example above that uses booleans can also work for strings, numbers, and other data types. It does get a little confusing once arrays, objects, and asynchronous operations are introduced. This is why we will go over them.

### useState with Arrays

Arrays work the same way. The only confusing part about arrays is that resources on the internet tend to use the spread syntax which some people might not be familiar with. We can mutate arrays in the following ways:

```jsx
const [colours, setColours] = useState(["red", "green"])

// push an element into the array using the spread syntax
const addColour = (colour) => setState(currentCols => ([...currentCols, colour]))

// the above is equivalent to
const addColour = (colour) => setState(currentCols => {
	const newCols = currentCols.concat([colour]) // creates a new array
	return newCols // use newCols for the new value of `colours`
})

// remove an element from the array
const removeColour = colour => setState(currentCols => {
	const newCols = currentCols.filter(col => col !== colour)
	return newCols
})
```

 

### useState with Objects

Just like arrays, objects work the same way too. Again, the only confusing part is the spread syntax which not everyone is familiar with. We can do three operations with objects: update a value, add a new key-value pair, and remove a key-value pair. We can do these operations like this:

```jsx
const [user, setUser] = useState({
	loggedIn: false,
	active: true,
})

// update a value
const deactivate = () => setUser(userSession => ({...userSession, active: false}))

// the following is roughly equivalent to the above
const deactivate = () => setUser(userSession => {
	const updatedSession = Object.assign({}, userSession)
	updatedSession.active = false
	return updatedSession
})
// Caveat: Object.assign only copies the properties. It is not a deep copy.
// References inside the object will stay as references in the copy.
// See https://reactjs.org/docs/update.html

// add key-value pairs
// the syntax is the same as when we update an existing key
const createProperty = (k, v) => setUser(userSession => ({...userSession, k: v}))

// delete key-value pair
const deleteKey = (k) => setUser(userSession => {
	const sessionCopy = {...userSession}
	delete sessionCopy[k]
	return {...sessionCopy}
})
```

Objects are not hard to work with, but it becomes complicated when you have nested objects that reference other data. For complicated objects, either try to make them simpler or to use a library like [immutability-helper](https://github.com/kolodny/immutability-helper).

## Dealing with expensive initial states

In a component, computations for a state's initial value may get executed again and again as  the component re-renders from every state mutation. Suppose we have the following:

```jsx
const initialBookmarks = getFromLocalStorageAndParseToJSON(props.articleTag)
const [bookmarks, setBookmarks] = useState(initialBookmarks)
```

   

Mutations to `bookmarks` causes the component to run the expensive computation again and again as the component is re-rendered. Ideally, expensive computations for initial states should only be executed once and never again as the component is re-rendered. The way React circumvents this is through [lazy initial states](https://reactjs.org/docs/hooks-reference.html#lazy-initial-state).

In our example, React only uses the `initialBookmarks` as the initial value on the first render, but it still runs the expensive computations above on every render. In other words, the initial value computations are being wasted. Lazy initial states is the idea of wrapping expensive computations in a function and passing that function in `useState` so React only runs expensive computations on the initial render and never again on subsequent re-renders. It looks like the following:

```jsx
const getInitialBookmarks = () => getFromLocalStorageAndParseToJson(props.articleTag)
const [bookmarks, setBookmarks] = useState(getInitialBookmarks)
```

Code that gets executed in the component function could get executed again and again as the component is re-rendered when its state is mutated.

## Bonus : Custom useState hook - useLocalStorage (part 1)

Let's build a custom hook to connect our component to the browser local storage. React is good because you can use the built-in hooks, combine them, and customize them into your own custom hooks to do whatever you want. In this example, we're building a hook to get and set localStorage data. We can use this hook to save bookmarks, for example, and make them persist even when the browser is closed.

Note that modifying the local storage is a side effect and should be handled by the `useEffect` hook instead. This is something we will improve on in the next article.

```jsx
const useLocalStorage = (key, initialValue) => {
	const [data, setData] = useState(() => {
		try {
			const rawValue = window.localStorage.getItem(key)
			return rawValue ? JSON.parse(rawValue) : initialValue
		} catch (err) {
			throw new Error("Local stroage error on mount")
		}	
	})
	
	const setEntry = (item) => {
		try {
			const entry= item instanceof Function ? item(data) : item;
      setData(entry); // save entry into state before storing into local storage
      window.localStorage.setItem(key, JSON.stringify(entry)); // mutate localStorage
		} catch (err) {
			throw new Error("Local storage error encountered when setting an item")
		}
	}

	return [data, setEntry]
}
```

## Summary

All the code above handles the problem of "when the user does X, re-render the component with value Y". What you should not do with `useState` is perform side effects (i.e. code that does other things but mutate the state after computing it). You can use `useEffect` instead for things like this; things like fetching data from an API after the user clicked on a page number. In the next article, we will look at how `useEffect` works and the problems it solves as well as the problems seen with it.