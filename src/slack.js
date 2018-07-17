const { WebClient } = require('@slack/client');
// const debug = require('debug')('csl-app:slack');
// const logError = require('debug')('csl-app:slack:error');

class Slack {
  constructor(appToken) {
    this.webClient = new WebClient(appToken);
  }

  updateStatus(userId, statusEmoji, statusText) {
    const data = {
      user: userId,
      profile: {
        status_emoji: statusEmoji || '',
        status_text: statusText || ''
      }
    };
    return this.webClient.users.profile.set(data);
  }
}

exports.Slack = Slack;
