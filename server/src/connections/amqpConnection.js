import { connect } from 'amqplib';
import config from 'config';
import DebugLib from 'debug';
import configHandler from '../clients/plannerNotificationHandler.js';

const debug = new DebugLib('server:amqp');

export let amqpChannel;

export async function connectAmqp() {

  const URL = process.env.RABBITMQ_URL || config.get('amqp.url');

  const conn = await connect(URL);
  amqpChannel = await conn.createChannel();
  
  configHandler(amqpChannel);

  process.on('exit', () => {
    amqpChannel.close();
    debug(`Closing rabbitmq channel`);
  });
}
