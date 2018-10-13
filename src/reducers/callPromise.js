
const callPromise=(state=[],action)=>{
  switch (action.type) {
    case 'PROMISE':
    console.log([{
        payload:action.payload.data,
      }
    ]);
    return [{
      payload:action.payload.data,
    }]
    default:
    return 'empty';
  }
}

export default callPromise
