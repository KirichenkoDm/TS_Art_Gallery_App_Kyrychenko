import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Response, response } from 'express';
import { ArtworksService } from './artworks.service';
import { Artwork } from './artworks.entity';
import { QueryInterface } from './Interfaces/query.interface';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

const ResponceInternalError = () => {
  return response.status(500).json({
    message: "Something went wrong",
    error: "Internal server error piska",
  });
}

@Controller('artworks')
export class ArtworksController {
  constructor(private readonly artworksService: ArtworksService) { };

  @Get()
  async getAllArtworks(
    @Res() responce: Response,
    @Query() query: QueryInterface
  ) {
    try {
      responce = await this.artworksService.getAllArtworks(query, responce);
      return response;
    } catch (error) { ResponceInternalError() }
  }

  @Get("/:id")
  async getArtworkById(
    @Param("id") artworkId: number,
    @Res() response: Response
  ) {
    try {
      return response = await this.artworksService.getArtworkById(artworkId, response);
    } catch (error) { ResponceInternalError() }
  }

  @Post("")
  async addNewArtwork(
    @Body() artworkData: Artwork,
    @Res() response: Response
  ) {
    try {
      const artwork = plainToClass(Artwork, artworkData);
      const errors = await validate(artwork);
      if (errors.length > 0) {
        return response.status(400).json({ 
          message: "Validadion failed.", 
          errors: errors.map((err) => err.constraints),        
        });
      }

      return response = await this.artworksService.addNewArtwork(artworkData, response);
    } catch (error) { }
  }

  @Delete("/:id")
  async deleteArtworkById(
    @Param("id") artworkId: number,
    @Res() response: Response
  ) {
    try {
      return response = await this.artworksService.deleteArtworkById(artworkId, response);
    } catch (error) { }
  }

  @Put("/:id")
  async updateArtworkById(
    @Param("id") artworkId: number,
    @Body() artworkData: Artwork,
    @Res() response: Response
  ) {
    try {
      const artwork = plainToClass(Artwork, artworkData);
      const errors = await validate(artwork);
      if (errors.length > 0) {
        return response.status(400).json({ 
          message: "Validadion failed.", 
          errors: errors.map((err) => err.constraints),        
        });
      }

      return response = await this.artworksService.updateArtworkById(artworkId, artworkData, response)
    } catch (error) { }
  }
}
