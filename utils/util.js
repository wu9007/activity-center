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

function thumUp(activityUuid, userUuid, praised) {
  var detail = getDetailByUuid(activityUuid);
  if (praised) {
    detail.approvers.push(userUuid);
  } else {
    var index = detail.approvers.indexOf(userUuid);
    if (index > -1) {
      detail.approvers.splice(index, 1);
    }
  }
}

function join(activityUuid, userUuid, joined) {
  var detail = getDetailByUuid(activityUuid);
  if (joined) {
    detail.participants.push(userUuid);
  } else {
    var index = detail.participants.indexOf(userUuid);
    if (index > -1) {
      detail.participants.splice(index, 1);
    }
  }
}

module.exports = {
  formatTime: formatTime,
  getNews: getNews,
  getDetailByUuid: getDetailByUuid,
  thumUp: thumUp,
  join: join
}