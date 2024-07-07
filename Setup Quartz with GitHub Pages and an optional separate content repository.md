
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

Now, head to GitHub and create a new repository. This is where your site will be stored.
>[!note]
>If you want a separate repository for notes, this is NOT where your 

