import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, Max, MaxLength, Min, ValidateIf } from "class-validator";
import { ArtworkType } from "src/Enums/artworkType.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class Artwork {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({message: "Title is required."})
  @MaxLength(99, { message: 'Title is too long' })
  title: string;

  @Column()
  @IsNotEmpty({message: "Artist is required."})
  @MaxLength(50, { message: 'Artist is too long' })
  artist: string;

  @Column()
  @IsNotEmpty({ message: 'Type is required.' })
  @IsEnum(ArtworkType, {
    message: 'Type is invalid.',
  })
  type: ArtworkType;

  @Column()
  @IsNotEmpty({ message: 'Price is required.' })
  @IsNumber({}, { message: 'Price must be a number.' })
  @Min(0.01, { message: 'Price must be greater than 0.' })
  // @ValidateIf((object, value) => {
  //   return value && value < 1e30;
  //   })
  // @Max(1e30, { message: 'Price is too large.' })
  price: number;
  
  @Column({nullable: true, default: true})
  @IsOptional()
  @IsBoolean({ message: 'Availability must be a boolean.' })
  availability: boolean;
}