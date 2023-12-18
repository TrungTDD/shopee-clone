import { useSelector } from 'react-redux';

export default function useAuthenticated() {
  return useSelector(state => {
    console.log(state.auth.user)
    console.log(state.auth.user._id)
    return Boolean(state.auth.user._id);
  });
}
