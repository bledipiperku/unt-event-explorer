export const getEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Tech Conference",
          date: "2025-04-10",
          location: "Convention Center",
          description: "Discover the latest in technology and innovation.",
          latitude: 37.78125,
          longitude: -122.414,
        },
        {
          id: 2,
          title: "Book Fair",
          date: "2025-04-15",
          location: "Downtown Library",
          description: "Explore new releases and meet your favorite authors.",
          latitude: 37.79025,
          longitude: -122.4001,
        },
        {
          id: 3,
          title: "Marathon",
          date: "2025-04-20",
          location: "City Park",
          description: "Join thousands of runners in this annual marathon.",
          latitude: 37.7993,
          longitude: -122.42,
        },
        {
          id: 4,
          title: "Film Festival",
          date: "2025-04-25",
          location: "Cinema Hall",
          description: "Experience a curated selection of indie films.",
          latitude: 37.7955,
          longitude: -122.4105,
        },
      ]);
    }, 1000);
  });
};
