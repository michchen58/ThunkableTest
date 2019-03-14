export default {
  deepcopy: function(obj) {
    if (Array.isArray(obj)) {
      let newObj = obj.slice();
      return newObj;
    } else {
      return JSON.parse(JSON.stringify(obj));
    }
  },
  timestamp: function() {
    let d = new Date();
    let monthString = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthString[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} ${d.getHours() % 12}:${String(d.getMinutes()).padStart(2, '0')} ${d.getHours() < 12 ? 'am' : 'pm'}`
  },
};
