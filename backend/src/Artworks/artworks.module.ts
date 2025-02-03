import { Module } from '@nestjs/common';
import { ArtworksService } from './artworks.service';
import { ArtworksController } from './artworks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artwork } from './artworks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artwork])],
  controllers: [ArtworksController],
  providers: [ArtworksService],
})
export class ArtworksModule {}
