export interface Component {
  tagname: string
  attr: Partial<Attr>
  style: Partial<CSSStyleDeclaration>
  event: any
  children: string | Component[]
}

/*
export interface EventMap {
  [key: symbol]: PipeList
}

export type PipeList = PipeElement[]

export interface PipeElement {
  resolve?: (input: any) => any
  reject?: (input: any) => never
  events?: PipeList[]
}

function Pipe<OUT>(handler: (input: any) => OUT) {
  return {
    then: function <T>(resolve: (input: OUT) => T, reject?: (input: OUT) => never) {
      return PipeThen<OUT, T>(resolve, reject)
    },
    send: function (...events: symbol[]) {
      return PipeSend<OUT>(...events)
    }
  }
}

function PipeThen<IN, OUT>(resolve: (input: IN) => OUT, reject?: (input: IN) => never) {
  return {
    then: function <T>(resolve: (input: OUT) => T, reject?: (input: OUT) => never) {
      return PipeThen<OUT, T>(resolve, reject)
    },
    send: function (...events: symbol[]) {
      return PipeSend<OUT>(...events)
    }
  }
}

function PipeSend<IN>(...events: symbol[]) {
  return {
    then: function <T>(resolve: (input: IN) => T, reject?: (input: IN) => never) {
      return PipeThen<IN, T>(resolve, reject)
    },
    send: function (...events: symbol[]) {
      return PipeSend<IN>(...events)
    }
  }
}
*/
