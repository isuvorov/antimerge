const testcases = [
	[
    {
      a: 1,
      b: 3,
      c: 2,
	  },
    {
      a: 1,
      b: 2,
      d: 4,
	  },
    {
      b: 3,
      c: 2,
      d: undefined,
    }
  ],

  [
    {
      a: 1,
      b: 3,
      c: 2,
      d: 4,
    },
    {
      a: 1,
      b: 2,
      d: 4,
    },
    {
      b: 3,
      c: 2,
    }
  ],

  [
    {
      a: 1,
      b: 3,
      c: 2,
      d: 4,
    },
    {
      a: 1,
      b: 2,
    },
    {
      b: 3,
      c: 2,
      d: 4,
    }
  ],

  [
    {
      a: 1,
      b: 3,
      c: 2,
    },
    {},
    {
      a: 1,
      b: 3,
      c: 2,
    }
  ],

  [
    {},
    {},
    {}
  ],

  [
    {
      a: 1,
      b: 3,
      c: 2,
    },
    {
      a: 1,
      b: 3,
      c: 2
    },
    {}
  ],

  [
    {
      a: 1,
      b: 3,
      c: 2,
    },
    null,
    null
  ],

  [
    {
      a: 1,
      b: 3,
      c: 2,
    },
    undefined,
    null
  ],

  [
    {
      a: 1,
      b: 3,
      c: 2,
    },
    NaN,
    null
  ],

  [{
    a: 1,
    b: 3,
    c: 2,
  },
   "asdasd",
   null
  ],

  [{
    a: 1,
    b: 3,
    c: 2,
  },
   123123,
   null
  ],

  [
    null,
    {
      a: 1,
      b: 3,
      c: 2,
    },
    null
  ],

  [
    undefined,
    {
      a: 1,
      b: 3,
      c: 2,
    },
    null
  ],

  [
    NaN,
    {
      a: 1,
      b: 3,
      c: 2,
    },
    null
  ],

  [
    "asdasd",
    {
      a: 1,
      b: 3,
      c: 2,
    },
    null
  ],

  [
    123123,
    {
      a: 1,
      b: 3,
      c: 2,
    },
    null
  ],


  [
    {},
    {
      a: 1,
      b: 3,
      c: 2,
    },
    {
      a: undefined,
      b: undefined,
      c: undefined,
    }
  ],


  [
    {
      a: 3
    },
    {
      b: 5
    },
    {
      a: 3,
      b: undefined,
    }
  ],


  [
    {
      a: 1,
      b: 3,
      c: 5,
    },
    {
      a: 1,
      b: 3,
      c: 2,
      d: 234,
    },
    {
      c: 5,
      d: undefined
    }
  ],


  [
    {},
    {
      a: 1,
      b: 3,
      c: 2,
    },
    {
      a: undefined,
      b: undefined,
      c: undefined,
    }
  ],


  [
    {
      a: [1, 2, 3],
      b: [1, 3],
      c: 2,
    },
    {
      a: [1, 2, 3],
      b: [1, 2],
      c: undefined,
    },
    {
      b: [1, 3],
      c: 2
    }
  ],


  [
    {
      a: [{a: 2}],
      b: [1, 3],
      c: 2,
    },
    {
      a: [{a: 3}],
      b: [1, 2],
      c: undefined,
    },
    {
      a: [{a: 2}],
      b: [1, 3],
      c: 2
    }
  ],


  [
    {
      a: [{a: 2}],
      b: [1, 3],
      c: 2,
    },
    {
      a: [{a: 2}],
      b: [1, 2],
      c: undefined,
    },
    {
      b: [1, 3],
      c: 2
    }
  ],


  [
    {
      a: [{}],
      b: [1, 3],
      c: 2,
    },
    {
      a: [{a: 2}],
      b: [1, 2],
      c: undefined,
    },
    {
      a: [{}],
      b: [1, 3],
      c: 2
    }
  ],


  [
    {
      a: {
        a: 1,
        b: 4,
      },
      b: 3,
      c: 2,
    },
    {
      a: {
        a: 2,
        c: 3,
      },
      b: 2,
      c: 1,
    },
    {
      a: {
        a: 1,
        b: 4,
        c: undefined,
      },
      b: 3,
      c: 2,
    },
  ],
];

