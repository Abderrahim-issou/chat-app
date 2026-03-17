import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { appDispatch, rootState } from '../store';

// create typed redux hooks, instead of using useDispatch that returns any, and useSelector that returns unknown
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
export const useAppDispatch = () => useDispatch<appDispatch>();



