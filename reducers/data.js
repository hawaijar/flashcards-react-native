const defaultState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'React is a testing framework?',
        answer: 'no'
      },
      {
        question:
          'Ajax requests in React happens at the componentDidMount lifecycle event?',
        answer: 'no'
      }
    ],
    count: 2
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'ECMAScript is the official name for JavaScript',
        answer: 'yes'
      }
    ],
    count: 1
  }
};

export default defaultState;
