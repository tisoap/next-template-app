import {
	decrement,
	increment,
	incrementByAmount,
	incrementAsync,
	incrementIfOdd,
	selectCount
} from 'ducks/Counter'
import { useAppSelector, useAppDispatch } from 'hooks/redux'
import { CounterPresentation } from '../presentation/Counter.presentation'

export const Counter = () => {
	const count = useAppSelector(selectCount)
	const dispatch = useAppDispatch()

	return (
		<CounterPresentation
			count={count}
			onDecrement={() => dispatch(decrement())}
			onIncrement={() => dispatch(increment())}
			onIncrementByAmount={(value) => dispatch(incrementByAmount(value))}
			onIncrementAsync={() => dispatch(incrementAsync())}
			onIncrementIfOdd={(value) => dispatch(incrementIfOdd(value))}
		/>
	)
}
