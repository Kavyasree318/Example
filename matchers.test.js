
// toEqual
test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  })

//for testing floating point numbers - toBeCloseTo

  test('add floating point number', () => {
    const value = 0.5 + 0.2;
    expect(value).toBeCloseTo(0.7); 
  });

  //testing strings - toMatch

  test('there is no B in kavya', () => {
    expect('kavya').not.toMatch(/B/);
  });
  
  test('but there is a "sree" in kavyasree', () => {
    expect('kavyasree').toMatch(/sree/);
  });

  // Arrays - toContain

  const List = [
    'food',
    'travel',
    'entertainment'
  ];

  test('list contains travel', () => {
    expect(List).toContain('travel');
  });

  // want to throw an error when a function is called - toThrow

  function error() {
    throw new Error('...');
  }

  test('throw an error', () => {
    expect(error).toThrow();
  });

  