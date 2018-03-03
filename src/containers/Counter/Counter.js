import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as ACTIONS from '../../store/actions';

class Counter extends Component {
	render() {
		const results = this.props.results.map((res, i) => (
			<li key={i} onClick={() => this.props.onDeleteResult(i)}>
				{res}
			</li>
		));

		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl
					label="Increment"
					clicked={this.props.onIncrementCounter}
				/>
				<CounterControl
					label="Decrement"
					clicked={this.props.onDecrementCounter}
				/>
				<CounterControl
					label="Add 5"
					clicked={() => this.props.onAdd(5)}
				/>
				<CounterControl
					label="Subtract 5"
					clicked={this.props.onSubtract}
				/>
				<hr />
				<button
					onClick={() => this.props.onStoreResult(this.props.ctr)}
				>
					Store Result
				</button>
				<ul>{results}</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ctr: state.ctr.counter,
		results: state.res.results
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementCounter: () => dispatch({ type: ACTIONS.INCREMENT }),
		onDecrementCounter: () => dispatch({ type: ACTIONS.DECREMENT }),
		onAdd: (value) => dispatch({ type: ACTIONS.ADD, payload: value }),
		onSubtract: () => dispatch({ type: ACTIONS.SUBTRAC, payload: 5 }),
		onStoreResult: (result) =>
			dispatch({ type: ACTIONS.STORE_RESULT, payload: result }),
		onDeleteResult: (index) =>
			dispatch({ type: ACTIONS.DELETE_RESULT, payload: index })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
