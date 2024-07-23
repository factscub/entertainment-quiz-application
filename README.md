# SETUP INSTRUCTIONS
## NOTE: To speed things up, i used pre-built tailwind css compononents like checkbox, radiobutton, loader and so on.

### Tech Stack

```bash
 1. Next.js 
 Reason: Provides SSR and SSG for optimized performance and allows entire project to run on single domain.
 2. PostgreSQL
 Reason:  Scalable and feature-rich database for complex data management.
 3. Tailwind css
 Reason: Provides utilities for responsive design right out of the box.
```


#### Clone the project

```bash
https://github.com/factscub/entertainment-quiz-application.git
```

#### Go to the project directory

```bash
  cd entertainment-quiz-application
```

## Quiz Application URL

### Local

```bash
http://localhost:3000
```

### Production 
(Since the DATABASE hosting is free, Free instances spin down after periods of inactivity. So please wait for about 2-3 minutes after visiting the URL for the first time)

```bash
https://entertainment-quiz-application.vercel.app
```

## Copy variables.example file to .env and replace those values with yours

#### Linux/macOs

```bash
$ cp variables.example .env
```

#### Windows

```bash
copy variables.example .env
```

## Installation

```bash
$ npm install
```

## Running the app



```bash
# build the project first
$ npm run build

# development mode
$ npm run dev

# production mode
$ npm run start
```

