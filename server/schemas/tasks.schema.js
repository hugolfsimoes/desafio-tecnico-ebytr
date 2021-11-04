const fildIsEmpty = ({ title, message, creator, priority, status }) => {
  let error = '';
  switch (true) {
    case (!title):
      error = new Error('"title" is required!');
      error.code = 401;
      throw error;

    case (!message):
      error = new Error('"message" is required!');
      error.code = 401;
      throw error;

    case (!creator):
      error = new Error('"creator" is required!');
      error.code = 401;
      throw error;

    case (!priority):
      error = new Error('"priority" is required!');
      error.code = 401;
      throw error;

    case (!status):
      error = new Error('"status" is required!');
      error.code = 401;
      throw error;
  }
};

module.exports = { fildIsEmpty };