import { VideoCategory } from "./video-category.enum";
import { VideoRating } from "./video-rating.enum";

export interface Video {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    },
    regular: {
      small: string;
      medium: string;
      large: string;
    }
  },
  year: number;
  category: VideoCategory;
  rating: VideoRating;
  isBookmarked: boolean;
  isTrending: boolean;
}
