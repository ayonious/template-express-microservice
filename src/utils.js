const _sum = (sum, it) => {
  if (it === 0) {
    return sum;
  }
  return _sum(sum + it, it - 1);
};

const sum = (val) => _sum(0, val);

module.exports = { sum };
