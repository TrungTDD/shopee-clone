// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { path } from 'src/constants/path';
// import { authActions } from 'src/pages/Auth/auth.slice';
// import useAuthenticated from 'src/hooks/useAuthenticated';
// import { getPurchases } from './SearchBar/cart.slice';

// export default function AppAuthorized() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const unauthorizedStatus = useSelector(state => state.app.status);
//   const authenticated = useAuthenticated();

//   useEffect(() => {
//     if (unauthorizedStatus === 401) {
//       dispatch(authActions.unauthorize);
//       navigate(path.login);
//     }
//   }, [unauthorizedStatus, dispatch, navigate]);

//   useEffect(() => {
//     console.log('get purchases');
//     if (authenticated) {
//       dispatch(getPurchases());
//     }
//   }, [dispatch, authenticated]);

//   return null;
// }
