const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    /*** 
     * users
     * user
     * me
    */
    
    users: async () => {
      return User.find({});
    },

    user: async (parent, argument) => {
      const param = argument ? {argument} : {}
      return User.findOne(param);
    },

    me: async ( parent, argument, body ) => {
      if(body.user){
        const bodyID = body.user._id; 
        return User.findOne({_id: bodyID}).populate('savedBooks');
      }
    }    
  },
  Mutation: {
    addUser: async(parent, {username, password,email }) => {
      const user = await User.create({username, password, email});
      const token = signToken(user);
      return {user, token}
    }
  },
};

module.exports = resolvers;
