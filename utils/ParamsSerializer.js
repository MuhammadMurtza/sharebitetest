module.exports = (param) => {
    return param == null || param == undefined ? "NULL" : `'${param}'`;
  };
