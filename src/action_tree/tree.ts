import { addOrUpdateUserInfo, addUser, createComment } from "./functions";
import { Tree } from "./types";

const tree: Tree = {
  Users: {
    User: {
      actions: {
        addUser: addUser,
      },
    },
    Info: {
      actions: {
        addOrUpdateUserInfo: addOrUpdateUserInfo,
      },
    },
  },
  Posts: {
    Comment: {
      actions: {
        createComment: createComment,
      },
    },
  },
};

export default tree;
