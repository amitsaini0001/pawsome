/* eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: "jUeUXoMVtOYftWip8v7HMPXlJ1A2",
      username: "amit",
      fullName: "Amit Saini",
      emailAddress: "amit@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
      pets:["chikiCat", "tomTom"]
    },
    {
      userId: "2",
      username: "raphael",
      fullName: "Raffaello Sanzio da Urbino",
      emailAddress: "raphael@sanzio.com",
      following: ["jUeUXoMVtOYftWip8v7HMPXlJ1A2"],
      followers: ["NvPY9M9MzFTARQ6M816YAzDJxZ72"],
      dateCreated: Date.now(),
      pets:[]
    },
    {
      userId: "3",
      username: "dali",
      fullName: "Salvador Dalí",
      emailAddress: "salvador@dali.com",
      following: [],
      followers: ["NvPY9M9MzFTARQ6M816YAzDJxZ72"],
      dateCreated: Date.now(),
      pets:[]
    },
    {
      userId: "4",
      username: "orwell",
      fullName: "George Orwell",
      emailAddress: "george@orwell.com",
      following: [],
      followers: ["NvPY9M9MzFTARQ6M816YAzDJxZ72"],
      dateCreated: Date.now(),
      pets:[]
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  firebase
      .firestore()
      .collection("posts")
      .add({
        photoId: 54,
        userId: "jUeUXoMVtOYftWip8v7HMPXlJ1A2",
        imageSrc: `/images/users/test.mp4`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "amit",
            comment: "this is cool !",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
        petName: "tomTom",
        type: "video",
      });

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("posts")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "dali",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "orwell",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
        petName:"chikiCat",
        type: "image",
      });
  }

  // create pets
  // eslint-disable-next-line prefer-const
  firebase.firestore().collection("pets").add({
    age: 3,
    avatar:
      "https://dogtime.com/assets/uploads/gallery/golden-retriever-dogs-and-puppies/golden-retriever-dogs-puppies-1.jpg",
    isAdoptable: true,
    name: "tom",
    ownerUsername: "amit",
    petName: "tomTom",
    subType: "Labradour",
    type: "dog",
    sex: "male"
  });

  // eslint-disable-next-line prefer-const
  firebase.firestore().collection("pets").add({
    age: 5,
    avatar:
      "https://www.thesprucepets.com/thmb/cr0IUzzdcuqOYdGMBbRbbi6NfkY=/1568x1176/smart/filters:no_upscale()/GettyImages-145577979-d97e955b5d8043fd96747447451f78b7.jpg",
    isAdoptable: false,
    name: "chiki",
    ownerUsername: "amit",
    petName: "chikiCat",
    subType: "Ragdool",
    type: "cat",
    sex: "female"
  });
}
