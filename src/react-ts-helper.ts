export interface HasChildren {
  children: React.ReactNode
}

/** Get component prop Types */
export type GetProps<
  T extends React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<T, React.ComponentProps<T>>

/** Get component prop Types omitting children */
export type GetPropsOmitChildren<
  T extends React.JSXElementConstructor<any>
> = Omit<GetProps<T>, 'children'>
