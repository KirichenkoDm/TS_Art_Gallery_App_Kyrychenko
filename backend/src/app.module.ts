import { Module } from '@nestjs/common';
import { ArtworksModule } from './artworks/artworks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import "dotenv/config";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    ArtworksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
