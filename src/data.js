export const musicLibrary = {
  libraryName: "GrooveTunes Library",
  location: "Digital",
  genres: ["Rock", "Pop", "Jazz", "Hip Hop", "Electronic"],
  albums: [
    {
      title: "Back in Black",
      artist: "AC/DC",
      releaseYear: 1980,
      tracks: [
        { title: "Hells Bells", duration: "5:12" },
        { title: "Back in Black", duration: "4:15" },
        // ... more tracks
      ]
    },
    {
      title: "Thriller",
      artist: "Michael Jackson",
      releaseYear: 1982,
      tracks: [
        { title: "Wanna Be Startin' Somethin'", duration: "6:03" },
        { title: "Billie Jean", duration: "4:54" },
        // ... more tracks
      ]
    }
    // ... more albums
  ],
  playlists: [
    {
      name: "Chill Vibes",
      creator: "User123",
      tracks: [
        // Include tracks from various albums
        { title: "Smooth Operator", artist: "Sade", duration: "4:15" },
        { title: "Is This Love", artist: "Bob Marley", duration: "3:52" },
        // ... more tracks
      ]
    },
    {
      name: "Workout Beats",
      creator: "FitnessFanatic",
      tracks: [
        // Include tracks from various albums
        { title: "Eye of the Tiger", artist: "Survivor", duration: "4:05" },
        { title: "Lose Yourself", artist: "Eminem", duration: "5:26" },
        // ... more tracks
      ]
    }
    // ... more playlists
  ],
  users: {
    premium: ["User123", "MusicLover456"],
    regular: ["CasualListener789", "NewUser010"]
  }
};