let output = null

function Pipe(handler) {
  output = handler()
  console.log(output)
  return {
    then: function (handler) {
      return PipeThen(handler)
    }
  }
}

function PipeThen(handler) {
  output = handler(output)
  console.log(output)
  return {
    then: function (handler) {
      return PipeThen(handler)
    }
  }
}

Pipe(() => 0)
  .then((a) => String(a) + '1')
  .then((s) => Boolean(s))
