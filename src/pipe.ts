interface PipeConfig {
  before: Function
  afterReturing: Function
  afterThrowing: Function
  around: Function
  after: Function
  aspectThrowing: Function
  pointcut: symbol
}
export type PartialPipeConfig = Partial<PipeConfig>

interface EventID {
  id: symbol
}

interface PipeElement {
  handler: symbol[] | Function
  config?: PartialPipeConfig
}

const EventMap: Record<symbol, PipeElement[]> = {}

function Pipe<T extends undefined | null | number | bigint | string | boolean | object>(
  initializer: T | (() => T),
  config?: PartialPipeConfig
) {
  const id = Symbol('')
  const handler = typeof initializer !== 'function' ? () => initializer : initializer
  EventMap[id] = [
    {
      handler,
      config
    }
  ]
  const then = PipeThen.bind({ id }) as typeof PipeThen
  return {
    then
  }
}

function PipeThen<IN, OUT>(this: EventID, handler: (input: IN) => OUT, config?: PartialPipeConfig) {
  const then = PipeThen.bind(this) as typeof PipeThen
  return {
    then
  }
}
