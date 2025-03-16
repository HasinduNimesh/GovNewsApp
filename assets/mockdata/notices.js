const notices = [
    {
        id: 1,
        title: "Weather Advisory",
        date: "March 16, 2025, 10:00 AM",
        excerpt: "A severe weather advisory has been issued for the following areas...",
        fullText: "The National Weather Service has issued a severe weather advisory for the following areas due to expected thunderstorms and heavy rainfall. Citizens are advised to stay indoors and avoid unnecessary travel.",
        department: "Ministry of Weather and Climate",
        attachments: {
            pdf: "weather_advisory.pdf",
            image: "weather_advisory_infographic.png"
        }
    },
    {
        id: 2,
        title: "Health Department Update",
        date: "March 15, 2025, 2:00 PM",
        excerpt: "The Health Department has released new guidelines regarding public health...",
        fullText: "In light of recent health concerns, the Health Department has released new guidelines for public health and safety. Citizens are encouraged to follow these guidelines to ensure their safety and the safety of others.",
        department: "Ministry of Health",
        attachments: {
            pdf: "health_guidelines.pdf",
            image: null
        }
    },
    {
        id: 3,
        title: "Public Notice: Community Meeting",
        date: "March 14, 2025, 9:00 AM",
        excerpt: "A community meeting will be held to discuss local issues and initiatives...",
        fullText: "The local government will hold a community meeting on March 20, 2025, at 6:00 PM at the community center. All citizens are encouraged to attend and voice their opinions on local issues.",
        department: "City Council",
        attachments: {
            pdf: null,
            image: "community_meeting_flyer.png"
        }
    }
];

export default notices;