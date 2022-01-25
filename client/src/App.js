import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header';
import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

const HomePage = lazy(() => import('./pages/homepage/homepage'));
const ShopPage = lazy(() => import('./pages/shop/shop'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'));

const App = () => {
	const currentUser = useSelector(selectCurrentUser);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, [dispatch]);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<ErrorBoundary>
				<Suspense fallback={<Spinner />}>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route path='/shop' component={ShopPage} />
						<Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
						<Route exact path='/checkout' component={CheckoutPage} />
					</Switch>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

export default App;