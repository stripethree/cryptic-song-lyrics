const debug = require('debug')('csl-app');
const logError = require('debug')('csl-app:error');
const { Slack } = require('./slack');

const slack = new Slack(process.env.SLACK_APP_TOKEN);

if (process.env.SLACK_USER_ID) {
  slack.updateStatus(process.env.SLACK_USER_ID, ':nerd_face:', `hacking the gibson at ${new Date()}`)
    .then((slackRes) => {
      debug(JSON.stringify(slackRes.profile, undefined, 2));
    })
    .catch((err) => {
      logError(err);
    });
}

exports.slack = slack;
