const rsvp = {
    name: "rsvp",
    title: "Rsvp",
    type: "document",
    fields: [
        {
            name: "heading",
            title: "Heading",
            type: "string",
        },
        {
            name: "paragraph",
            title: "Paragraph",
            type: "array",
            of: [
                {
                    type: "text",
                    title: "Text",
                    name: "text",
                },
            ],
        }, 
        {
            name: "closingMessage",
            title: "Closing Message",
            type: "string",
        },
        {
            name: "names",
            title: "Names",
            type: "string",
        },
    ],
};

export default rsvp;
