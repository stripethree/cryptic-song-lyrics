# Cryptic Son Lyrics

A throwback to the days of AIM: a Slack application to save and reuse status messages

## Prerequisites

Access to a Slack team with the permissions to create an application and bot user are required. Slack will provide a `SLACK_APP_TOKEN` and this token needs to be available in the runtime environment.

Use [`example.env`](./example.env) as a guide.

My workflow is to copy this file to `.env` and use `export $(cat .env | xargs)` to prepare the environment.

## Usage

* `npm i` to install dependencies
* `npm run dev` to start a local instance of the
application with a file watcher

The _dev_ target assumes [_nodemon_] is installed and available globally; it is not included in the project dependencies.

[_nodemon_]: http://nodemon.io/

## Logging and metrics

The [debug] package is for a firehose of data sent to stdout/stderr

[debug]: https://github.com/visionmedia/debug

## Additional information

### Environment variables

| Key | Required? | Default? |
|-|-|-|
| `SLACK_APP_TOKEN` | Y | _none_ |

### Endpoints

None
