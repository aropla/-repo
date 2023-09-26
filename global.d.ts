type Fn = (...args: any[]) => any
type Noop = () => void
type Rewrite<O1 extends Record<string, unknown>, O2 extends Record<string, unknown> = O1> =
  {
    [Key in Exclude<keyof O1, keyof O2>]: O1[Key]
  } & O2

type Symbolize<BasicType, ID> = BasicType & {
  __SYMBOL__: ID
}
