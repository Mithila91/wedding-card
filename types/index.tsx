export type Description = {
    _key: string;
    children: { text: string }[];
  };
  
  export type AboutData = {
    _id: string;
    heading: string;
    description: Description[];
    imageUrl: string;
  };

  export type Paragraph = {
    children: { text: string }[];
  };
  
  export type InformationData = {
    heading: string;
    subheading: string;
    paragraph: Paragraph[];
  };
  
  export type LocationParagraph = {
    children: { text: string }[];
  };
  
 export type LocationData = {
    subHeading: string;
    heading: string;
    title: string;
    paragraph: LocationParagraph[];
  };
  