import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NATS_SERVICE, envs } from 'src/config';

const client = ClientsModule.register([
  {
    name: NATS_SERVICE,
    transport: Transport.NATS,
    options: {
      servers: [envs.nats],
    },
  },
]);

@Module({
  imports: [client],
  exports: [client],
})
export class NatsModule {}