export const deepTestcases = [
  [
    {
      a: {
        a: 1,
        b: 4,
      },
      b: 3,
      c: 2,
    },
    {
      a: {
        a: 2,
        c: 3,
      },
      b: 2,
      c: 1,
    },
    {
      a: {
        a: 1,
        b: 4,
        c: undefined,
      },
      b: 3,
      c: 2,
    },
  ],


  [
    {
      a: {
        a: null,
        b: null,
      },
      b: 'asd',
      c: null,
    },
    {
      a: {
        a: 'aasd',
        c: null,
      },
      b: 'asd',
      c: 1,
    },
    {
      a: {
        a: null,
        b: null,
        c: undefined,
      },
      c: null,
    },
  ],


  [
    {
      a: {
        a: {
          d: 123,
          c: 'qwe',
          a: 123,
        },
        b: null,
      },
      b: 'asd',
      c: null,
    },
    {
      a: {
        a: {
          a: 321,
          d: 123,
          c: 'qwe',
          f: '123',
        },
        c: null,
      },
      b: 'asd',
      c: 1,
    },
    {
      a: {
        a: {
          a: 123,
          f: undefined,
        },
        b: null,
        c: undefined,
      },
      c: null,
    },
  ],
  [
    {
      a: 1,
      b: 3,
      c: 2,
    },
    {
      a: 1,
      b: 2,
      d: 4,
    },
    {
      b: 3,
      c: 2,
      d: undefined,
    },
  ],

  [
    {
      a: 1,
      b: 3,
      c: 2,
      d: 4,
    },
    {
      a: 1,
      b: 2,
      d: 4,
    },
    {
      b: 3,
      c: 2,
    }
  ],

  [
    {
      a: 1,
      b: 3,
      c: 2,
      d: 4,
    },
    {
      a: 1,
      b: 2,
    },
    {
      b: 3,
      c: 2,
      d: 4,
    }
  ],

  [
    {
      a: 1,
      b: 3,
      c: 2,
    },
    {},
    {
      a: 1,
      b: 3,
      c: 2,
    }
  ],

  [
    {},
    {},
    {}
  ],

  [
    {
      a: 1,
      b: 3,
      c: 2,
    },
    {
      a: 1,
      b: 3,
      c: 2
    },
    {}
  ],

  [
    {
      a: 1,
      b: 3,
      c: 2,
    },
    null,
    null
  ],

  [
    {
      a: 1,
      b: 3,
      c: 2,
    },
    undefined,
    null
  ],

  [
    {
      a: 1,
      b: 3,
      c: 2,
    },
    NaN,
    null
  ],

  [{
    a: 1,
    b: 3,
    c: 2,
  },
    "asdasd",
    null
  ],

  [{
    a: 1,
    b: 3,
    c: 2,
  },
    123123,
    null
  ],

  [
    null,
    {
      a: 1,
      b: 3,
      c: 2,
    },
    null
  ],

  [
    undefined,
    {
      a: 1,
      b: 3,
      c: 2,
    },
    null
  ],

  [
    NaN,
    {
      a: 1,
      b: 3,
      c: 2,
    },
    null
  ],

  [
    "asdasd",
    {
      a: 1,
      b: 3,
      c: 2,
    },
    null
  ],

  [
    123123,
    {
      a: 1,
      b: 3,
      c: 2,
    },
    null
  ],


  [
    {},
    {
      a: 1,
      b: 3,
      c: 2,
    },
    {
      a: undefined,
      b: undefined,
      c: undefined,
    }
  ],


  [
    {
      a: 3
    },
    {
      b: 5
    },
    {
      a: 3,
      b: undefined,
    }
  ],


  [
    {
      a: 1,
      b: 3,
      c: 5,
    },
    {
      a: 1,
      b: 3,
      c: 2,
      d: 234,
    },
    {
      c: 5,
      d: undefined
    }
  ],


  [
    {},
    {
      a: 1,
      b: 3,
      c: 2,
    },
    {
      a: undefined,
      b: undefined,
      c: undefined,
    }
  ],
];

export default testcases;
