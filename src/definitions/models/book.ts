export interface BookReponse {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}

interface VolumeInfo {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

interface IndustryIdentifier {
  type: string;
  identifier: string;
}

interface ReadingModes {
  text: boolean;
  image: boolean;
}

interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice: Price;
  retailPrice: Price;
  buyLink: string;
  offers: Offer[];
}

interface Price {
  amount: number;
  currencyCode: string;
}

interface Offer {
  finskyOfferType: number;
  listPrice: PriceInMicros;
  retailPrice: PriceInMicros;
}

interface PriceInMicros {
  amountInMicros: number;
  currencyCode: string;
}

interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: FormatAvailability;
  pdf: FormatAvailability;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

interface FormatAvailability {
  isAvailable: boolean;
}

interface SearchInfo {
  textSnippet: string;
}

export type Book = {
  id: string;
  title: string;
  imgSrc: string;
}

export interface DescriptionObject {
	value: string;
	type: string;
}

export interface BookDetail {
	title: string;
	description: string | DescriptionObject;
}