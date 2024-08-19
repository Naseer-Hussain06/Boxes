const Box = props => {
  const {className, text} = props
  return (
    <div className={className}>
      <p className='text-style'>{text}</p>
    </div>
  )
}

const element = (
  <div className='boxes-container'>
    <h1 className='heading'>Boxes</h1>
    <div className='box-items'>
      <Box className='small-box' text='Small' />
      <Box className='medium-box' text='medium' />
      <Box className='large-box' text='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
