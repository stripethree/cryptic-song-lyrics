const debug = require('debug')('csl-app');
const logError = require('debug')('csl-app:error');
const { WebClient } = require('@slack/client');


const slackWebClient = new WebClient(process.env.SLACK_APP_TOKEN);

function updateStatus(userId, statusEmoji, statusText) {
  const data = {
    user: userId,
    profile: {
      status_emoji: statusEmoji || '',
      status_text: statusText || ''
    }
  };
  return slackWebClient.users.profile.set(data);
}

if (process.env.SLACK_USER_ID) {
  updateStatus(process.env.SLACK_USER_ID, ':nerd_face:', `hacking the gibson at ${new Date()}`)
    .then((slackRes) => {
      debug(JSON.stringify(slackRes.profile, undefined, 2));
    })
    .catch((err) => {
      logError(err);
    });
}
