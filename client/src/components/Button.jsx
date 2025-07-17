import hloader from './Loader.jsx'

import Loader from './Loader'

export default function Button(props) {
  return (
    <button
      style={{
        width: props.width ? `${props.width}px` : null
      }}
      className={`btn btn-${props.varient}`}
      onClick={props.onClick}>
      {props.loading ? <Loader /> : props.children}
    </button>
  )
}
