import { MakeGenerics, ReactLocation, Route } from '@tanstack/react-location';

// eslint-disable-next-line @typescript-eslint/ban-types
export type LocationGenerics = MakeGenerics<{}>;

export const location = new ReactLocation<LocationGenerics>();

export const routes: Route<LocationGenerics>[] = [];
