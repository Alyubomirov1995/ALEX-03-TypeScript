type TupleToObject<T extends ReadonlyArray<string | number | symbol >> = {
  [k in T[number]]: k
}