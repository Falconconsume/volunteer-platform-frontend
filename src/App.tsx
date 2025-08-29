import { useAppDispatch, useAppSelector } from './app/hooks'
import {
    increment,
    decrement,
    incrementAsync,
} from './features/counter/counterSlice'
import { useGetPostsQuery } from './services/postsApi'

function App() {
    const count = useAppSelector((s) => s.counter.value)
    const status = useAppSelector((s) => s.counter.status)
    const dispatch = useAppDispatch()

    const { data: posts, isFetching } = useGetPostsQuery()
    return (
        <div style={{ padding: 20 }}>
            <h1>Redux Toolkit + RTK Query demo</h1>

            <section>
                <h2>Counter</h2>
                <p>
                    Count: {count} {status !== 'idle' && `(${status})`}
                </p>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(incrementAsync(5))}>
                    +5 async
                </button>
            </section>

            <section>
                <h2>Posts from API</h2>
                {isFetching && <p>Loading...</p>}
                <ul>
                    {posts?.map((p) => (
                        <li key={p.id}>{p.title}</li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default App
