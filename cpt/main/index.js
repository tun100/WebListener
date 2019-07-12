export default crc({
  render () {
    return (
      <div>
        <div>
          <rrdm.Link to='/login'>goto login</rrdm.Link>{' '}
        </div>
        <div>
          <rrdm.Link to='/secure'>goto secure</rrdm.Link>{' '}
        </div>
      </div>
    )
  }
})
