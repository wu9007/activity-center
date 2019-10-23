const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var news = require('../data/data_new.js');

function getNews() {
  return news.news;
}

function getDetailByUuid(uuid) {
  return news.news.filter((item) => {
    return item.uuid === uuid;
  })[0];
}

module.exports = {
  formatTime: formatTime,
  getNews: getNews,
  getDetailByUuid: getDetailByUuid,
}