const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  // In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

  if(countries.includes('Ethiopia') === true){
    console.log('ETHIOPIA')
  }else{
    countries.push('Ethiopia')
  }

  












  export default countries;