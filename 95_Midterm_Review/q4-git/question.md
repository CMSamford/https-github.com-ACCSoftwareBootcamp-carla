1. What is the difference between `git pull` and `git fetch`?

<<<<<<< HEAD
1. Why is the "index" or "staging area" needed in git? Put another way, why do you use the command `git add`?
=======
Answer: 'git fetch' tells your local git to retrieve the latest meta-data info from the original without doing any file transfering. It's more like just checking to see if there are any changes available. 'git pull' does that AND brings (copy) those changes from the remote repository.

1. Why is the "index" or "staging area" needed in git? Put another way, why do you use the command `git add`?

Answer: "staging area" is a preview of teh next commit. 'git add' adds a change in the working directory to the staging area. It tells git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit.
>>>>>>> 61008e95d58d10d863a3d6af4e399bd465c30597
