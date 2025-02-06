import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { Product } from './product.entitiy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://egpvydzq:AxoCrAEbGkCn5fgi_YhZfSAQSmtl3q2q@whale.rmq.cloudamqp.com/egpvydzq',
          ],
          queue: 'main_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
