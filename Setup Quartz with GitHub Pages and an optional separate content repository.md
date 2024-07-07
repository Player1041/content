
Before finding out about Quartz, I tried other note publishing methods. Because of this, I had a separate repository for all my notes and another for the site itself.

In this guide, I'll detail how to setup Quartz in this way where you have two repositories; one for your Quartz setup, and one for your notes.

> [!Note]
>I use GitHub Pages to host my site, but other methods like Vercel and Netlify should work, though I won't cover them here.

# Initial Setup

>[! Prerequisites]
>Quartz requires at least [Node](https://nodejs.org/) v18.14 and `npm` v9.3.1 to function correctly. Ensure you have this installed on your machine before continuing.

To start, clone the [Quartz repository](https://github.com/jackyzha0/quartz) either from the GitHub Desktop app, or through the command line using `git clone https://github.com/jackyzha0/quartz.git`.

Once you've cloned the repository, run the following line-by-line:
```
cd quartz
npm i
npx quartz create
```

Now, navigate to the `content` folder and create a file called `index.md` which has whatever you want displayed on the front page of your site. This can contain whatever you want.

Now, head to GitHub and create a new repository. This is where your site will be stored. Make sure to name this whatever you want the URL to be, for example, if you want your site visitable at username.github.io/my-awesome-notes/, name the repository `my-awesome-notes`. Do **not** initialize this with a README.md, .gitignore or licence.

Once initialized, copy the remote link at the top of the site. It should look like `https://github.com/username/repo-name.git`.

Now in your terminal, navigate to the root of your Quartz folder and run the following commands, replacing `REMOTE-URL`with the link you just copied:

```
# list all the repositories that are tracked
git remote -v
 
# if the origin doesn't match your own repository, set your repository as the origin
git remote set-url origin REMOTE-URL
 
# if you don't have upstream as a remote, add it so updates work
git remote add upstream https://github.com/jackyzha0/quartz.git
```

To finish, run `npx quartz sync --no-pull` to do an initial push of your content to the repository.

# Getting your site on GitHub pages

