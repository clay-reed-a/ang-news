'use strict';

/**
 * @ngdoc service
 * @name angNewsApp.post
 * @description
 * # post
 * Service in the angNewsApp.
 */
app
  .factory('Post', function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    var posts = $firebase(ref.child('posts')).$asArray();

    var Post = {
      all: posts, 
      create: function (post) {
        return posts.$add(post).then(function(postRef) {
          $firebase(ref.child('user_posts').child(post.creatorUID))
          .$push(postRef.name());
          return postRef; 
        });
      },
      comments: function (postId) {
        return $firebase(ref.child('comments').child(postId)).$asArray();
      },
      get: function (postId) {
        return $firebase(ref.child('posts').child(postId)).$asObject();
      },
      delete: function (post) {
        return posts.$remove(post);
      }
    };

    return Post; 
  });
