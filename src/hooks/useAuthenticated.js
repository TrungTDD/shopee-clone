import { useSelector } from 'react-redux';

export default function useAuthenticated() {
  return useSelector(state => {
    return Boolean(state.auth.user._id);
  });
}
