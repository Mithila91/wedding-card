export type Description = string[];

export type AboutData = {
  _id: string;
  heading: string;
  description: Description;
  imageUrl: string;
};

export type AboutProps = {
  data: AboutData[];
};

  export type Paragraph = {
    children: { text: string }[];
  };
  
  export type InformationData = {
    heading: string;
    subheading: string;
    paragraph: Paragraph[];
  };
  
  export type InviteParagraph = {
    children: { text: string }[];
  };
  
 export type InviteData = {
    subheading: string;
    heading: string;
    title: string;
    paragraph: InviteParagraph[];
  };
  
  export type PhotoGallery = {
    _id: string;
    gallery: {
      subheading: string;
      images: string[];
    };
    imageUrl: string;
  }

  export type RSVPType = {
    heading: string;
    paragraph: Paragraph[];
    closingMessage: string;
    names: string

  }