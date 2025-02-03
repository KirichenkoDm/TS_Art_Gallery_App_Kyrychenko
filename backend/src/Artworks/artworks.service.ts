import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artwork } from './artworks.entity';
import { Like, Repository } from 'typeorm';
import { Response } from 'express';
import { QueryInterface } from './Interfaces/query.interface';

@Injectable()
export class ArtworksService {
  constructor(
    @InjectRepository(Artwork)
    private readonly artworkRepository: Repository<Artwork>
  ) {}

  async getAllArtworks(query: QueryInterface, res: Response) {
    let filter = {};
    if (query.artist){
      filter['artist'] = Like(`%${query.artist}%`);
    }
    if (query.type) {
      filter['type'] = query.type
    }

    const sortOrder: 'asc' | 'desc' = query.price === 'asc' ? 'asc' : 'desc';

    const artworks = await this.artworkRepository.find({
      where: filter,
      order: {
        price: sortOrder
      } 
    });
    
    if (!artworks || Object.keys(artworks).length === 0) {
      return res.status(404).json({ message: "Artworks not found." });
    }

    return res.status(200).json({ artworks })
  }

  async getArtworkById(artworkId: number, res:Response) {
    const artwork = await this.artworkRepository.findOneBy({ id: artworkId })

    if (!artwork) {
      return res.status(404).json({ message: `Artwork with id '${artworkId}' not found.` });
    }

    return res.status(200).json({ artwork }); 
  }

  async addNewArtwork (data: Artwork, res: Response) {
    const createdArtwork = await this.artworkRepository.save(data);
    
    if (!createdArtwork) {
      return res.status(500).json({ message: "Something went wrong." });
    }

    return res.status(200).json({ message: "Artwork created successfully." });
  }

  async deleteArtworkById(artworkId: number, res:Response) {
    const deletedArtwork = await this.artworkRepository.delete(artworkId);

    if (deletedArtwork.affected === 0) {
      return res.status(404).json({ message: `Artwork with id '${artworkId}' not found.` });
    }

    return res.status(200).json({ message: "Artwork deleted successfully." });
  }

  async updateArtworkById (artworkId: number, data: Artwork, res: Response) {
    const updatedArtwork = await this.artworkRepository.update(artworkId, data);
    
    if (updatedArtwork.affected === 0) {
      return res.status(404).json({ message: "Artwork not found." });
    }

    return res.status(200).json({ message: "Artwork updated successfully." });
  }
}
