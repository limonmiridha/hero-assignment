This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Setup Instruction:

- Clone the repository
- Open in your code editor
- Open your editor terminal and command

```
npm i
npm run dev

```

Now you will able to see it on your browser at [localhost](http://localhost:3000) or your available port.

## Architecture

As it is NextJS project so I started it with recommended command `npx create-next-app@latest` and I use ** app router ** within ** src ** folder. I place my images on public/images folder. I have few folder inside src because of structured project efficiently. These are:-

- api
- app
- components
- hooks
- store
- types
- views

### api

Create a mock API in this folder and I use it in project related task. I fetch it with `react-query`

### app

It is most responsible folder because it contain whole app. Inside this i create my pages and layout. For normal pages I done everything here and for relatively complex pages I separate them in views folder.

### components

Necessary components placed here which can I use later in any pages or component.

### hooks

I create a custom hook for fetch project with `react-query` so that i can access project from anywhere i need by calling hook.

### store

By this store with zustand I maintain the state on ** To DO | In Progress | Done **.

### types

I need some types in some pages. So I write them here and export them and use them by importing where I need.

### views

I separated the complex ui here without gathering them app or component. All bar like sidebar, topbar, footer etc. remain in appbars folder and every folder will have a index file and if needed we can create multiple file here and import them on index file and only index file will be imported on page so that our page will be clear.

## My mistake and other

I can't do it perfectly I know. I am not expert in Antd and Zustand. But I have confidence to use package and learn quickly asap. Many Many bugs are here, perdon me. Actually I do a similar work on my previous company which is design in NextJS with TailwindCSS but not too much about state management. I am interested about it. I do it personally now. I don't think about salary now, I highly eager to join in Programming Hero. I will be too much pleased if I selected for furthur process because I need a job badly.
