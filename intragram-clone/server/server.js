let express = require('express');
let graphqlHTTP = require('express-graphql');
let { buildSchema } = require('graphql');
let cors = require('cors');
let Pusher = require('pusher');
let bodyParser = require('body-parser');
let Multipart = require('connect-multiparty');

// Define chema
let schema = buildSchema(`
type User {
  id : String!
  nickname : String!
  avatar : String!
}
type Post {
    id: String!
    user: User!
    caption : String!
    image : String!
}
type Query{
  user(id: String) : User!
  post(user_id: String, post_id: String) : Post!
  posts(user_id: String) : [Post]
}
`);

    // Maps id to User object
    let userslist = {
        a: {
          id: 'a',
          nickname: 'Chris',
          avatar: 'https://www.laravelnigeria.com/img/chris.jpg'
        },
      };
      let postslist = {
        a: {
          a: {
            id: 'a',
            user: userslist.a,
            caption: 'Moving the community!',
            image: 'https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg'
          },
          b: {
            id: 'b',
            user: userslist.a,
            caption: 'Angular Book :)',
            image:
              'https://cdn-images-1.medium.com/max/1000/1*ltLfTw87lE-Dqt-BKNdj1A.jpeg'
          },
          c: {
            id: 'c',
            user: userslist.a,
            caption: 'Me at Frontstack.io',
            image: 'https://pbs.twimg.com/media/DNNhrp6W0AAbk7Y.jpg:large'
          },
          d: {
            id: 'd',
            user: userslist.a,
            caption: 'Moving the community!',
            image: 'https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg'
          }
        }
      };
/**
 * Resolver function
 * The resolver tells your server how to handle an incoming query
 * telling it where to get the data for a given field.
 * The root provides a resolver function for each API endpoint
 */
let root = {
    user({ id }) {
      return userslist[id];
    },
    post({ user_id, post_id }) {
      return postslist[user_id][post_id];
    },
    posts({ user_id }) {
      return Object.values(postslist[user_id]);
    }
  };

// Create express app
let app = express();
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

let pusher = new Pusher({
    appId: 'PUSHER_APP_ID',
    key: 'PUSHER_APP_KEY',
    secret: 'PUSHER_APP_SECRET',
    cluster: 'PUSHER_CLUSTER',
    encrypted: true
  });

    // add Middleware
    let multipartMiddleware = new Multipart();

    // trigger add a new post 
    app.post('/newpost', multipartMiddleware, (req,res) => {
      // create a sample post
      let post = {
        user: {
          nickname: req.body.name,
          avatar: req.body.avatar
        },
        image: req.body.image,
        caption: req.body.caption
      };

      // trigger pusher event 
      pusher.trigger('posts-channel', 'new-post', { 
        post 
      });

      return res.json({ status: 'Post created' });
    });


// set application port
app.listen(4000);
